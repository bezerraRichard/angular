import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AplicationComponent, NewComponent, EditComponent, DetailsComponent } from './aplication/';
import { APLICATION_ROUTES } from './catalog.routes';
import { MaterialModule } from '../material-module';


@NgModule({
  declarations: [AplicationComponent, NewComponent, EditComponent, DetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(APLICATION_ROUTES)
  ]
})
export class CatalogModule { }
