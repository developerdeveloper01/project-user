import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutAuthRoutingModule } from './layout-auth-routing.module';

import { SignInComponent } from './../sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forChild(LayoutAuthRoutingModule)
  ],
  declarations: [
    SignInComponent
  ]
})
export class LayoutAuthModule { }
