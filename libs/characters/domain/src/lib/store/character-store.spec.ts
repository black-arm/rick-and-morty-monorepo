import { TestBed } from "@angular/core/testing"
import { CharacterStore } from './character-store';
import { CharactersHttpService } from "../characters-http/characters-http.service";
import { Character, CharacterFilters } from "@rick-and-morty-monorepo/characters-util";
import { of } from "rxjs";
import { Response } from "@rick-and-morty-monorepo/util";
import { charactersList } from '@rick-and-morty-monorepo/mocks';

describe('character store', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterStore, {
        provide: CharactersHttpService, useClass: CharacterServiceMock
      }]
    })

  })

  it('should be created', () => {
    const signal = TestBed.inject(CharacterStore);
    expect(signal).toBeTruthy();
  });

  it('should set characters array', () => {
    const store = TestBed.inject(CharacterStore);
    const isError = store.isError();
    expect(isError).toBeFalsy();
    store.charactersRequest({});
    expect(store.pages()).toBe(2);
    expect(store.characters()?.length).toBe(3);
  });
})

// data.service.mock.ts
const characters: Character[] = charactersList;

export class CharacterServiceMock {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCharacters(filters?: CharacterFilters) {
    return of<Response<Character>>({ info: {pages: 2, count: 3, next: null, prev: null}, results: characters})
  }
}
