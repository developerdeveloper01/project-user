import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // backendurltest = 'https://demo.rishtaguru.com/api';
  // backendurlold = 'http://localhost:6789/api';
  backendurlolder = 'http://52.90.52.191/v1/api';
  backendurl = 'http://3.111.139.178/v1/api';
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

  editprofile(data: any) {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': "Bearer " + localStorage.getItem('auth-token'),
    })
    return this.http.post(`${this.backendurl}/user/setting`, data, {
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

  getallpospaidplan() {
    return this.http.get(`${this.backendurl}/admin/allpospaidplan`)
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

  getmybilling(id: any) {
    return this.http.get(`${this.backendurl}/user/allmybilling/${id}`);
  }

  inittransaction(data: any) {
    return this.http.post(`${this.backendurl}/admin/paynownew`, data);
  }

}
