import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {BudgetItem} from '..//app/budget-item'; 

@Injectable({
  providedIn: 'root'
})
export class BudgetItemsService {

  private budgetItems: BudgetItem[]=[  ];
   subject = new Subject<BudgetItem[]>();

  constructor() { }

  
  
  addBudgetItem(item: BudgetItem){
    this.budgetItems.push(item);
    this.sortBudgetItems();
    this.subject.next(this.budgetItems);
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
    this.budgetItems.splice(index,1);
    this.subject.next(this.budgetItems);
  }

  clearBudgetItems(){
    this.budgetItems=[];
    this.subject.next(this.budgetItems);
  }
}
