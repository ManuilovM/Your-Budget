import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { User } from './user';
import { HostService } from './host.service';
import { RegFormValues } from './reg-form-values';
import { Observable, Subject } from 'rxjs';
import { UserLoginForm } from './user-login-form';
import { AnswerAuth } from './answer-auth';
//import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {  

   private userName: string;
   subject = new Subject<string>();

  constructor(private http: HttpClient, private hostService: HostService) { }

  registerUser(regFormValues:RegFormValues) {
    if (!regFormValues.privacyPolicy) return new Observable(subscriber=> {
      subscriber.next(JSON.stringify({success: false, msg:"Нет согласия с Политикой Конфидециальности"}));
    }); 
    else {
      let headers = new HttpHeaders();
      headers.append("contentType", "application/json");
      return this.http
        .post(this.hostService.getHost() + "account/reg", regFormValues, { headers: headers })
    }
  }


  loginUser(user: UserLoginForm){
    let headers = new HttpHeaders();
    headers.append("contentType", "application/json");

    return new Observable(subscriber=>{

      this.http
      .post(this.hostService.getHost() + "account/login", user, { headers: headers }).subscribe(
        (data: AnswerAuth) =>{
          if(data.success) {
            console.log('callback works')
            this.userName =  data.userName;
            localStorage.setItem("userName", data.userName);
            this.subject.next(this.userName);
          }
          subscriber.next(data);
        }
       ); 
    })


 


  } 
  getUserName(){
    this.userName =  localStorage.getItem("userName");
    this.subject.next(this.userName);
  }



}
