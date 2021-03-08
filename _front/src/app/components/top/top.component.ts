import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomizationComponent } from '../customization/customization.component';
import {  Answer } from '../../classes/answer';
import { LoginComponent } from '../login/login.component';
import { RegComponent } from '../reg/reg.component';
import { AuthService } from 'src/app/services/auth.service';
import { BudgetItemsService } from 'src/app/services/budget-items.service';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  isLogin = false;

  name:string; 
  
  constructor(
    public dialog: MatDialog, 
    private authService: AuthService,
    private _snackBar: MatSnackBar, 
    private budgetItemsService: BudgetItemsService,

    ) { }

  ngOnInit(): void {
    
    this.authService.subject.subscribe({next: userName=>{
      this.name = userName;
      this.isLogin =!!userName;
    }});
    this.authService.getUserName();
  }

  showRegForm(){
    this.dialog.open(RegComponent,{width:'300px'});
  }
  
  showLoginForm(){
    this.dialog.open(LoginComponent);
  }

  logOut(){
    this.authService.logOut().subscribe(
      (data:Answer)=> {
        if(data.success){
          this.budgetItemsService.clearBudgetItems();
          this._snackBar.open(data.msg, "Успешно!", {
            duration: 2000,
          })
        }
        else this._snackBar.open(data.msg, "Ошибка!");
      }
    )
  }
  customization(){
    this.dialog.open(CustomizationComponent,{autoFocus:false});
  }


}
