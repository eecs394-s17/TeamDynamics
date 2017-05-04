import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdCardModule,
  MdInputModule,
  MdListModule,
  MdButtonModule,
  MdProgressBarModule,
  MdGridListModule,
  MdTabsModule,
  MdIconModule
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
    MdTabsModule,
    MdIconModule
  ],
  exports: [
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdButtonModule,
    MdProgressBarModule,
    MdGridListModule,
    MdTabsModule,
    MdIconModule
  ],
})
export class AppMaterialModule { }