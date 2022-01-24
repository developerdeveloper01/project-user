import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthComponent } from './layout-auth/layout-auth.component';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '',redirectTo: 'dashboard',pathMatch:'full'},
  {
    path: '',
    component: LayoutComponent,
    canActivate:[AuthGuard],
    children: [{
      path: '',
      loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
    }]
  },
  {
    path: '',
    component: LayoutAuthComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layout-auth/layout-auth.module').then(m => m.LayoutAuthModule)
    }]
  }
];

@NgModule({
  imports: [CommonModule,BrowserModule,RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: []
})
export class AppRoutingModule { }
