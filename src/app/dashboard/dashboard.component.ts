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
  lastFourDid:any;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
   

    this.userService.getmyprofile().subscribe((response:any)=>{
      //  console.log(response)
        this.userDetails = response.data;
  
        var did_no = response.data.alloted_did.did_no;
        var lastFourDid = did_no.substr(did_no.length - 4); 
         console.log(lastFourDid)

          this.allcallcount(lastFourDid);
          this.alloutgoingcount(lastFourDid);
          this.allincomingcount(lastFourDid);
          this.allmissedcount(lastFourDid);  

      },(error)=>{
       console.log(error)
      })
    
    // this.getmydata();
  }

  getmydata(){
    this.userService.getmyprofile().subscribe((response:any)=>{
    //  console.log(response)
      this.userDetails = response.data;

      var did_no = response.data.alloted_did.did_no;
      this.lastFourDid = did_no.substr(did_no.length - 4); 
      // console.log(lastFourDid)

    },(error)=>{
     console.log(error)
    })
  }

  allcallcount(lastFourDid:any){
    this.userService.getallcallcount(lastFourDid).subscribe((response:any)=>{
      console.log(response)
      this.totalcalls = response.data;
    },(error)=>{
     console.log(error)
    })
  }

  alloutgoingcount(lastFourDid:any){
    this.userService.getoutgoingcallcount(lastFourDid).subscribe((response:any)=>{
     // console.log(response)
      this.outgoingcalls = response.data;
    },(error)=>{
     console.log(error)
    })
  }

  allincomingcount(lastFourDid:any){
    this.userService.getincomingcallcount(lastFourDid).subscribe((response:any)=>{
    //  console.log(response)
      this.incomingcalls = response.data;
    },(error)=>{
     console.log(error)
    })
  }

  allmissedcount(lastFourDid:any){
    this.userService.getmissedcallcount(lastFourDid).subscribe((response:any)=>{
    //  console.log(response)
      this.missedcalls = response.data;
    },(error)=>{
     console.log(error)
    })
  }


}
