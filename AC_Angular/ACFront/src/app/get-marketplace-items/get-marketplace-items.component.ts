import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { BackApiServiceService } from '../back-api-service.service';
import { UserItemsService } from '../user-items.service';

@Component({
  selector: 'app-get-marketplace-items',
  templateUrl: './get-marketplace-items.component.html',
  styleUrls: ['../../../node_modules/@picocss/pico/css/pico.classless.css']
})
export class GetMarketplaceItemsComponent implements OnInit {

  constructor(private service: UserItemsService,private api: BackApiServiceService, private router : Router) {}
  items : any [] = [];
  // userItems: any[] = [];
  userId = sessionStorage.getItem("id")!;
  userIdInt : number = +this.userId;
  
  ngOnInit(): void {
    this.api.getMarketplaceItems().subscribe(data => {
      this.items=data as any;
  });
}  

  SearchClicked(e: Event) {
    if ((document.getElementById("itemsearch") as HTMLInputElement).value != null)
      this.api.getMarketplaceItemsByName((document.getElementById("itemsearch") as HTMLInputElement).value).subscribe(data => {
        this.items=data as any;
      });
  }

  BuyItem(e: Event) {
   
      var clickedElement = <HTMLElement>e.target;
      var clickedRow = clickedElement.parentElement?.parentElement?.innerText;
      sessionStorage.setItem('buyID', clickedRow?.split("\t")[0]!);
      sessionStorage.setItem('buyName', clickedRow?.split("\t")[1]!);
      sessionStorage.setItem('buyAvailable', clickedRow?.split("\t")[2]!);
      sessionStorage.setItem('buyPrice', clickedRow?.split("\t")[3]!);
      sessionStorage.setItem('buyPhoto', clickedElement.parentElement?.parentElement?.querySelector("img")?.getAttribute('src')!);

      this.api.getAllUserItems(this.userIdInt).subscribe(data => {
        this.items=data as any;
      });
      this.service.changeSubject(this.items);
      this.router.navigate([`/marketplace/buy`]);
  }

  
}
