import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-call-detail',
  templateUrl: './call-detail.component.html',
  styleUrls: ['./call-detail.component.css'],
})
export class CallDetailComponent implements OnInit {
  id: any;
  calldetail: any = {
    caller_id_name: '',
    destination_number: '',
    uuid: '',
  };
  msaapPlaylist:any = []

  msaapDisplayTitle = false;
  msaapDisplayPlayList = true;
  //msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = false;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = false;

  minutes: any;
  constructor(route: ActivatedRoute, public userService: UserService) {
    this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.viewcompletecalldetails();
  }

  viewcompletecalldetails() {
    this.userService.viewonecalldetails(this.id).subscribe(
      (response: any) => {
        console.log(response);
        this.calldetail = response.data;
        this.minutes = Math.floor(response.data.billsec / 60);
        this.msaapPlaylist = [
          {
            title: 'Audio Two Title',
            link: `http://103.8.43.14/onyxcxm/assets/recordings/${this.calldetail.created_time.split(" ")[0]}/${this.calldetail.caller_id_name}_0${this.calldetail?.destination_number}_${this.calldetail?.uuid}.wav`,
            artist: 'Audio Two Artist',
            duration: 45,
          },
        ];
      },
      (error) => {
        console.log(error);
      }
    );
  }


  onEnded(e: any) {
    console.log(e);
  }
}
