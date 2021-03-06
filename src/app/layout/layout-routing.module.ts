import { AllinvoiceComponent } from './../allinvoice/allinvoice.component';
import { InvoiceComponent } from './../invoice/invoice.component';

import { OutgoingCallsComponent } from './../outgoing-calls/outgoing-calls.component';
import { PlansComponent } from './../plans/plans.component';
import { Routes } from '@angular/router';
import { BillingComponent } from '../billing/billing.component';
import { PostbillingComponent } from '../postbilling/postbilling.component';


import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { MessagesComponent } from '../messages/messages.component';
import { NotificationComponent } from '../notification/notification.component';
import { ProfileComponent } from '../profile/profile.component';
import { SettingsComponent } from '../settings/settings.component';
import { TableComponent } from '../table/table.component';
import { ChatsComponent } from '../chats/chats.component';
import { TotalCallsComponent } from '../total-calls/total-calls.component';
import { IncomingCallsComponent } from '../incoming-calls/incoming-calls.component';
import { MissedCallsComponent } from '../missed-calls/missed-calls.component';
import { CallDetailComponent } from '../call-detail/call-detail.component';
import { PaymentComponent } from '../payment/payment.component';
import { PaymoneyComponent } from '../paymoney/paymoney.component';
import { TransactionSuccessComponent } from '../transaction-success/transaction-success.component';
import { TransactionFailComponent } from '../transaction-fail/transaction-fail.component';
import { SpinnerOverlayComponent } from '../spinner-overlay/spinner-overlay.component';

export const LayoutRoutingModule: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'setting', component: SettingsComponent },
  { path: 'table', component: TableComponent },
  { path: 'total-calls', component: TotalCallsComponent },
  { path: 'outgoing-calls', component: OutgoingCallsComponent },
  { path: 'incoming-calls', component: IncomingCallsComponent },
  { path: 'missed-calls', component: MissedCallsComponent },
  { path: 'call-details/:id', component: CallDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'billing/:id', component: BillingComponent },
  { path: 'postpaidbilling/:id', component: PostbillingComponent },


  { path: 'notifications', component: NotificationComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'chats', component: ChatsComponent },
  { path: 'paymentverity', component: PaymentComponent },
  { path: 'checkoutpage', component: PaymoneyComponent },
  { path: 'transaction-success', component: TransactionSuccessComponent },
  { path: 'transaction-failed', component: TransactionFailComponent },
  { path: 'loader', component: SpinnerOverlayComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'allinvoice', component: AllinvoiceComponent },
];
