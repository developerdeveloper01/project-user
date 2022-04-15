import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-outgoing-calls',
  templateUrl: './outgoing-calls.component.html',
  styleUrls: ['./outgoing-calls.component.css'],
})
export class OutgoingCallsComponent implements OnInit {
  allcalllogs: any;
  totalbill: any;
  q: number = 1;
  newarr: any;
  datemax = new Date().toISOString().split("T")[0];
  datemin: any;
  lastdate: any;
  filterdata: FormGroup
  userDetails: any;
  constructor(public userService: UserService, private fb: FormBuilder) {

    this.filterdata = this.fb.group({
      startdate: [''],
      enddate: [''],
    })
  }

  ngOnInit(): void {

    this.userService.getmyprofile().subscribe((response:any)=>{
      //  console.log(response)
        this.userDetails = response.data;
  
        var did_no = response.data.alloted_did.did_no;
        var lastFourDid = did_no.substr(did_no.length - 4); 
         console.log(lastFourDid)

         this.mycalllogs(lastFourDid);        

      },(error)=>{
       console.log(error)
      })

  }


  mycalllogs(lastFourDid:any) { 
    this.userService.getcalllogs(lastFourDid).subscribe((response: any) => {
      console.log(response)
      this.allcalllogs = response.data
      let total = 0;

      this.datemin = response.data[0]?.created_time?.slice(0, 10)
      this.lastdate = response.data[response.data.length - 1]?.created_time?.slice(0, 10)
      this.filterdata.setValue({
        startdate: this.datemin || new Date().toISOString().split('T')[0],
        enddate: this.lastdate || new Date().toISOString().split('T')[0]
      })

      response.data.forEach((element: { billsec: string; }) => {
        total = total + parseInt(element.billsec);
      });
      this.totalbill = total;
      console.log(total)


    }, (error) => {
      console.log(error)
    })
  }

  filterdate() {
    console.log(this.filterdata.value.startdate)
    console.log(this.filterdata.value.enddate)

    const selectedDate = (item: any) => {

      return item.created_time.slice(0, 10) >= this.filterdata.value.startdate && item.created_time.slice(0, 10) <= this.filterdata.value.enddate
    }
    this.newarr = this.allcalllogs.filter(selectedDate)
    console.log(this.newarr)
  }
}
