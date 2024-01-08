import { TestBed, inject } from '@angular/core/testing';
import { CharactersHttpService } from './characters-http.service';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

describe('characters http service', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CharactersHttpService],
        });
    });

    it('should be return character list', inject(
        [CharactersHttpService, HttpTestingController],
        (service: CharactersHttpService, httpMock: HttpTestingController) => {
            service.getCharacters().subscribe(() => {});
            const req = httpMock.expectOne(
                'https://rickandmortyapi.com/api/character'
            );
            expect(req.request.method).toEqual('GET');

            req.flush([]);
            httpMock.verify();
        }
    ));

    it('should be insert params into url', inject(
        [CharactersHttpService, HttpTestingController],
        (service: CharactersHttpService, httpMock: HttpTestingController) => {
            service
                .getCharacters({
                    name: 'Rick',
                    species: 'Human',
                    status: 'alive',
                    gender: 'male',
                    page: 2,
                })
                .subscribe();
            const req = httpMock.expectOne(
                'https://rickandmortyapi.com/api/character?name=Rick&species=Human&status=alive&gender=male&page=2'
            );
            expect(req.request.method).toEqual('GET');
            expect(req.request.params.get('name')).toEqual('Rick');
            //expect(req.request.params.get('type')).toEqual('')
            expect(req.request.params.get('species')).toEqual('Human');
            expect(req.request.params.get('status')).toEqual('alive');
            expect(req.request.params.get('gender')).toEqual('male');
            expect(req.request.params.get('page')).toEqual('2');
        }
    ));
});
