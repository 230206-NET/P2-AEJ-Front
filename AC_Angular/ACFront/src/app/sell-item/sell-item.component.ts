import { Component } from '@angular/core';
import { Item } from '../models/item';
import { Sellinfo } from '../models/sellinfo';
import { BackApiServiceService } from '../back-api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-item',
  templateUrl: './sell-item.component.html',
  styleUrls: ['./sell-item.component.css']
})
export class SellItemComponent {
  constructor(private api: BackApiServiceService, private router : Router) {}

  sellID : number = parseInt(sessionStorage.getItem('sellID')!);
  sellName : string = sessionStorage.getItem('sellName')!;
  sellAvailable : number = parseInt(sessionStorage.getItem('sellAvailable')!);
  sellPhoto : string = sessionStorage.getItem('sellPhoto')!;
  seller_id : number = parseInt(sessionStorage.getItem('id')!);
  
  inputQuantity : number = 0;
  inputPrice : number = 0;
  totalSum : number = 0;
 

  ValidateQuantity() {
    this.inputQuantity = parseInt((document.getElementById("selectquantity") as HTMLInputElement).value);
    var s=document.getElementById("selectquantity")! as HTMLInputElement;
    if (this.inputQuantity<1)
      s.value="1";
    if (this.inputQuantity>this.sellAvailable)
      s.value="1";  
  }

  ValidatePrice() {
    this.inputPrice = parseInt((document.getElementById("selectprice") as HTMLInputElement).value);
    var s=document.getElementById("selectprice")! as HTMLInputElement;
    if (this.inputPrice<0)
      s.value=""; 
  }
 
  sellinfo : Sellinfo = {
    itemId : 0,
    quantity : 0,
    sellerId : 0,
    price : 0
  }

  ListItem(e : Event) {
    sessionStorage.setItem("sellPrice", this.inputPrice.toString());
    this.sellinfo.itemId=this.sellID;
    this.sellinfo.quantity=this.inputQuantity;
    this.sellinfo.sellerId=this.seller_id;
    this.sellinfo.price=this.inputPrice;
    this.api.SellItem(this.sellinfo).subscribe((data : any) => {
    });
    this.router.navigate([`/user-profile/${this.sellinfo.sellerId}`]);
    
  }
}

