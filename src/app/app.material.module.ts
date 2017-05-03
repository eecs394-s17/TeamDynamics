import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdCardModule,
  MdInputModule,
  MdListModule,
  MdButtonModule,
  MdProgressBarModule,
  MdGridListModule,
  MdTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdButtonModule,
    MdProgressBarModule,
    MdGridListModule,
    MdTabsModule
  ],
  exports: [
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdButtonModule,
    MdProgressBarModule,
    MdGridListModule,
    MdTabsModule
  ],
})
export class AppMaterialModule { }