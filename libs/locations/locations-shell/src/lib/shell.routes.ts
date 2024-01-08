import { Routes } from '@angular/router';

export const LOCATION_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('@rick-and-morty-monorepo/locations-features').then(
                (r) => r.LOCATION_ROUTES
            ),
    },
];
