
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {BudgetItem} from '..//app/budget-item'; 
import { AnswerAuth } from './library/answer-auth';
import { AuthService } from './library/auth.service';



@Injectable({
  providedIn: 'root'
})
export class BudgetItemsService {

  private budgetItems: BudgetItem[]=[  ]; 
   subject = new Subject<BudgetItem[]>();
  

  constructor(
    private authService: AuthService
    ) { }

  
  
  addBudgetItem(item: BudgetItem){
    this.budgetItems.push(item);
    this.sortBudgetItems();
    this.subject.next(this.budgetItems);

    this.authService.sendAddItem(item).subscribe(
      (data:AnswerAuth)=>{
        if (data.msg=="logout"){ 
          this.clearBudgetItems()
        }
      }
    );

  }



  getBudgetItems(){
    this.subject.next(this.budgetItems);
  }



    


  private sortBudgetItems(){
    this.budgetItems.sort((a,b):number=>{
      return (+b.date - +a.date)
    })

  }
  deleteBudgetItem(index){
    let itemID = this.budgetItems[index].itemID;
    this.budgetItems.splice(index,1);
    this.subject.next(this.budgetItems);

  }

  clearBudgetItems(){
    this.budgetItems=[];
    this.subject.next(this.budgetItems);
  }
}
