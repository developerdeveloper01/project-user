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
  Days:any;
  datetoday:any;
  defaultimage = "../assets/img/bruce-mars.jpg"
  constructor(public routes: Router,public userService: UserService) { }

  ngOnInit(): void {
    this.getmydata();
    this.datetoday = new Date().toISOString().split('T')[0]
  }

  logout(){
    localStorage.removeItem('auth-token')
    this.routes.navigate(['/login']);
  }

  getmydata(){
    this.userService.getmyprofile().subscribe((response:any)=>{
      console.log(response)
      this.userDetails = response.data;
      console.log(response.data.memship_expiry)
      console.log(this.datetoday)
      console.log(response.data.memship_expiry - this.datetoday)

      var date2 = new Date(response.data.memship_expiry);
	var date1 = new Date(this.datetoday);

    var Time = date2.getTime() - date1.getTime();
    var Days = Time / (1000 * 3600 * 24);
    this.Days = Days
    console.log(Days)
    },(error)=>{
     console.log(error)
    })
  }
}
