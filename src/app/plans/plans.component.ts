import { UserService } from 'src/app/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans:any[]=[]
  pospaidplans:any[]=[]
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getpopularplans()
    this.getpopularpospaidplans()
  }




  getpopularplans(){
    console.log("Popular plans")
    this.userService.getallplans().subscribe((response:any)=>{
      console.log(response)
      this.plans = response.data;
    },(error)=>{
     console.log(error)
    })
  }

  getpopularpospaidplans(){
    console.log("Popular pospaidplans")
    this.userService.getallpospaidplan().subscribe((response:any)=>{
      console.log(response)
      this.pospaidplans = response.data;
    },(error)=>{
     console.log(error)
    })
  }
}
