import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AnswerAuth } from '../library/answer-auth';
import { AuthService } from '../library/auth.service';
import { UserLoginForm } from '../library/user-login-form';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup =new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>, 
    private authService: AuthService,
    private _snackBar: MatSnackBar, 
    ) { }

  ngOnInit(): void {
  }
  submit(){
    let loginFormSubmit: UserLoginForm = this.loginForm.value;
    this.authService.loginUser(loginFormSubmit).subscribe(
      (data:AnswerAuth)=>{
        if(data.success){
          this.dialogRef.close();
          this._snackBar.open(data.msg, "Успешно!", {
            duration: 2000,
          });
           // this.budgetItemsService.fetchItems();
        }
        else this._snackBar.open(data.msg, "Ошибка!");
      }
    )

  }

}
