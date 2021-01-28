import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from '../library/auth.service';
import { RegComponent } from '../reg/reg.component';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  isLogin = false;

  name:string; //Имя юзера для отображения в нав баре

  constructor(public dialog: MatDialog, public authService: AuthService, ) { }

  ngOnInit(): void {
    
    this.authService.subject.subscribe({next: userName=>{
      this.name = userName;
      this.isLogin =!!userName;
    }});
    this.authService.getUserName();

  }

  showRegForm(){
    this.dialog.open(RegComponent,{width:'300px'});
  }

}
