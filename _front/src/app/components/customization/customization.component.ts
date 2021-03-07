import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePassComponent } from '../change-pass/change-pass.component';
import { DeleteAkkComponent } from '../delete-akk/delete-akk.component';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss']
})
export class CustomizationComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  showChangePass(){
    this.dialog.open(ChangePassComponent);
  }
  showDeleteAkk(){
    this.dialog.open(DeleteAkkComponent);
  }

}
