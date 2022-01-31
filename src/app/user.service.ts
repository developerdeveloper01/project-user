import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  backendurltest = 'https://demo.rishtaguru.com/api';
  backendurl = 'http://localhost:6789/api';
  getvalue: string = ""
  constructor(public http: HttpClient) {
    console.log("constructor hit");
  }

  login(data: any) {
    return this.http.post(`${this.backendurl}/user/login`, data);
  }

  getmyprofile() {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': "Bearer " + localStorage.getItem('auth-token'),
    })
    return this.http.get(`${this.backendurl}/user/myprofile`, {
      headers: header,
    });
  }

  getcalllogs(id: any) {
    return this.http.get(`${this.backendurl}/admin/getdetailofonenumber/${id}`);
  }

  getoutgoingcallcount(id: any) {
    return this.http.get(`${this.backendurl}/admin/outgoingcallcount/${id}`);
  }

  getincomingcallcount(id: any) {
    return this.http.get(`${this.backendurl}/admin/incomingcallcount/${id}`);
  }

  getallcallcount(id: any) {
    return this.http.get(`${this.backendurl}/admin/totalcallcount/${id}`);
  }

  getmissedcallcount(id: any) {
    return this.http.get(`${this.backendurl}/admin/missedcallcount/${id}`);
  }

  getreceivedcalls(id: any) {
    return this.http.get(`${this.backendurl}/admin/getreceivedcalls/${id}`);
  }

  getallplans() {
    return this.http.get(`${this.backendurl}/admin/allplan`)
  }

  getincomingcalldetails(id: any) {
    return this.http.get(`${this.backendurl}/admin/getdetailincoming/${id}`)
  }

  getmissedcalldetails(id: any) {
    return this.http.get(`${this.backendurl}/admin/missedcalls/${id}`)
  }

  getallcalldetails(id: any) {
    return this.http.get(`${this.backendurl}/admin/totalcalldetails/${id}`)
  }

  viewonecalldetails(id: any) {
    return this.http.get(`${this.backendurl}/admin/viewonecdrreport/${id}`)
  }


  getchatwithuser(id: any) {
    return this.http.get(`${this.backendurl}/admin/allchatwithuser/${id}`);
  }

  sendchat(data: any) {
    return this.http.post(`${this.backendurl}/admin/addchat`, data);
  }

  markasread(id: any) {
    return this.http.get(`${this.backendurl}/admin/markasread/${id}`);
  }

  unreadmessages(id: any) {
    return this.http.get(`${this.backendurl}/admin/unreadmessages/${id}`);
  }

  getmybilling(id:any) {
    return this.http.get(`${this.backendurl}/user/allmybilling/${id}`);
  }

}
