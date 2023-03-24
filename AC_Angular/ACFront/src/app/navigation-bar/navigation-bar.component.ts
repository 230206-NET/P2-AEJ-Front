import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { BackApiServiceService } from '../back-api-service.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router,RouterLink, Navigation } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['../../../node_modules/@picocss/pico/css/pico.classless.css']
})

@Injectable({
  providedIn: 'root'
})
export class NavigationBarComponent {
constructor(public service : BackApiServiceService, private router : Router){}

login : boolean = true;

clicked() {
  this.router.navigate([`/user-profile/${sessionStorage.getItem('username')}`]);
}
}




