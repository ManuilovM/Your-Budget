
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { BudgetItemsService } from "src/app/budget-items.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: "app-budget-item-form",
  templateUrl: "./budget-item-form.component.html",
  styleUrls: ["./budget-item-form.component.scss"],
})
export class BudgetItemFormComponent implements OnInit {
  budgetForm: FormGroup = new FormGroup({
    amount: new FormControl( null, Validators.required),
    date: new FormControl(this._formatDate(new Date()),Validators.required),
    category: new FormControl("", Validators.required),
    description: new FormControl(""),
  });
  filteredOptions: Observable<string[]>;
  categories: string[] =[] ;

  constructor(private budgetItemsService: BudgetItemsService, private _snackBar: MatSnackBar ) {}

  ngOnInit() {
    this.filteredOptions = this.budgetForm.controls[
      "category"
    ].valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );

   this.budgetItemsService.getBudgetItems();


    this.budgetItemsService.subject.subscribe({
      next: bItems=> {
        this.categories = bItems.map(item=> item.category);
        this.categories= this._filterCategory(this.categories);
        this.budgetForm.controls.category.setValue('');
      }
    })
  }

  submit(){
    let bItem: any = this.budgetForm.value;
    let now:Date = new Date();
    bItem.date = new Date(bItem.date);
    bItem.date.setHours(now.getHours());
    bItem.date.setMinutes(now.getMinutes());
    bItem.date.setSeconds(now.getSeconds());
    this.budgetItemsService.addBudgetItem(bItem);
    this.shoCompleteMessage();
    this.budgetForm.controls.amount.reset();
    this.budgetForm.controls.category.setValue('');
    this.budgetForm.controls.description.reset();
}

  shoCompleteMessage(){
    this._snackBar.open("Запись добавлена","Успешно", {
      duration: 2000,
    });
  }


  private _filterCategory(categoryArr: string[]) {
    let arrRes: string[] =[];
    categoryArr.forEach((item :string) =>{
      if (arrRes.indexOf(item)==-1) arrRes.push(item);
    })
   this.budgetForm.controls.amount
    return   arrRes;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.categories.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
  }
  private _formatDate(date: Date): string {
    let year: string = ""+date.getFullYear();
    let month: number = date.getMonth() + 1;
    let monthStr: string;
    if (month < 10) monthStr = "0" + month;
    else monthStr = "" + month;
    let day : number =date.getDate();
    let dayStr: string;
    if (day < 10) dayStr = "0" + day
    else dayStr = "" + day;
    return year + "-" + monthStr+ "-" + dayStr;
  }

}
