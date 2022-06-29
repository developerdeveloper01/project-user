import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { UserService } from '../user.service'

@Component({
  selector: 'app-missed-calls',
  templateUrl: './missed-calls.component.html',
  styleUrls: ['./missed-calls.component.css'],
})
export class MissedCallsComponent implements OnInit {
  allmissed: any
  s: number = 1
  newarr: any
  datemax = new Date().toISOString().split('T')[0]
  datemin: any
  lastdate: any
  filterdata: FormGroup
  userDetails: any
  constructor(public userService: UserService, private fb: FormBuilder) {
    this.filterdata = this.fb.group({
      startdate: [''],
      enddate: [''],
    })
  }

  ngOnInit(): void {
    this.userService.getmyprofile().subscribe(
      (response: any) => {
        //  console.log(response)
        this.userDetails = response.data
        var did_no = response.data?.alloted_did
        let lastFourDid = String(did_no).slice(-4)
        console.log('@@@@@@@miscall', lastFourDid)
        this.missedcalllogs(lastFourDid)
      },
      (error) => {
        console.log(error)
      },
    )
  }

  missedcalllogs(lastFourDid: any) {
    this.userService.getmissedcalldetails(lastFourDid).subscribe(
      (response: any) => {
        console.log(response)
        this.allmissed = response.data

        this.datemin = response.data[0]?.created_time?.slice(0, 10)
        this.lastdate = response.data[
          response.data.length - 1
        ]?.created_time?.slice(0, 10)
        this.filterdata.setValue({
          startdate: this.datemin || new Date().toISOString().split('T')[0],
          enddate: this.lastdate || new Date().toISOString().split('T')[0],
        })
      },
      (error) => {
        console.log(error)
      },
    )
  }

  filterdate() {
    console.log(this.filterdata.value.startdate)
    console.log(this.filterdata.value.enddate)

    const selectedDate = (item: any) => {
      return (
        item.created_time.slice(0, 10) >= this.filterdata.value.startdate &&
        item.created_time.slice(0, 10) <= this.filterdata.value.enddate
      )
    }
    this.newarr = this.allmissed.filter(selectedDate)
    console.log(this.newarr)
  }
}
