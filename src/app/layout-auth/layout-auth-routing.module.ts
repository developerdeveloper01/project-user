import { Routes } from '@angular/router';

import { SignInComponent } from '../sign-in/sign-in.component';



export const LayoutAuthRoutingModule: Routes = [
  { path: 'login', component: SignInComponent },
];
