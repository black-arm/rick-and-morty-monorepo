import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('@rick-and-morty-monorepo/characters/features').then(
                (m) => m.routes
            ),
    },
];
