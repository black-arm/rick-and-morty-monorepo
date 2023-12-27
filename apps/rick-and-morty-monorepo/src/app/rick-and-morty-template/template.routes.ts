import { Routes } from "@angular/router";
import { RickAndMortyTemplateComponent } from "./rick-and-morty-template.component";

export const TEMPLATE_ROUTES: Routes = [
  {
    path: '',
    component: RickAndMortyTemplateComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@rick-and-morty-monorepo/characters/shell').then(m => m.routes)
      },
      {
        path: 'episodes',
        loadChildren: () => import('@rick-and-morty-monorepo/episodes-shell').then(m => m.EPISODES_ROUTES)
      },
      {
        path: 'locations',
        loadChildren: () => import('@rick-and-morty-monorepo/locations-shell').then(m => m.LOCATION_ROUTES)
      }
    ]
  }
]
