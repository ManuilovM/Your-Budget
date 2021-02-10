import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangePassComponent } from '../change-pass/change-pass.component';
import { AnswerAuth } from '../library/answer-auth';
import { AuthService } from '../library/auth.service';
import { TotalBudgetService } from '../total-budget.service';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  totalBudget: number; 
  constructor(
    private totalbudgetService: TotalBudgetService,
    private route: ActivatedRoute,
    private authService: AuthService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router


     ) { }

  ngOnInit(): void {
    this.totalbudgetService.getTotalBudget();
    this.totalbudgetService.subject.subscribe({next: tBudget=>{
      this.totalBudget = tBudget;
    }})
    this.viewChangePass();
  }

  private viewChangePass(){
    console.log(this.router.url)
    if(location.href.indexOf("forgetPass")!==-1){
      console.log("top")
      this.route.queryParams.subscribe(
        (queryParam: any)=>{
          let accessToken= queryParam['id'];
          console.log("accessToken: "+queryParam['id'])
          this.authService.getForgetPass(accessToken).subscribe(
            (data:AnswerAuth)=>{
              if(data.success){
                this.dialog.open(ChangePassComponent);
              }else{
                if(data.msg=="jwt expired"){
                  this._snackBar.open("Срок действительности запроса на смену пароля истёк. Пожалуйста повторите попытку", "Ошибка!");
                  this.router.navigate(['/']);
                }
              }
            }
          )
        }
      )
    }
  }

}
