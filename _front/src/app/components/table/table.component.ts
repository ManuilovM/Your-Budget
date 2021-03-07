import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { BudgetItem } from 'src/app/classes/budget-item';
import { BudgetItemsService } from 'src/app/services/budget-items.service';





@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  BUDGET_ITEMS_DATA: BudgetItem[];
  budgetItems;
  tableColumns:string[]=["amount", "date", "category", "description"]

  constructor(private budgetItemsService: BudgetItemsService){

  }
  private _ready(){
    document.getElementsByClassName('mat-paginator-page-size-label')[0].innerHTML='Показать по '
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.budgetItemsService.clearBudgetItems(false);
    this.budgetItemsService.fetchBudgetItems();
    this.budgetItemsService.getBudgetItems();

    document.addEventListener("DOMContentLoaded", this._ready);
    this.budgetItemsService.subject.subscribe({next: bItems=>{
      this.BUDGET_ITEMS_DATA = bItems;
      this.budgetItems = new MatTableDataSource<BudgetItem>(this.BUDGET_ITEMS_DATA);
      this.budgetItems.paginator = this.paginator;
    }})
  }

  deleteBudgetItem(e){
    let elem  = e.currentTarget;
    let index: number = +elem.children[0].innerHTML
    this.budgetItemsService.deleteBudgetItem(index);
  }

  

}
