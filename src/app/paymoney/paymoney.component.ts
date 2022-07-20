import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymoney',
  templateUrl: './paymoney.component.html',
  styleUrls: ['./paymoney.component.css']
})
export class PaymoneyComponent implements OnInit {

  public payuform: any = {};
  disablePaymentButton: boolean = true;
  constructor(private http: HttpClient) { }

  confirmPayment() {
    const paymentPayload = {
      email: this.payuform.email,
      name: this.payuform.firstname,
      phone: this.payuform.phone,
      productInfo: this.payuform.productinfo,
      amount: this.payuform.amount,
      status: this.payuform.status
    }
    return this.http.post<any>('http://localhost:6789/api/admin/paynownew', paymentPayload).subscribe(
      (data: any) => {
        console.log(data.response);
        this.payuform.txnid = data.txnId;
        this.payuform.surl = data.sUrl;
        this.payuform.furl = data.fUrl;
        this.payuform.key = data.key;
        this.payuform.hash = data.hash;
        this.payuform.txnid = data.txnId;
        this.disablePaymentButton = false;
        window.location.href = data.response;
      }, error => {
        console.log(error);
      })
  }

  ngOnInit() {
  }

}
