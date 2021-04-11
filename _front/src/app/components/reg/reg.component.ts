import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegFormValues } from '../../classes/reg-form-values';
import { MatDialogRef} from '@angular/material/dialog';

import { Answer } from '../../classes/answer';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BudgetItemsService } from 'src/app/services/budget-items.service';
 

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  host= location.hostname;
  hrefPolycy =  "/privacy";

  regForm: FormGroup = new FormGroup({
    name: new FormControl( null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
    privacyPolicy: new FormControl(false, this.privacyPolicyValidator),   
    isSaveTable: new FormControl(true), 
  });

  constructor(
    private authService: AuthService, 
    private _snackBar: MatSnackBar, 
    public dialogRef: MatDialogRef<RegComponent>,
    private budgetItemService: BudgetItemsService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

 
  submit(){
    let regFormSubmit:RegFormValues= this.regForm.value;

    this.authService.sendRegisterForm(regFormSubmit).subscribe(
      (data:Answer)=>{ 
          this._snackBar.open(data.msg, "Успешно!", {
            duration: 2000,
          });
          this.dialogRef.close();
          this.authService.loginUser({email: regFormSubmit.email, password: regFormSubmit.password, isSaveTable: regFormSubmit.isSaveTable }).subscribe(
            (data:Answer)=>{
              if (data.success){
                if(regFormSubmit.isSaveTable)  this.budgetItemService.pushAllBudgetItems();
              } else this._snackBar.open(data.msg, "Ошибка!");
            }
          )
      },
      err=>{
        console.log(err); 
        this._snackBar.open(err.message, "Ошибка!")
      }
    )
  }


  showPrivacyPolicy(){
    window.open(this.router.serializeUrl(this.router.createUrlTree(["/privacy"])));
    return false;
  }

  privacyPolicyValidator(control: FormControl): {[s:string]:boolean}{
         
    if(control.value===false){
        return {"privacyPolicy": true};
    }
    return null; 
  }
}
