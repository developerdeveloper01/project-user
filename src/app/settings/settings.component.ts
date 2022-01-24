import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';


const url = '../../assets/js/main.js';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  userDetails:any;
  Plans:any;
  defaultimage = "../assets/img/bruce-mars.jpg"
  defaultuserimg = "../../assets/img/team-4.jpg"

  settingform = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    organization_name: new FormControl(''),
  });

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
    this.getmydata();
    this.getpopularplans();
  }

  getmydata(){
    this.userService.getmyprofile().subscribe((response:any)=>{
      console.log(response)
      this.userDetails = response.data;

      this.settingform.setValue({
        firstname:this.userDetails?.firstname?this.userDetails?.firstname:"",
        lastname:this.userDetails?.lastname?this.userDetails?.lastname:"",
        email:this.userDetails?.email?this.userDetails?.email:"",
        mobile:this.userDetails?.mobile?this.userDetails?.mobile:"",
        organization_name:this.userDetails?.organization_name?this.userDetails?.organization_name:"",
      })

    },(error)=>{
     console.log(error)
    })
  }

  savesetting(){
    console.log(this.settingform.value)
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
