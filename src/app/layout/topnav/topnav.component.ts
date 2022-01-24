import { UserService } from './../../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  userDetails:any;
  defaultimage = "../assets/img/bruce-mars.jpg"
  constructor(public routes: Router,public userService: UserService) { }

  ngOnInit(): void {
    this.getmydata();
  }

  logout(){
    localStorage.removeItem('auth-token')
    this.routes.navigate(['/login']);
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
