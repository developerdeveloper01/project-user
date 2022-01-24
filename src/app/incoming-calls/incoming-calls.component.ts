import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-incoming-calls',
  templateUrl: './incoming-calls.component.html',
  styleUrls: ['./incoming-calls.component.css']
})
export class IncomingCallsComponent implements OnInit {
  allreceived:any;
  r: number = 1;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.receivedcalllogs();
  }

  receivedcalllogs(){
    this.userService.getreceivedcalls("2581").subscribe((response:any)=>{
      console.log(response)
      this.allreceived = response.data
    },(error)=>{
     console.log(error)
    })
  }

}
