import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { User } from './models/user';
import { Misc } from './models/misc';
import { Sellinfo } from './models/sellinfo';


@Injectable({
  providedIn: 'root'
})
export class BackApiServiceService {

  apiRoot : string = 'https://apiback.azurewebsites.net/';
  apiRoot1 : string = 'https://apiback.azurewebsites.net/user-inventory/userId?userId=5';
  apiRoot2 : string = 'https://apiback.azurewebsites.net/login';
  username : string = "";
  constructor(private http: HttpClient) {   }

  
  getAllUserItems(id : number) {
    let newUrl=this.apiRoot+`/user-inventory/userid?userid=${id}`;
    return this.http.get(newUrl);
  }


  getLogin(user : User) : Observable<boolean>{
    return this.http.post(this.apiRoot+"/login", user) as Observable<boolean>}


  getUserByID(id : number) {
    let newUrl=this.apiRoot+`/user?userid=${id}`;
    return this.http.get(newUrl);
  }

  getUserByUsername(username : string) {
    let newUrl=this.apiRoot+`/user1?username=${username}`;
    return this.http.get(newUrl);
  }

  getMarketplaceItems(){
    return this.http.get(this.apiRoot+"/marketplace");
  }

  getMarketplaceItemsByName(searchitem : string){
    let newUrl=this.apiRoot+`/marketplaceByName?searchitem=${searchitem}`;
    return this.http.get(newUrl);
  }

  GetSellerAndItemIdByListingId(listing_id : number){
    let newUrl=this.apiRoot+`/sellerIDitemID?listing_id=${listing_id}`;
    return this.http.get(newUrl);
  }

  BuyItem(misc : Misc) : Observable<any>{
    let sum = parseInt(sessionStorage.getItem('totalprice')!)
    let  wallet  =  parseInt(sessionStorage.getItem('wallet')!)
    sessionStorage.setItem('wallet', (wallet - sum).toString())

    // sessionStorage.setItem('wallet',  )
    return this.http.post("https://apiback.azurewebsites.net/store/buy",misc) as Observable<any>;
  }

  SellItem(sellinfo : Sellinfo) : Observable<any>{
    // let sum = parseInt(sessionStorage.getItem('totalprice')!)
    // let  wallet  =  parseInt(sessionStorage.getItem('wallet')!)
    // sessionStorage.setItem('wallet', (wallet).toString())

    // sessionStorage.setItem('wallet', wallet )
    return this.http.post("https://apiback.azurewebsites.net/store/sell",sellinfo) as Observable<any>;
}
  BuyRand(by_id : number) {
    console.log('in buyrandom service')
    
    let  wallet  =  parseInt(sessionStorage.getItem('wallet')!)
    sessionStorage.setItem('wallet', (wallet - 200).toString())

    // sessionStorage.setItem('wallet',  )
    return this.http.post("https://apiback.azurewebsites.net/grabbag", by_id, {responseType: "text"}) as Observable<string>

  }

  getLoggedin()
  { 
  
    if ("true" === sessionStorage.getItem('loggedin') )
    return true;
    else return false;
  }
}