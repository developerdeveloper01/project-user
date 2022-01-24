import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  p: number = 1;
  q: number = 1;
  r: number = 1;
  allcalllogs:any
  allcalls:any
  allcallspaginator:any
  allreceived:any
  allincoming:any
  allmissed:any
  totalbill:any


  //paginator
  responsive:boolean=true
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.mycalllogs()
    this.getallcallsdetails();
    this.receivedcalllogs()
    this.missedcalllogs()
  }

  getallcallsdetails(){
    this.userService.getallcalldetails("2581").subscribe((response:any)=>{
      console.log(response)
      this.allcalls = response.data
      this.allcallspaginator = this.allcalls?.length
      let pages = Math.ceil(this.allcallspaginator/10)
    },(error)=>{
     console.log(error)
    })
  }

  mycalllogs(){
    this.userService.getcalllogs("2581").subscribe((response:any)=>{
      console.log(response)
      this.allcalllogs = response.data
      let total = 0;
      response.data.forEach((element: { billsec: string; }) => {
        total = total +parseInt(element.billsec);
      });
      this.totalbill = total;
      console.log(total)
    },(error)=>{
     console.log(error)
    })
  }

  receivedcalllogs(){
    this.userService.getreceivedcalls("2581").subscribe((response:any)=>{
      console.log(response)
      this.allreceived = response.data
    },(error)=>{
     console.log(error)
    })
  }

  pageChange(e:any){
    console.log(e)
  }


  missedcalllogs(){
    this.userService.getmissedcalldetails("2581").subscribe((response:any)=>{
      console.log(response)
      this.allmissed = response.data
    },(error)=>{
     console.log(error)
    })
  }

}
