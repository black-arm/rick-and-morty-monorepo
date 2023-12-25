import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@rick-and-morty-monorepo/characters/shell').then(m => m.routes)
  }
];
