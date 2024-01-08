import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';
import { GeneralStore } from '../domain/general-store/general-store';
import { inject } from '@angular/core';

export const spinnerLoadingInterceptor: HttpInterceptorFn = (req, next) => {

  const store = inject(GeneralStore);
  store.loading()
  return next(req).pipe(tap(event => {
    if(event.type === HttpEventType.Response){
      store.stopLoading()
    }
  }));
};
