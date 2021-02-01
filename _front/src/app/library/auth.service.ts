import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { HostService } from './host.service';
import { RegFormValues } from './reg-form-values';
import { Observable, Subject } from 'rxjs';
import { UserLoginForm } from './user-login-form';
import { AnswerAuth } from './answer-auth';
import { BudgetItemsService } from '../budget-items.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {  

   private userName: string;
   subject = new Subject<string>();

  constructor(private http: HttpClient, private hostService: HostService, private budgetItemsService: BudgetItemsService) { }

  registerUser(regFormValues:RegFormValues) {
    if (!regFormValues.privacyPolicy) return new Observable(subscriber=> {
      subscriber.next(JSON.stringify({success: false, msg:"Нет согласия с Политикой Конфидециальности"}));
    }); 
    else {
      let headers = new HttpHeaders();
      headers.append("contentType", "application/json");
      return this.http
        .post(this.hostService.getHost() + "account/reg", regFormValues, { headers: headers})
    }
  }


  loginUser(user: UserLoginForm){
    let headers = new HttpHeaders();
    headers.append("contentType", "application/json");

    return new Observable(subscriber=>{

      this.http
      .post(this.hostService.getHost() + "account/login", user, { headers: headers}).subscribe(
        (data: AnswerAuth) =>{
          if(data.success) {
            this.userName =  data.userName; 
            localStorage.setItem("userName", data.userName);
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            this.subject.next(this.userName);
          }
          subscriber.next(data);
        }
       ); 
    })
  } 

  logOut(){
    let headers = new HttpHeaders();
    headers.append("contentType", "application/json");
    let logout = {accessToken: localStorage.getItem("accessToken")}
    return new Observable(subscriber=>{

      this.http
      .post(this.hostService.getHost()+"account/logout", logout ,{ headers: headers}).subscribe(
        (data: AnswerAuth)=> {
          if(data.success){
            this.userName= null;
            localStorage.clear();
            this.subject.next(this.userName);
            this.budgetItemsService.clearBudgetItems();
          }else console.log(data.msg);
          subscriber.next(data);
        }
        
      )

    })

  }

  getUserName(){
    this.userName =  localStorage.getItem("userName");
    this.subject.next(this.userName);
  }

/*   isAuthenticated(){

  } */


}
