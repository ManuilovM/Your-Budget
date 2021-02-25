
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

  
  
  addBudgetItem(bItem: any){
    let now:Date = new Date();
    bItem.date = new Date(bItem.date);
    bItem.date.setHours(now.getHours());
    bItem.date.setMinutes(now.getMinutes());
    bItem.date.setSeconds(now.getSeconds());
    bItem.itemID = this._generateItemID();

    this.budgetItems.push(bItem);
    this.sortBudgetItems();
    this.subject.next(this.budgetItems);

    this.authService.sendAddItem(bItem).subscribe(
      (data:AnswerAuth)=>{
        if (data.msg=="logout"){ 
          this.clearBudgetItems()
        }
      }
    );

  }
  private _generateItemID():string{
  
    let id:string= Math.random()*Math.random()*1000000+"."+(+new Date()) ;
    return id
  }




  getBudgetItems(){
    this.subject.next(this.budgetItems);
  }



    


  private sortBudgetItems(){
    this.budgetItems.sort((a,b):number=>{
      return (+(new Date(b.date)) - +(new Date(a.date)))
    })

  }
  deleteBudgetItem(index){
    let itemID = this.budgetItems[index].itemID;
    this.budgetItems.splice(index,1);
    this.subject.next(this.budgetItems);

    this.authService.sendDeleteItem(itemID).subscribe(
      (data:AnswerAuth)=>{
        if (data.msg=="logout"){ 
          this.clearBudgetItems()
        }
      }
    )
  }

  clearBudgetItems(isSubject = true){
    this.budgetItems=[];
    if (isSubject) this.subject.next(this.budgetItems);
  }

  async pushAllBudgetItems(){
    for ( let item of this.budgetItems){
      await this.authService.sendAddItem(item).subscribe(
        err=> console.log(err)
      )
    }
    return true
  }

  fetchBudgetItems(){
    this.authService.sendFetchBudgetItems().subscribe(
      (data:AnswerAuth)=>{
        if(data.success){
          this.budgetItems = data.budgetItems;
          this.sortBudgetItems();
          this.subject.next(this.budgetItems);
        }
      }
    )
  }
}

