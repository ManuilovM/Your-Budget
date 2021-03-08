import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserLoginForm } from 'src/app/classes/user-login-form';
import { AuthService } from 'src/app/services/auth.service';
import { BudgetItemsService } from 'src/app/services/budget-items.service';
import {  Answer } from '../../classes/answer';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
    isSaveTable: new FormControl(true),
  });

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private budgetItemsService: BudgetItemsService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    let loginFormSubmit: UserLoginForm = this.loginForm.value;
    this.authService.loginUser(loginFormSubmit).subscribe(
      (data: Answer) => {
        if (data.success) {
          this.dialogRef.close();
          this._snackBar.open(data.msg, "Успешно!", {
            duration: 2000,
          });
          if (loginFormSubmit.isSaveTable) {
            this.budgetItemsService.pushAllBudgetItems().then(
              value => {
                this.budgetItemsService.clearBudgetItems(false);
                this.budgetItemsService.fetchBudgetItems();
                window.location.reload();
              }
            )
          }else{
            this.budgetItemsService.clearBudgetItems(false);
            this.budgetItemsService.fetchBudgetItems();
          }

        }
        else this._snackBar.open(data.msg, "Ошибка!");
      }
    )

  }
  
  forgotPass(){
    let loginFormSubmit: UserLoginForm = this.loginForm.value;
    if(!loginFormSubmit.email) this._snackBar.open("Введите Email", "Ошибка!");
     else{
       if(!loginFormSubmit.isSaveTable) this.budgetItemsService.clearBudgetItems();
      this.authService.forgetPass(loginFormSubmit.email).subscribe(
        (data:Answer)=>{
          if(data.success) this._snackBar.open("На Ваш Email сейчас прийдет письмо с сылкой для смены пароля. Пожалуйста перейдите по ней","Успешно!");
          else{
            if(data.msg == "No user") this._snackBar.open("Пользователь не найден", "Ошибка!");
          }
        },
        err=> console.log(err)
      )
    } 
    return false
  }

}
