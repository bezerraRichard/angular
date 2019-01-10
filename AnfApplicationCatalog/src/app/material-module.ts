import {NgModule} from '@angular/core';
import {
     MatMenuModule,
     MatToolbarModule,
     MatIconModule,
     MatButtonModule,
     MatButtonToggleModule,
     MatGridListModule,
     MatSidenavModule,
     MatListModule
  } from '@angular/material';

@NgModule({
    imports: [
      MatMenuModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatGridListModule,
      MatSidenavModule,
      MatListModule
    ],
    exports: [
      MatMenuModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatGridListModule,
      MatSidenavModule,
      MatListModule
    ]
  })
  export class MaterialModule {}
