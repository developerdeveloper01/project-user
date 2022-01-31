import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-incoming-calls',
  templateUrl: './incoming-calls.component.html',
  styleUrls: ['./incoming-calls.component.css']
})
export class IncomingCallsComponent implements OnInit {
  allreceived: any;
  r: number = 1;
  newarr: any;
  datemax = new Date().toISOString().split("T")[0];
  datemin: any;
  lastdate: any;
  filterdata: FormGroup
  constructor(public userService: UserService, private fb: FormBuilder) {
    this.filterdata = this.fb.group({
      startdate: [''],
      enddate: [''],
    })
  }

  ngOnInit(): void {
    this.receivedcalllogs();
  }

  receivedcalllogs() {
    this.userService.getreceivedcalls("2581").subscribe((response: any) => {
      console.log(response)
      this.allreceived = response.data
      this.datemin = response.data[0]?.created_time?.slice(0, 10)
      this.lastdate = response.data[response.data.length - 1]?.created_time?.slice(0, 10)
      this.filterdata.setValue({
        startdate: this.datemin,
        enddate: this.lastdate
      })
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
    this.newarr = this.allreceived.filter(selectedDate)
    console.log(this.newarr)
  }
}
