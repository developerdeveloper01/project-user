import { UserService } from 'src/app/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allinvoice',
  templateUrl: './allinvoice.component.html',
  styleUrls: ['./allinvoice.component.css']
})
export class AllinvoiceComponent implements OnInit {
  allinvoice:any
  constructor( public userService: UserService) { }

  ngOnInit(): void {
    this.getallinvoices();
  }

  getallinvoices(){
    this.userService.getallinvoices().subscribe((response:any)=>{
      console.log("allinvoice file")
      console.log(response)
      this.allinvoice = response.data;
    },(error)=>{
     console.log(error)
    })
  }
}
