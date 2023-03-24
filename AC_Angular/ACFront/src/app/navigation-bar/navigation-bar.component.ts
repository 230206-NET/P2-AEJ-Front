import { Component, OnChanges } from '@angular/core';
import { BackApiServiceService } from '../back-api-service.service';
import { Observable } from 'rxjs';
import { Router,RouterLink, Navigation } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['../../../node_modules/@picocss/pico/css/pico.classless.css']
})
export class NavigationBarComponent{
constructor(private service : BackApiServiceService, private router : Router){}


clicked(){

  this.router.navigate([`/user-profile/${sessionStorage.getItem('username')}`]);

}

}
