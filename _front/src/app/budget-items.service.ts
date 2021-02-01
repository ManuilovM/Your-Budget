import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {BudgetItem} from '..//app/budget-item'; 
import { AnswerAuth } from './library/answer-auth';
import { HostService } from './library/host.service';

@Injectable({
  providedIn: 'root'
})
export class BudgetItemsService {

  private budgetItems: BudgetItem[]=[  ];
   subject = new Subject<BudgetItem[]>();

  constructor(
    private http: HttpClient,
    private hostService: HostService,
    ) { }

  
  
  addBudgetItem(item: BudgetItem){
    this.budgetItems.push(item);
    this.sortBudgetItems();
    this.subject.next(this.budgetItems);


      //отправляем запрос без проверки выполнен ли вход, сервер разбется с этим лучше
      let headers = new HttpHeaders();
      headers.append("contentType", "application/json");
      this.http.post(this.hostService.getHost() + 'budgetItems/addItem', { headers: headers}).subscribe(
        (data: AnswerAuth)=>{
          console.log(data.success + ": " + data.msg )
        },
        err=>{
          console.log(err);
        }
      )
    
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
    let itemID = this.budgetItems[index].itemID;
    this.budgetItems.splice(index,1);
    this.subject.next(this.budgetItems);

          //отправляем запрос без проверки выполнен ли вход, сервер разбется с этим лучше
          let headers = new HttpHeaders();
          headers.append("contentType", "application/json");
          this.http.post(this.hostService.getHost() + 'budgetItems/deleteItem', itemID, { headers: headers}).subscribe(
            (data: AnswerAuth)=>{
              console.log(data.success + ": " + data.msg )
            },
            err=>{
              console.log(err);
            }
          )
  }

  clearBudgetItems(){
    this.budgetItems=[];
    this.subject.next(this.budgetItems);
  }
}
