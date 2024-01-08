import { Routes } from '@angular/router';

export const LOCATION_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/locations-page/locations-page.component').then(
                (c) => c.LocationsPageComponent
            ),
    },
];
