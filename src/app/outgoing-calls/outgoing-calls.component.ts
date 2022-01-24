import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-outgoing-calls',
  templateUrl: './outgoing-calls.component.html',
  styleUrls: ['./outgoing-calls.component.css']
})
export class OutgoingCallsComponent implements OnInit {
  allcalllogs:any;
  totalbill:any;
  q: number = 1;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.mycalllogs();
  }


  mycalllogs(){
    this.userService.getcalllogs("2581").subscribe((response:any)=>{
      console.log(response)
      this.allcalllogs = response.data
      let total = 0;
      response.data.forEach((element: { billsec: string; }) => {
        total = total +parseInt(element.billsec);
      });
      this.totalbill = total;
      console.log(total)
    },(error)=>{
     console.log(error)
    })
  }
}
