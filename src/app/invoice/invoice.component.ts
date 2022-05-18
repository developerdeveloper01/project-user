import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  //content: ElementRef = "<h1>Hello!!</h1>"
  // Data = [
  //   { Id: 101, Name: 'Nitin', Salary: 1234 },
  //   { Id: 102, Name: 'Sonu', Salary: 1234 },
  //   { Id: 103, Name: 'Mohit', Salary: 1234 },
  //   { Id: 104, Name: 'Rahul', Salary: 1234 },
  //   { Id: 105, Name: 'Kunal', Salary: 1234 }
  // ];
  // @ViewChild('content') content!: ElementRef;
  id: any;
  invoice: any = {
    caller_id_name: '',
    destination_number: '',
    uuid: '',
  };
  constructor(route: ActivatedRoute, public userService: UserService ) {
    this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.viewoneinvoice();
  }
  // public SavePDF():void{
  //   const margins = {
  //     top: 10,
  //     bottom: 10,
  //     left: 10,
  //     width:1000
  //   };
  //   let content=this.content.nativeElement;
  //   console.log(content)
  //   let doc = new jsPDF('p', 'pt', 'letter');
  //   doc.html(content.innerHTML,margins);
  //   setTimeout(function(){
  //     doc.save('test.pdf');
  //     },2000);
  // }
  viewoneinvoice(){
    this.userService.viewoneinvoice(this.id).subscribe((response:any)=>{
      console.log("button clicked")
      console.log(response)
      this.invoice = response.data;
    },(error)=>{
     console.log(error)
    })
  }


}
