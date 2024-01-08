import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";

export interface GeneralState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: GeneralState = {
  isLoading: false,
  isError: false,
  errorMessage: ''
}

export const GeneralStore = signalStore(
  { providedIn: 'root' },
  withState<GeneralState>(initialState),
  withMethods(store => ({
    loading: () => patchState(store, { isLoading: true }),
    stopLoading: () => patchState(store, { isLoading: false }),
    error: (errorMessage: string) => patchState(store, { isError: true, errorMessage: errorMessage}),
    clearError: () => patchState(store, { isError: false, errorMessage: ''})
  }))
)
