import { LayoutAuthComponent } from './layout-auth/layout-auth.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { TopnavComponent } from './layout/topnav/topnav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PluginComponent } from './layout/plugin/plugin.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { ServiceComponent } from './service/service.component';
import { PlansComponent } from './plans/plans.component';
import { ChatsComponent } from './chats/chats.component';
import { AddCardComponent } from './add-card/add-card.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    FooterComponent,
    PluginComponent,
    LayoutComponent,
    LayoutAuthComponent,
    ServiceComponent,
    PlansComponent,
    ChatsComponent,
    AddCardComponent
  ],
  providers: [UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
