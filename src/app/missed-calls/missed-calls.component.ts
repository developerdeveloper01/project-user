import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-missed-calls',
  templateUrl: './missed-calls.component.html',
  styleUrls: ['./missed-calls.component.css']
})
export class MissedCallsComponent implements OnInit {
  allmissed:any
  s: number = 1;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.missedcalllogs()
  }

  missedcalllogs(){
    this.userService.getmissedcalldetails("2581").subscribe((response:any)=>{
      console.log(response)
      this.allmissed = response.data
    },(error)=>{
     console.log(error)
    })
  }

}
