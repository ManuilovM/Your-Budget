import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { HostService } from '../services/host.service';
import { RegFormValues } from '../classes/reg-form-values';
import { UserLoginForm } from '../classes/user-login-form';
import { AnswerAuth } from '../classes/answer-auth';
import { Observable, Subject } from 'rxjs';
import { BudgetItem } from '../classes/budget-item';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userName: string;
  subject = new Subject<string>();

  constructor(private http: HttpClient, private hostService: HostService,) { }

  registerUser(regFormValues: RegFormValues) {
    if (!regFormValues.privacyPolicy) return new Observable(subscriber => {
      subscriber.next(JSON.stringify({ success: false, msg: "Нет согласия с Политикой Конфидециальности" }));
    });
    else {
      let headers = new HttpHeaders();
      headers.append("contentType", "application/json");
      return this.http
        .post(this.hostService.getHost() + "account/reg", regFormValues, { headers: headers })
    }
  }


  loginUser(user: UserLoginForm) {
    let headers = new HttpHeaders();
    headers.append("contentType", "application/json");

    return new Observable(subscriber => {

      this.http
        .post(this.hostService.getHost() + "account/login", user, { headers: headers }).subscribe(
          (data: AnswerAuth) => {
            if (data.success) {
              this.userName = data.userName;
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

  public logOut() {
    let headers = new HttpHeaders();
    headers.append("contentType", "application/json");
    let logout = { accessToken: localStorage.getItem("accessToken") }
    return new Observable(subscriber => {

      this.http
        .post(this.hostService.getHost() + "account/logout", logout, { headers: headers }).subscribe(
          (data: AnswerAuth) => {
            if (data.success) {
              this.userName = null;
              localStorage.clear();
              this.subject.next(this.userName);
            } else {

              localStorage.clear();
              this.getUserName();
            }
            subscriber.next(data);
          }

        )

    })

  }

  public getUserName() {
    this.userName = localStorage.getItem("userName");
    this.subject.next(this.userName);
  }

  refreshTokens() {
    let tokens = {
      accessToken: localStorage.getItem("accessToken"),
      refreshToken: localStorage.getItem("refreshToken")
    }
    let headers = new HttpHeaders();
    headers.append("contentType", "application/json");
    return new Observable(subscriber => {
      this.http
        .post(this.hostService.getHost() + "account/refreshTokens", tokens, { headers: headers }).subscribe(
          (data: AnswerAuth) => {
            if (data.success) {
              localStorage.setItem("userName", data.userName);
              localStorage.setItem("accessToken", data.accessToken);
              localStorage.setItem("refreshToken", data.refreshToken);
              this.getUserName();

              subscriber.next({ success: true, msg: "OK" });

            }
            else {
              this.logOut().subscribe((data: AnswerAuth) => {
                window.location.reload()
              })
            };
          },
          err => console.log(err)
        )



    })

  }

  forgetPass(email: String) {
    let body = {
      email: email
    }
    let headers = new HttpHeaders();
    headers.append("contentType", "application/json");

    return this.http.post(this.hostService.getHost() + "account/forgetPass", body, { headers: headers })

  }

  getForgetPass(accessToken: string) {
    let body = {
      accessToken: accessToken
    }
    let headers = new HttpHeaders();
    headers.append("contentType", "application/json");
    return new Observable(subscriber => {
      this.http.post(this.hostService.getHost() + "account/getForgetPass", body, { headers: headers }).subscribe(
        (data: AnswerAuth) => {
          if (data.success) {
            this.userName = data.userName;
            localStorage.setItem("userName", data.userName);
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            localStorage.setItem("tempPassToken", data.tempPassToken);
            this.getUserName();
            subscriber.next({ success: true, msg: data.msg, data: data });
          } else {
            if (data.msg == "jwt expired") {
              subscriber.next({ success: false, msg: "jwt expired" });
            }
          }
        }
      )
    })

  }

  changePass(body){
    let headers = new HttpHeaders();
    headers.append("contentType", "application/json");

    return this.http.post(this.hostService.getHost() + "account/changePass", body, { headers: headers })

  }

  deleteAkk(body){
    let headers = new HttpHeaders();
    headers.append("contentType", "application/json");
    return new Observable(subscriber=>{
      this.http.post(this.hostService.getHost() + "account/deleteAkk", body, { headers: headers }).subscribe(
        (data:AnswerAuth)=>{
          if(data.success){
            localStorage.clear();
            this.getUserName();
            subscriber.next(data);
          }
          else{
            subscriber.next(data);
          }
        }
      )
    })
  }


  /* -------------------------------------------------------------------------- */
  /*                        budgetItemsService ServerSide                       */
  /* -------------------------------------------------------------------------- */

  sendAddItem(bitem: BudgetItem) {
    let body = {
      accessToken: localStorage.getItem("accessToken"),
      bitem: bitem,
    }
    let headers = new HttpHeaders();
    headers.append("contentType", "application/json");
    return new Observable(subscriber => {
      this.http.post(this.hostService.getHost() + 'budgetItems/addItem', body, { headers: headers }).subscribe(
        (data: AnswerAuth) => {
          if (!data.success){
            if (data.msg == "jwt expired") {
              this.refreshTokens().subscribe(
                (data: AnswerAuth) => {
                  if (data.success) this.sendAddItem(bitem).subscribe(
                    err => {
                      console.log(err);
                    }
                  );
                }
              )
            } else {
              if (data.msg == "Нет токена") {
                subscriber.next({ success: true, msg: "Не выполнен вход" })
              } else { 
                this.logOut().subscribe(
                  (data: AnswerAuth) => subscriber.next({ success: false, msg: "logout" })
                )
              }
            }
          }

          
        },
        err => {
          console.log(err);
        }
      )

    })


  }

  sendDeleteItem(itemId) {
    let body = {
      accessToken: localStorage.getItem("accessToken"),
      itemId: itemId,
    }
    let headers = new HttpHeaders();
    headers.append("contentType", "application/json");

    return new Observable(subscriber => {
      this.http.post(this.hostService.getHost() + 'budgetItems/deleteItem', body, { headers: headers }).subscribe(
        (data: AnswerAuth) => {
          if (!data.success) {
            if (data.msg === "jwt expired") {
              this.refreshTokens().subscribe(
                (data: AnswerAuth) => {
                  if (data.success) {
                    this.sendDeleteItem(itemId).subscribe(
                      err => console.log(err)
                    )
                  }
                }
              )
            } else {
              if (data.msg == "Нет токена") {
                subscriber.next({ success: true, msg: "Не выполнен вход" })
              } else { 
                this.logOut().subscribe(
                  (data: AnswerAuth) => subscriber.next({ success: false, msg: "logout" })
                )
              }
            }
          }
        },
        err => {
          console.log(err);
        }
      )
    })
  }


  sendFetchBudgetItems() {
    let body = {
      accessToken: localStorage.getItem("accessToken"),
    }
    let headers = new HttpHeaders();
    headers.append("contentType", "application/json");

    return new Observable(subscriber => {
      this.http.post(this.hostService.getHost() + 'budgetItems/fetchBudgetItems', body, { headers: headers }).subscribe(
        (data: AnswerAuth) => {
          if (!data.success) {

            if (data.msg === "jwt expired") {
              this.refreshTokens().subscribe(
                (data: AnswerAuth) => {
                  if (data.success) {
                    this.sendFetchBudgetItems().subscribe(
                      (data: AnswerAuth) => {
                        if (data.success) subscriber.next(data);
                      },
                      err => console.log(err)
                    )
                  }
                }
              )
            } else {
              if (data.msg == "Нет токена") {
                subscriber.next({ success: false, msg: "Не выполнен вход" })
              } else { 
                this.logOut().subscribe(
                  (data: AnswerAuth) => subscriber.next({ success: false, msg: "logout" })
                )
              }
            }

          } else {
            subscriber.next(data);
          }
        }
      )
    })

  }


}
