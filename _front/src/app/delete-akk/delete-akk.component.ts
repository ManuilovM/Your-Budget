import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AnswerAuth } from '../library/answer-auth';
import { AuthService } from '../library/auth.service';

@Component({
  selector: 'app-delete-akk',
  templateUrl: './delete-akk.component.html',
  styleUrls: ['./delete-akk.component.scss']
})
export class DeleteAkkComponent implements OnInit {


  deleteAkkForm: FormGroup = new FormGroup({
    oldPass: new FormControl(null, Validators.required),
  
  });

  constructor(
    private authService:AuthService,
    private _snackBar: MatSnackBar,
    private router: Router,
    public dialogRefDel: MatDialogRef<DeleteAkkComponent>,

  ) { }

  ngOnInit(): void {
  }

  submit(  ){
    let body = {
      pass: this.deleteAkkForm.value.oldPass,
      accessToken: localStorage.getItem("accessToken")
    }
    this.authService.deleteAkk(body).subscribe(
      (data: AnswerAuth)=>{
        if(data.success){
          this._snackBar.open(data.msg, "Успешно", {duration:2000});
          this.dialogRefDel.close();
          window.location.reload();
          
        }else{
          this._snackBar.open(data.msg, "Ошибка");
        }
      }
    )
  }
}