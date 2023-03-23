import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { User2 } from './models2/users2';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  root1  : string = 'https://apiback.azurewebsites.net/users/createAccount'

  constructor(private http : HttpClient) { }


  createUser(user : User2) : Observable<boolean>{
    return this.http.post(this.root1, user) as Observable<boolean>;
  }
}
