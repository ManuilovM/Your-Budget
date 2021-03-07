import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AnswerAuth } from '../../classes/answer-auth';


@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {

  tempPassToken: string
  changePassForm: FormGroup = new FormGroup({
    oldPass: new FormControl(null, this.oldPassValidator),
    newPass: new FormControl(null, Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<ChangePassComponent>,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.tempPassToken = localStorage.getItem("tempPassToken");
  }

  submit(){
    let passForm: any = this.changePassForm.value;
    if(this.tempPassToken){
      let body = {
        tempPassToken: this.tempPassToken,
        newPass: passForm.newPass,
        accessToken: localStorage.accessToken
      };
      this.authService.changePass(body).subscribe(
        (data:AnswerAuth)=>{
          if(data.success){
            localStorage.removeItem("tempPassToken");
            this._snackBar.open("Пароль успешно заменен", "Успешно!", {duration: 2000, });
            this.authService.getUserName();
            this.dialogRef.close();
            this.router.navigate(['/']);
          }else{
            if (data.msg == "jwt expired"){
              localStorage.removeItem("tempPassToken");
              this._snackBar.open("Истек срок действительности временного пароля. После завершения текущей сессии повторите попытку.", "Ошибка"); 
              this.dialogRef.close();  
              this.router.navigate(['/']);
              this.authService.getUserName();
            }
          }
        },
        err=> {console.log(err)}
      );

    }else{
      let body={
        oldPass: passForm.oldPass,
        newPass: passForm.newPass,
        accessToken: localStorage.accessToken
      }
      this.authService.changePass(body).subscribe(
        (data:AnswerAuth)=> {
          if(data.success){
            this.dialogRef.close();
            this.router.navigate(['/']);
            this._snackBar.open("Пароль успешно заменен", "Успешно!", {duration: 2000, })
          }else{
            if(data.msg=="Старый пароль не верен"){
              this.dialogRef.close();
              this.router.navigate(['/']);
              this._snackBar.open(data.msg, "Ошибка!");
            }
          }
        }
      )

    }

  }

  onClickXbutton(){
    this.router.navigate(['/']);
  }
  
  oldPassValidator(control: FormControl): {[s:string]:boolean}{
         
    if(!this.tempPassToken && control.value===false){
        return {"tempPas": true};
    }
    return null; 
  }


}
