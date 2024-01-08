import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import {
    Character,
    CharacterFilters,
} from '@rick-and-morty-monorepo/characters-util';
import { inject } from '@angular/core';
import { CharactersHttpService } from '../characters-http/characters-http.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { Response } from '@rick-and-morty-monorepo/util';

export interface CharacterState {
    isLoading: boolean;
    isError: boolean;
    errorMessage: string | null;
    characters: Character[];
    pages: number | null;
}

export const CharacterStore = signalStore(
    { providedIn: 'root' },
    withState<CharacterState>({
        isLoading: false,
        isError: false,
        errorMessage: null,
        characters: [],
        pages: null,
    }),
    withMethods(
        (store, characterHttpService = inject(CharactersHttpService)) => ({
            charactersRequest: rxMethod<CharacterFilters>(
                pipe(
                    tap(() => patchState(store, { isLoading: true })),
                    switchMap((input: CharacterFilters) =>
                        characterHttpService.getCharacters(input)
                    ),
                    tapResponse({
                        next: (result: Response<Character>) =>
                            patchState(store, {
                                pages: result.info.pages,
                                characters: result.results,
                                isLoading: false,
                            }),
                        error: (error: { error: string }) =>
                            patchState(store, {
                                isError: true,
                                errorMessage: error.error,
                                isLoading: false,
                            }),
                        finalize: () => patchState(store, { isLoading: false }),
                    })
                )
            ),
        })
    )
);
