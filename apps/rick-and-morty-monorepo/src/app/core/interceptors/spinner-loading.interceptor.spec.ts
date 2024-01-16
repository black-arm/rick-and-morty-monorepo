import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { spinnerLoadingInterceptor } from './spinner-loading.interceptor';
import { GeneralStore } from '../domain/general-store/general-store';


describe('spinnerLoadingInterceptor', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let generalStore: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        provideHttpClientTesting(),
        provideHttpClient(withInterceptors([spinnerLoadingInterceptor])),
        GeneralStore
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    generalStore = TestBed.inject(GeneralStore)
  });

  it('should be created', () => {
    expect(httpClient).toBeTruthy();
    expect(httpTestingController).toBeTruthy();
  });

  afterEach(() => {
    httpTestingController.verify();
  })
  it('should spinner to true', () => {
    const url = 'https://localhost:8080/mockEndpoint';
    httpClient.get(url).subscribe(() =>{
      //expect(generalStore.isLoading()).toBeFalsy();
    });
    expect(generalStore.isLoading()).toBeTruthy();
    //const req = httpTestingController.expectOne('https://localhost:8080/mockEndpoint');
    //req.flush([], { status: 200 });

  })

});
