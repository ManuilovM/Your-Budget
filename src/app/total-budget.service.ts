import { Injectable } from '@angular/core';
import { BudgetItem } from './budget-item';
import {BudgetItemsService} from './budget-items.service';

@Injectable({
  providedIn: 'root'
})
export class TotalBudgetService {
 
  totalBudget: number =0;
  constructor(private budgetItemsService: BudgetItemsService ) { 
    
  }


   

  getTotalBudget(){
    this.budgetItemsService.getBudgetItems().forEach(item =>  this.totalBudget+=item.amount);
    return this.totalBudget;
  }
}
