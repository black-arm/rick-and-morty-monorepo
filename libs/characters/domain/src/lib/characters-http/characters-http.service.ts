
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from './endpoints';
import { Response } from '@rick-and-morty-monorepo/util';
import { Character, CharacterFilters } from '@rick-and-morty-monorepo/characters-util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersHttpService {

  endpoints = new Endpoints();

  constructor(private httpClient: HttpClient) { }

  getCharacters(filters?: CharacterFilters): Observable<Response<Character>>{
    return this.httpClient.get<Response<Character>>(this.endpoints.characters, { params: {...filters}});
  }
}
