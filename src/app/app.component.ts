import { Component, OnInit } from '@angular/core';
import { TotalBudgetService } from './total-budget.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Simple Budget Analitik';
  totalBudget: number; 
  constructor(private totalbudgetService: TotalBudgetService ){

  }

  ngOnInit(){
 this.totalbudgetService.getTotalBudget();
    this.totalbudgetService.subject.subscribe({next: tBudget=>{
      this.totalBudget = tBudget;
    }})

  }

}
