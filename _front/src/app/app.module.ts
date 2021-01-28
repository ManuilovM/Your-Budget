import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ReactiveFormsModule } from '@angular/forms';

/* ------------------------------- components ------------------------------- */

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { CurrentPeriodComponent } from './current-period/current-period.component';
import { FullAnalitikComponent } from './full-analitik/full-analitik.component';
import { BudgetItemFormComponent } from './current-period/budget-item-form/budget-item-form.component';
import { TableComponent } from './current-period/table/table.component';
import { RegComponent } from './reg/reg.component';

/* ----------------------------- materialize.io ----------------------------- */

import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

/* --------------------------- service and classes -------------------------- */

import { AuthService } from './library/auth.service';
import { HostService } from './library/host.service';
import { MainComponentComponent } from './main-component/main-component.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    CurrentPeriodComponent,
    FullAnalitikComponent,
    BudgetItemFormComponent,
    TableComponent,
    RegComponent,
    MainComponentComponent,
    PrivacyComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDialogModule,
    HttpClientModule,
    MatCheckboxModule
  ],
  providers: [AuthService,HostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
