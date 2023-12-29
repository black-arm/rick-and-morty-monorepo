import { TestBed } from "@angular/core/testing"
import { CharacterStore } from './character-store';
import { CharactersHttpService } from "../characters-http/characters-http.service";
import { Character, CharacterFilters } from "@rick-and-morty-monorepo/characters-util";
import { of } from "rxjs";
import { Response } from "@rick-and-morty-monorepo/util";

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
const characters: Character[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: 'Mad Scientist',
    gender: 'Male',
    origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2'],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: 'Sidekick',
    gender: 'Male',
    origin: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2'],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:48:46.250Z',
  },
  {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: 'Teenager',
    gender: 'Female',
    origin: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2'],
    url: 'https://rickandmortyapi.com/api/character/3',
    created: '2017-11-04T18:48:46.250Z',
  },
];

export class CharacterServiceMock {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCharacters(filters?: CharacterFilters) {
    return of<Response<Character>>({ info: {pages: 2, count: 3, next: null, prev: null}, results: characters})
  }
}
