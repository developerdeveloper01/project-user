import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-postbilling',
  templateUrl: './postbilling.component.html',
  styleUrls: ['./postbilling.component.css']
})
export class PostbillingComponent implements OnInit {
  bills: any
  viewpaypage: boolean = false
  userDetails: any
  singleplans: any
  tax: any;
  total: any;
  constructor(private http: HttpClient, public userService: UserService, private router:ActivatedRoute) { } 


  // I have all below fields values
  // paytm:any = {
  //     MID: "hUrIPQ70388081414462", // paytm provide
  //     WEBSITE: "WEBSTAGING", // paytm provide
  //     INDUSTRY_TYPE_ID: "Retail", // paytm provide
  //     CHANNEL_ID: "WEB", // paytm provide
  //     ORDER_ID: "neworder_123", // unique id
  //     CUST_ID: "customer_123", // customer id
  //     MOBILE_NO: "5555566666", // customer mobile number
  //     EMAIL: "test555666@paytm.com", // customer email
  //     TXN_AMOUNT: "10.00", // transaction amount
  //     CALLBACK_URL: "http://localhost:4200/paymentverity", // Call back URL that i want to redirect after payment fail or success
  //     // CHECKSUMHASH:'',
  //     // Key:"Z2@Dn0smzMJbC!N9"
  //   };

  // submitForm() {
  //     // I will do API call and will get CHECKSUMHASH.
  //     this.http.post('http://localhost:6789/api/admin/paytmpay', this.paytm)
  //        .subscribe((res: any) => {
  //              // As per my backend i will get checksumhash under res.data
  //              //console.log(res)
  //              this.paytm.CHECKSUMHASH = res//
  //              // than i will create form
  //              this.createPaytmForm();
  //         });
  // };

  // createPaytmForm() {
  //    const my_form: any = document.createElement('form');
  //     my_form.name = 'paytm_form';
  //     my_form.method = 'post';
  //     //my_form.action = 'https://securegw-stage.paytm.in/order/process';
  //     my_form.action = 'https://securegw-stage.paytm.in/order/process';

  //     const myParams = Object.keys(this.paytm);
  //     console.log(myParams)
  //     console.log(my_form)
  //     for (let i = 0; i < myParams.length; i++) {
  //       const key = myParams[i];
  //       let my_tb: any = document.createElement('input');
  //       my_tb.type = 'hidden';
  //       my_tb.name = key;
  //       my_tb.value = this.paytm[key];
  //       my_form.appendChild(my_tb);
  //     };
  //     console.log(my_form);

  //     document.body.appendChild(my_form);
  //     //my_form.submit();
  // // after click will fire you will redirect to paytm payment page.
  // // after complete or fail transaction you will redirect to your CALLBACK URL
  // };



  ////////////////////////////////////////////////
  ShowBillingForm: boolean = true;
  PlanId: any;
  PlanRes: any = [];
  PlanDetail: any = [];
  CustomField: boolean = false;
  placemntCount: any;
  totalPlaceCost: any;
  costPerPlace: any;
  DiscountAmount: any = 30;
  DiscountedAmount: any;
  NetAmount: any;

  // ************************Paytm Payment Process *********************
  RequestedData: any;
  responseBilling: any;
  EmployerId: any;
  timestamp: any;
  TransactionFormshow: boolean = false;
  RequestDataPay: any;
  SubmitBillingDetail() {
    this.EmployerId = "231562812"//this.userdetail.id;
    this.timestamp = +new Date;
    this.timestamp.toString();
    //this.PlanDetailForm.controls['BillingState'].value
    let order_id = Math.floor(10000000000 + Math.random() * 90000000000)
    this.RequestedData = {
      "name": "Deepak",//this.PlanDetailForm.controls.BillingName.value,
      "email": "yadavdeepak486@gmail.com",// this.PlanDetailForm.controls.Billingemail.value,
      "contactnum": "8871782180",//this.PlanDetailForm.controls.Billingcontactnum.value,
      "address": "abcd address",//this.PlanDetailForm.controls.Billingaddress.value,
      "state": "madhyapradesh",//this.PlanDetailForm.controls.BillingState.value,
      "district": "Dewas",//this.PlanDetailForm.controls.BillingDistrict.value,
      "employerid": "231562812",//this.EmployerId,
      "cmpid": "Comp_12434",//this.userdetail.companyID,
      "createdby": this.EmployerId,
      // "order_id": Math.random().toString(36).substr(2, 9),
      "order_id": "neworder_12345",
      "transaction_id": '',
      "status": 'Pending',
      // "validfrom":this.PlanDetail.valiD_FROM? moment(this.PlanDetail.valiD_FROM).format('YYYY-MM-DD'):parseInt('null'),
      // "validto":this.PlanDetail.valiD_TO? moment(this.PlanDetail.valiD_TO).format('YYYY-MM-DD'):parseInt('null'),
      "Response_msg": 'Successfull',
      "TXN_AMOUNT": "20",//this.PlanDetailForm.controls.Amount.value,
      "Payment_For": 'REGISTRATION',
      //"CALLBACK_URL": "http://localhost:4200/#/paymentverity",
      "CALLBACK_URL": `https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=hUrIPQ70388081414462&orderId=neworder_12345`,
    };

    //this.spinnerService.show();
    this.http.post(`http://localhost:6789/api/admin/paytmpay`, this.RequestedData).subscribe(res => {
      // this.responseBilling = res;
      // this.PurchaseStatus = this.responseBilling.purchasePlanStatus;
      // this.TransactionFormshow = true;
      console.log(res)
      //this.spinnerService.show();
      //localStorage.setItem('PurchaseStatus', this.PurchaseStatus);

      this.RequestDataPay = {
        // "MID": this.RequestedData.mid,
        // "WEBSITE": this.RequestedData.website,
        // "INDUSTRY_TYPE_ID": this.RequestedData.industrY_TYPE_ID,
        // "CHANNEL_ID": this.RequestedData.channeL_ID,
        // "ORDER_ID": this.RequestedData.ordeR_ID,
        // "CUST_ID": this.RequestedData.cusT_ID,
        // "MOBILE_NO": this.RequestedData.mobilE_NO,
        // "EMAIL": this.RequestedData.email,
        // "TXN_AMOUNT": this.RequestedData.txN_AMOUNT,
        CHECKSUMHASH: res,
        // "CALLBACK_URL": this.RequestedData.callbacK_URL
        MID: "hUrIPQ70388081414462", // paytm provide
        WEBSITE: "WEBSTAGING", // paytm provide
        INDUSTRY_TYPE_ID: "Retail", // paytm provide
        CHANNEL_ID: "WEB", // paytm provide
        ORDER_ID: "neworder_12345", // unique id
        CUST_ID: "customer_123", // customer id
        MOBILE_NO: "5555566666", // customer mobile number
        EMAIL: "test555666@paytm.com", // customer email
        TXN_AMOUNT: "100.00", // transaction amount
        CALLBACK_URL: "http://localhost:6789/api/admin/verifypay", // Call back URL that i want to redirect after payment fail or success
      };
      this.createPaytmForm();
    });
  }

