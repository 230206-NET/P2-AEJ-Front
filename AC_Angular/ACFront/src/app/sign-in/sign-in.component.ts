import { Component } from '@angular/core';
import { User } from '../models/user';
import {HttpClient} from '@angular/common/http'
import { getLocaleDayNames, NgIf } from '@angular/common';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { BackApiServiceService } from '../back-api-service.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../../../node_modules/@picocss/pico/css/pico.classless.css']
})

@Injectable({
  providedIn:'root'
})

export class SignInComponent {

  
constructor(private nav:NavigationBarComponent,_http: HttpClient, private service : BackApiServiceService, private router : Router){}
newuser : User = 
{
  username :  "",
  password : "",
  fname : "",
  lname : "",
  wallet : 0
}


signinform = new FormGroup({
  username: new FormControl(''),
  password: new FormControl(''),
});

validate()
{
  const username = (document.getElementById("loginID")) as HTMLInputElement;
  const password = (document.getElementById("passwordID")) as HTMLInputElement;
  this.login(username.value, password.value)

}


login(u : string, p : string){

  this.newuser.username = u;
  this.newuser.password = p;

  this.service.getUserByUsername(this.newuser.username).subscribe(data => {
    this.newuser.id=Object.values(data)[0];
    this.newuser.fname=Object.values(data)[1];
    this.newuser.lname=Object.values(data)[2];
    this.newuser.wallet=Object.values(data)[5];
  });
  
  

  this.service.getLogin(this.newuser).subscribe(data => {
    if (data === false){
      alert("invalid username/password combination!");
    }
    if (data === true ){
      
      sessionStorage.clear(); 
      sessionStorage.setItem("username", this.newuser.username);
      sessionStorage.setItem("fname", this.newuser.fname);
      sessionStorage.setItem("lname", this.newuser.lname);
      sessionStorage.setItem("wallet", String(this.newuser.wallet));
      sessionStorage.setItem("id", String(this.newuser.id));
      sessionStorage.setItem("loggedin", 'true')
      this.router.navigate([`/user-profile/${this.newuser.username}`]);
      alert('success!');
      this.service.authenticate();
    }
  });
}
}
