import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/characters-page/characters-page.component').then(
                (c) => c.CharactersPageComponent
            ),
    },
];
