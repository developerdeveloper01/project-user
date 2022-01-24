import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails:any;
  Plans:any;
  defaultimage = "../assets/img/bruce-mars.jpg"

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getmydata();
    this.getpopularplans();
  }

  getmydata(){
    this.userService.getmyprofile().subscribe((response:any)=>{
      console.log(response)
      this.userDetails = response.data;
    },(error)=>{
     console.log(error)
    })
  }

  getpopularplans(){
    console.log("Popular plans")
    this.userService.getallplans().subscribe((response:any)=>{
      console.log(response)
      this.Plans = response.data;
    },(error)=>{
     console.log(error)
    })
  }
}
