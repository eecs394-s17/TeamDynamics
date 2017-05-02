import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdCardModule,
  MdInputModule,
  MdListModule,
  MdButtonModule,
  MdProgressBarModule,
  MdGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdButtonModule,
    MdProgressBarModule,
    MdGridListModule
  ],
  exports: [
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdButtonModule,
    MdProgressBarModule,
    MdGridListModule
  ],
})
export class AppMaterialModule { }