import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BudgetItem } from '../classes/budget-item';

import {BudgetItemsService} from './budget-items.service';

@Injectable({
  providedIn: 'root'
})
export class TotalBudgetService {
 
  totalBudget: number = 0;
  
  constructor(private budgetItemsService: BudgetItemsService ) { 
    this.budgetItemsService.subject.subscribe({next: (bItems: [BudgetItem])=>{
      this.totalBudget = 0;
      bItems.forEach(item =>  this.totalBudget+=item.amount);
      this.subject.next(this.totalBudget);
    }})
    this.budgetItemsService.getBudgetItems();
  }

  subject = new Subject<number>();

  getTotalBudget(){
    this.subject.next(this.totalBudget);
  }

}
