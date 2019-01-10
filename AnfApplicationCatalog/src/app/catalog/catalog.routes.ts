import { Routes } from '@angular/router';

import { AplicationComponent, NewComponent, EditComponent, DetailsComponent } from './aplication/';

export const APLICATION_ROUTES: Routes = [
  {
    path: 'catalog/aplication',
    component: AplicationComponent
  },
  {
    path: 'catalog/aplication/new',
    component: NewComponent
  },
  {
    path: 'catalog/aplication/edit/:id',
    component: EditComponent
  },
  {
    path: 'catalog/aplication/details/:id',
    component: DetailsComponent
  }
];
