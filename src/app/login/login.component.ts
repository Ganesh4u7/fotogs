import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup, NgForm} from "@angular/forms";

import {Router} from '@angular/router';
import { LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  isLoggedin = false;
  loginStatus = true;


  loginForm: FormGroup;

  constructor( private  router: Router,
               private  service: LoginService
  ){}

  ngOnInit() {

    this.loginForm = new FormGroup({
      username: new FormControl(null),
      pwd: new FormControl(null)
    });
  }

  onLogin(){
    let name = this.loginForm.value.username;
    let pwd = this.loginForm.value.pwd;
    let cname= 'vishnu';
    let cpwd = 'vishnu96';
    if( name == cname && pwd == cpwd){
      this.isLoggedin = true ;
      this.loginStatus = true;
      this.service.setLoggedin(true);
      console.log('true');
          this.router.navigate(['header']);
    }
    else {
      this.loginStatus = false;
    }

  }

}
