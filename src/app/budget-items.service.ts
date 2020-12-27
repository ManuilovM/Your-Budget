import { Injectable } from '@angular/core';
import {BudgetItem} from '..//app/budget-item'; 

@Injectable({
  providedIn: 'root'
})
export class BudgetItemsService {

  private budgetItems: BudgetItem[]=[
    {amount: 300 , date: '2020-12-19', category: 'еда',description: ''},
    {amount: -1300 , date: '2020-12-19', category: 'вещи',description: ''}
  ];

  constructor() { }
  
  addBudgetItem(item: BudgetItem){
    this.budgetItems.push(item);
  }
  getBudgetItems(): BudgetItem[]{
    return this.budgetItems;
  }
}
