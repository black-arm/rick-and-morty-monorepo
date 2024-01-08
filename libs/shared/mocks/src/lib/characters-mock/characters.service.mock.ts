import { CharacterFilters, Character } from "@rick-and-morty-monorepo/characters-util";
import { charactersList } from "./characters-list";
import { of } from "rxjs";
import { Response } from "@rick-and-morty-monorepo/util";

export class CharacterServiceMock {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCharacters(filters?: CharacterFilters) {
    return of<Response<Character>>({ info: {pages: 2, count: 3, next: null, prev: null}, results: charactersList})
  }
}
