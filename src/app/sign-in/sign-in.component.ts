import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

const url = '../../assets/js/main.js';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  //img url - https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80
  //second cdn office-dark.jpg
  //https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80
  fieldTextType: Boolean = false;
  signin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    public userService: UserService,
    public routes: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  submitlogin() {
    if (this.signin.valid) {
      this.userService.login(this.signin.value).subscribe(
        (response: any) => {
          console.log(response);
          localStorage.setItem('auth-token', response.token);
          this.routes.navigate(['/dashboard']);
        },
        (error) => {
          console.log(error);
          this.toastr.error(error?.error?.msg || 'Some Error Occured');
        }
      );
    } else {
      console.log('Invalid Form');
      this.toastr.error('Please enter Valid credentials', 'Error');
    }
  }

  userlogin() {
    console.log(this.signin.value);
  }

  passwordview() {
    //password type from password to text
    console.log('button clicked');
    //this.fieldTextType = true
    if (this.fieldTextType) {
      this.fieldTextType = false;
    } else {
      this.fieldTextType = true;
    }
  }
}
