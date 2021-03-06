import { InvoiceComponent } from './../invoice/invoice.component';
import { PaymentComponent } from './../payment/payment.component';
import { MessagesComponent } from './../messages/messages.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { SettingsComponent } from '../settings/settings.component';
import { TableComponent } from '../table/table.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BillingComponent } from '../billing/billing.component';
import { NotificationComponent } from '../notification/notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TotalCallsComponent } from '../total-calls/total-calls.component';
import { OutgoingCallsComponent } from '../outgoing-calls/outgoing-calls.component';
import { IncomingCallsComponent } from '../incoming-calls/incoming-calls.component';
import { MissedCallsComponent } from '../missed-calls/missed-calls.component';
import { CallDetailComponent } from '../call-detail/call-detail.component';
import { PaymoneyComponent } from '../paymoney/paymoney.component';
import { TransactionFailComponent } from '../transaction-fail/transaction-fail.component';
import { TransactionSuccessComponent } from '../transaction-success/transaction-success.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    SettingsComponent,
    TableComponent,
    DashboardComponent,
    BillingComponent,
    NotificationComponent,
    TotalCallsComponent,
    OutgoingCallsComponent,
    IncomingCallsComponent,
    MissedCallsComponent,
    CallDetailComponent,
    MessagesComponent,
    PaymentComponent,
    PaymoneyComponent,
    TransactionFailComponent,
    TransactionSuccessComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    NgxAudioPlayerModule,
    ReactiveFormsModule,
    RouterModule.forChild(LayoutRoutingModule),
  ],
})
export class LayoutModule { }
