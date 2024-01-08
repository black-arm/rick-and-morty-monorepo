import { TestBed } from "@angular/core/testing"
import { GeneralStore } from "./general-store"

describe('general store', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralStore ]
    })

  })

  it('should create', () => {
    const generalStore = TestBed.inject(GeneralStore)
    expect(generalStore).toBeTruthy()
  })

  it('should isLoading to true', () => {
    const generalStore = TestBed.inject(GeneralStore);
    generalStore.loading();
    expect(generalStore.isLoading()).toBe(true);
  })

  it('should isLoading to false', () => {
    const generalStore = TestBed.inject(GeneralStore);
    generalStore.stopLoading();
    expect(generalStore.isLoading()).toBe(false);
  })

  it('should isError to true and error message', () => {
    const generalStore = TestBed.inject(GeneralStore);
    generalStore.error('Error Message');
    expect(generalStore.isError()).toBe(true);
    expect(generalStore.errorMessage()).toBe('Error Message')
  })

  it('should isError to false and error message empty', () => {
    const generalStore = TestBed.inject(GeneralStore);
    generalStore.clearError();
    expect(generalStore.isError()).toBe(false);
    expect(generalStore.errorMessage()).toBe('');
  })

})
