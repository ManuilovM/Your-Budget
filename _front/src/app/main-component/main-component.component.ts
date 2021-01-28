import { Component, OnInit } from '@angular/core';
import { TotalBudgetService } from '../total-budget.service';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  totalBudget: number; 
  constructor(private totalbudgetService: TotalBudgetService ) { }

  ngOnInit(): void {
    this.totalbudgetService.getTotalBudget();
    this.totalbudgetService.subject.subscribe({next: tBudget=>{
      this.totalBudget = tBudget;
    }})
  }

}
