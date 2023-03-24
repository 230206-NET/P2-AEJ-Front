import { Component } from '@angular/core';
import { BackApiServiceService } from '../back-api-service.service';
import { Router } from '@angular/router';
import { UserItemsService } from '../user-items.service';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['../../../node_modules/@picocss/pico/css/pico.classless.css']
})
export class UserProfileComponent {

  constructor(private nav:NavigationBarComponent,private service : UserItemsService, private api : BackApiServiceService, private router : Router) {
  }
  username : string  = sessionStorage.getItem("username")!;
  fname : string = sessionStorage.getItem("fname")!;
  lname : string  = sessionStorage.getItem("lname")!;
  id : string = sessionStorage.getItem("id")!;
  wallet : string = sessionStorage.getItem("wallet")!;


  items: any[] = [];

  userId = sessionStorage.getItem("id")!;
  userIdInt : number = +this.userId;
  clicked : boolean = false;

  ngOnInit(): void {
    this.api.getAllUserItems(this.userIdInt).subscribe(data => {
      this.items=data as any;
  });
}

  LogOut() {

    sessionStorage.clear();
    this.router.navigate([``]);
    // this.api.getLoggedin(false);
    // this.nav.call();
    this.api.deauthenticate();
  }

  SellItem(e: Event) {
 
    var clickedElement = <HTMLElement>e.target;
    var clickedRow = clickedElement.parentElement?.parentElement?.innerText;
    sessionStorage.setItem('sellID', clickedRow?.split("\t")[0]!);
    sessionStorage.setItem('sellName', clickedRow?.split("\t")[1]!);
    sessionStorage.setItem('sellAvailable', clickedRow?.split("\t")[2]!);
    sessionStorage.setItem('sellPhoto', clickedElement.parentElement?.parentElement?.querySelector("img")?.getAttribute('src')!);
    this.api.getAllUserItems(this.userIdInt).subscribe(data => {
      this.items=data as any;
  });
  this.service.changeSubject(this.items);
    this.router.navigate([`/marketplace/sell`]);
}

}
