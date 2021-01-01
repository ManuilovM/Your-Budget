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
    this.subject.next(this.budgetItems);
  }
  

  getBudgetItems(){
    this.subject.next(this.budgetItems);
  }
}
