import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-total-calls',
  templateUrl: './total-calls.component.html',
  styleUrls: ['./total-calls.component.css']
})
export class TotalCallsComponent implements OnInit {
  p: number = 1;
  allcalls:any;
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getallcallsdetails();
  }


  getallcallsdetails(){
    this.userService.getallcalldetails("2581").subscribe((response:any)=>{
      console.log(response)
      this.allcalls = response.data
    },(error)=>{
     console.log(error)
    })
  }
}
