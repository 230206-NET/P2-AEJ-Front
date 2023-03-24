import { Component, OnChanges } from '@angular/core';
import { Item } from '../models/item';
import { Misc } from '../models/misc';
import { BackApiServiceService } from '../back-api-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent {
  constructor(private api: BackApiServiceService, private router : Router) {}

  buyID : number = parseInt(sessionStorage.getItem('buyID')!);
  buyName : string = sessionStorage.getItem('buyName')!;
  buyAvailable : number = parseInt(sessionStorage.getItem('buyAvailable')!);
  buyPrice : number = parseInt(sessionStorage.getItem('buyPrice')!);
  buyPhoto : string = sessionStorage.getItem('buyPhoto')!;
  wallet : number = parseInt(sessionStorage.getItem("wallet")!);
  buyer_id : number = parseInt(sessionStorage.getItem("id")!);
  
  input : number = 0;
  totalSum : number = 0;

  Calculate(e : Event) {
    if ((document.getElementById("selectquantity") as HTMLInputElement).value!=null) {
      this.input = parseInt((document.getElementById("selectquantity") as HTMLInputElement).value);
      this.totalSum=this.buyPrice*(this.input);
      sessionStorage.setItem('totalprice', this.totalSum.toString());

    }

  }

  Validate() {
    var s=document.getElementById("selectquantity")! as HTMLInputElement;
    if (this.input<0)
      s.value="";
    if (this.input>this.buyAvailable)
      s.value="";  
  }

  item : Item = {
    id : 0,
    quantity : 0,
    buyer_id : 0,
    price : 0,
    item_id : 0,
    seller_id : 0
  } 
  misc : Misc = {
    listingId : 0,
    quantity : 0,
    buyerId : 0
  }
  PutOrder(e : Event) {
  
  this.misc.listingId=this.buyID;
  this.misc.quantity=this.input;
  this.misc.buyerId=this.buyer_id;
  this.api.BuyItem(this.misc).subscribe((data : any) => {
  });
  this.router.navigate([`/user-profile/${this.misc.buyerId}`]);
    
  }
}
