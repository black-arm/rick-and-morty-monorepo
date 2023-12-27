import { Routes } from "@angular/router";

export const EPISODES_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('@rick-and-morty-monorepo/episodes-features').then(r => r.routes)
  }
]
