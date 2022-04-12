import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  allcalllogs:any
  allcalls:any
  allcallspaginator:any
  allreceived:any
  allincoming:any
  allmissed:any
  totalbill:any
  userDetails:any
  unreadmsgs:any
  constructor(public routes: Router,public userService: UserService) {
    this.userService.getmyprofile().subscribe((response:any)=>{
      this.userDetails = response.data;
      localStorage.setItem('auth-data', response.data._id);
      this.getmessages(this.userDetails._id)
    },(error)=>{
     console.log(error)
    })
  }

  ngOnInit(): void {

    this.userService.getmyprofile().subscribe((response:any)=>{
      //  console.log(response)
        this.userDetails = response.data;
  
        var did_no = response.data.alloted_did.did_no;
        var lastFourDid = did_no.substr(did_no.length - 4); 
         console.log(lastFourDid)


          this.mycalllogs(lastFourDid)
          this.getallcallsdetails(lastFourDid);
          this.receivedcalllogs(lastFourDid)
          this.missedcalllogs(lastFourDid)

      },(error)=>{
        console.log(error)
    })

  }


  logout(){
    localStorage.removeItem('auth-token')
    this.routes.navigate(['/login']);
  }

  getallcallsdetails(lastFourDid:any){
    this.userService.getallcalldetails(lastFourDid).subscribe((response:any)=>{
      console.log(response)
      this.allcalls = response.data
      this.allcallspaginator = this.allcalls?.length
      let pages = Math.ceil(this.allcallspaginator/10)
    },(error)=>{
     console.log(error)
    })
  }

  mycalllogs(lastFourDid:any){
    this.userService.getcalllogs(lastFourDid).subscribe((response:any)=>{
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

  receivedcalllogs(lastFourDid:any){
    this.userService.getreceivedcalls(lastFourDid).subscribe((response:any)=>{
      console.log(response)
      this.allreceived = response.data
    },(error)=>{
     console.log(error)
    })
  }

  pageChange(e:any){
    console.log(e)
  }


  missedcalllogs(lastFourDid:any){
    this.userService.getmissedcalldetails(lastFourDid).subscribe((response:any)=>{
      console.log(response)
      this.allmissed = response.data
    },(error)=>{
     console.log(error)
    })
  }

  getmessages(id:any){
    this.userService.unreadmessages(id).subscribe((response:any)=>{
      console.log(response.data)
      this.unreadmsgs = response.data.new_unread_msg
      console.log(this.unreadmsgs)
    },(error)=>{
     console.log(error)
    })
  }





}
