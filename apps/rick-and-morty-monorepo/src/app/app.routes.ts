import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./rick-and-morty-template/template.routes').then(m => m.TEMPLATE_ROUTES),
  }
];
