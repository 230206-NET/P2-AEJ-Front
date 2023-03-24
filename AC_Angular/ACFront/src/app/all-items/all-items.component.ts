import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray} from '@angular/forms';
import { observeNotification } from 'rxjs/internal/Notification';
import { ACAPIServiceService} from '../acapiservice.service';
import { BackApiServiceService } from '../back-api-service.service';
import {itemforallitems} from '../models/item'
@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnChanges{
  constructor(private api: ACAPIServiceService, private Oapi : BackApiServiceService) {  }
  items : any [] = [];
  items1 : itemforallitems[] = [];
  i : itemforallitems  = {
    iurl : "",
    iname : ""
  }
   show : boolean = false;
   randitem : string = "";

   ngOnChanges(){
  
    if(this.randitem !="")
    this.show=true;

   }



  buyrandom(){
    let num = parseInt(sessionStorage.getItem('id')!)
    
    this.Oapi.BuyRand(num).subscribe((data : any) => {
      if(data === "error")
      alert(data);
      else {this.show = true; this.randitem = data;}

    });}

  AllItemForm : FormGroup = new FormGroup({
    itemname : new FormControl(''),
  })
  clicked : boolean = false;
  Name : any;
  Url : string = "";
  

  processForm(e: Event) {
    this.clicked=true;
      this.api.AllItems().subscribe(data => {
        this.items=data as any;
        this.items.forEach(element  => { 
        this.i.iurl = element[0]['image_uri']
        this.i.iname = element[0]['name']['name-USen']
        this.items1.push(
          {
            iurl : element[0]['image_uri'],
            iname : element[0]['name']['name-USen']
          }
        )
        this.clicked=true;
        });
      });
     this.items1;

  }
}
