import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {
  MatButtonModule, MatDialog, MatDialogModule,
  MatIconModule,
  MatNativeDateModule, MatRadioModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
@NgModule({
  declarations: [HeaderComponent, DialogComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatRadioModule,
    RouterModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogComponent
  ],
  exports: [
    HeaderComponent,
    DialogComponent
  ],

})
export class CoreModule { }
