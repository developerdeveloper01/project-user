import { UserService } from 'src/app/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans:any[]=[]
  singleplans:any[]=[]
  pospaidplans:any[]=[]
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getpopularplans()
    this.getpopularpospaidplans()

    this.getsingleplan()

  }
  
  getsingleplan() {    
    // this.userService.getsingleplan('623efdab645f10a61e63151b').subscribe((response:any)=>{
    //   console.log("Single Pospaid plans")
    //   console.log(response)
    //   this.singleplans = response.data;
    // },(error)=>{
    //  console.log(error)
    // })
  }

  getpopularplans(){
    
    this.userService.getallplans().subscribe((response:any)=>{
      console.log("Popular plans rvd")
      console.log(response)
      this.plans = response.data;
    },(error)=>{
     console.log(error)
    })
  }

  getpopularpospaidplans(){
    
    this.userService.getallpospaidplan().subscribe((response:any)=>{
      console.log("Popular pospaidplans")
      console.log(response)
      this.pospaidplans = response.data;
    },(error)=>{
     console.log(error)
    })
  }
}
function plan_id(plan_id: any) {
  throw new Error('Function not implemented.');
}

