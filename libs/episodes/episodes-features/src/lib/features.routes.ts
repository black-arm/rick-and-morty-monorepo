import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/episodes-page/episodes-page.component').then(c => c.EpisodesPageComponent)
  }
]
