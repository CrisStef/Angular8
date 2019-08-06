import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';

import {
  MatInputModule,
  MatButtonModule,
  MatTooltipModule,
  MatIconModule,
  MatSnackBarModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent, LogarComponent } from './components';
import { LoginService } from './services';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatListModule
  ],
  declarations: [
    LoginComponent,
    LogarComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
