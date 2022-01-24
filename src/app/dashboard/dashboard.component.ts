import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

const url = '../../assets/js/main.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totalcalls:any;
  incomingcalls:any;
  outgoingcalls:any;
  missedcalls:any;
  userDetails:any;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
    this.allcallcount();
    this.alloutgoingcount();
    this.allincomingcount();
    this.allmissedcount();
    this.getmydata();
  }

  allcallcount(){
    this.userService.getallcallcount('2581').subscribe((response:any)=>{
      console.log(response)
      this.totalcalls = response.data;
    },(error)=>{
     console.log(error)
    })
  }

  alloutgoingcount(){
    this.userService.getoutgoingcallcount('2581').subscribe((response:any)=>{
      console.log(response)
      this.outgoingcalls = response.data;
    },(error)=>{
     console.log(error)
    })
  }

  allincomingcount(){
    this.userService.getincomingcallcount('2581').subscribe((response:any)=>{
      console.log(response)
      this.incomingcalls = response.data;
    },(error)=>{
     console.log(error)
    })
  }

  allmissedcount(){
    this.userService.getmissedcallcount('2581').subscribe((response:any)=>{
      console.log(response)
      this.missedcalls = response.data;
    },(error)=>{
     console.log(error)
    })
  }

  getmydata(){
    this.userService.getmyprofile().subscribe((response:any)=>{
      console.log(response)
      this.userDetails = response.data;
    },(error)=>{
     console.log(error)
    })
  }
}
