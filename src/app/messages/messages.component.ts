import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  userDetails:any;
  messages:any;
  sendmsg: FormGroup;
  defaultimage = "../assets/img/bruce-mars.jpg"

  constructor(public userService: UserService,private fb: FormBuilder) {
    this.sendmsg = this.fb.group({
      userid: [''],
      msg: ['', [Validators.required]],
      msgbysupport: [true],
    });
  }

  ngOnInit(): void {
    this.getmydata();
  }

  getmydata(){
    this.userService.getmyprofile().subscribe((response:any)=>{
      console.log(response)
      this.userDetails = response.data;
      this.getmessages(this.userDetails._id)
    },(error)=>{
     console.log(error)
    })
  }

  getmessages(id:any){
    this.userService.getchatwithuser(id).subscribe((response:any)=>{
      console.log(response)
      this.messages = response.data
      this.sendmsg.setValue({
        userid: id,
      msg: '',
      msgbysupport: false,
      })
    },(error)=>{
     console.log(error)
    })
  }

  submitchat(){
    console.log(this.sendmsg.value)
    if(this.sendmsg.valid){
      this.userService.sendchat(this.sendmsg.value).subscribe((response:any)=>{
        console.log(response)
        this.getmessages(this.sendmsg.value.userid)
        this.sendmsg.reset()
        this.sendmsg.markAsUntouched()
      },(error)=>{
       console.log(error)
      })
    }
  }

}
