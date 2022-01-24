import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-call-detail',
  templateUrl: './call-detail.component.html',
  styleUrls: ['./call-detail.component.css']
})
export class CallDetailComponent implements OnInit {
id:any
calldetail:any
minutes:any
  constructor(route: ActivatedRoute,public userService:UserService) {
    this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.viewcompletecalldetails();
  }

  viewcompletecalldetails(){
    this.userService.viewonecalldetails(this.id).subscribe((response:any)=>{
      console.log(response)
      this.calldetail = response.data
      this.minutes = Math.floor(response.data.billsec/60)
    },(error)=>{
     console.log(error)
    })
  }
}