  createPaytmForm() {
    const my_form: any = document.createElement('form');
    my_form.name = 'paytm_form';
    my_form.method = 'post';
    // my_form.action = 'https://securegw-stage.paytm.in/order/process';
    my_form.action = `https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=hUrIPQ70388081414462&orderId=neworder_12345`;
    //my_form.action = this.responseBilling.paytmgatway;
    const myParams = Object.keys(this.RequestDataPay);
    for (let i = 0; i < myParams.length; i++) {
      const key = myParams[i];
      let my_tb: any = document.createElement('input');
      // my_tb.type = 'hidden';
      my_tb.name = key;
      my_tb.value = this.RequestDataPay[key];
      my_form.appendChild(my_tb);
    };
    document.body.appendChild(my_form);
    my_form.submit();
    //console.log(my_form)
  }

  ngOnInit(): void {
    this.getmybills()
    this.getsinglepostpaidplan()

  }

  getsinglepostpaidplan() {    
    this.userService.getsinglepostpaidplan(this.router.snapshot.params.id).subscribe((response:any)=>{
      console.log("Single Pospaid plans")
      console.log(response)
      this.singleplans = response.data;
      this.tax = response.data.planprice * 18 / 100;
      this.total = response.data.planprice +  this.tax;

    },(error)=>{
     console.log(error)
    })
  }

  getmybills() {
    var loginId = localStorage.getItem('auth-data');
    this.userService.getmybilling(loginId).subscribe((response: any) => {
      console.log(response)
      this.bills = response.data
    }, (error) => {
      console.log(error)
    })
  }

  Payumoney() {
    console.log("payumoney")
    this.userService.getmyprofile().subscribe((response: any) => {
      console.log(response)
      this.userDetails = response.data;
      
      this.userService.getsinglepostpaidplan(this.router.snapshot.params.id).subscribe((planresp:any)=>{

        this.tax = planresp.data.planprice * 18 / 100;
        this.total = planresp.data.planprice +  this.tax;

        const paymentPayload = {
          email: this.userDetails.email,
          name: this.userDetails.firstname,
          phone: this.userDetails.mobile,
          productInfo: planresp.data.plantitle,
          amount: this.total
        }

        console.log(paymentPayload)
       this.postandredirect(paymentPayload)

      })
      
    }, (error) => {
      console.log(error)
    })


    //test: https://test.payu.in/_payment

    //   Authorization	Bearer {{access_token}}
    // Content-Type	application/x-www-form-urlencoded

  }
  postandredirect(data: any) {
    this.userService.inittransaction(data).subscribe((response: any) => {
      console.log(response.response)

      window.location.href = response.response;
    }, (error) => {
      console.log(error)
    })
  }

  // submitPaymentForm() {
  //   if(this.checkValidations(this.payUMoney)) {
  //     this.payUMoneyService.makePayment(this.payUMoney).subscribe(
  //       PayUMoneyModel => this.onPaymentSuccess(PayUMoneyModel),
  //       error => this.onPaymentFailure(error)
  //     );
  //   } else {
  //     let message = new Message();
  //     message.isError = true;
  //     message.error_msg = "Fields missing";
  //     this.messageService.message(message);
  //   }
  // }


}
