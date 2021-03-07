import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ReactiveFormsModule } from '@angular/forms';

/* ------------------------------- components ------------------------------- */

import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { CurrentPeriodComponent } from './components/current-period/current-period.component';
import { BudgetItemFormComponent } from './components/budget-item-form/budget-item-form.component';
import { TableComponent } from './components/table/table.component';
import { RegComponent } from './components/reg/reg.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { LoginComponent } from './components/login/login.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { CustomizationComponent } from './components/customization/customization.component';
import { DeleteAkkComponent } from './components/delete-akk/delete-akk.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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



import { AuthService } from './services/auth.service';
import { HostService } from './services/host.service';
import { BudgetItemsService } from './services/budget-items.service';







@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    CurrentPeriodComponent,
    BudgetItemFormComponent,
    TableComponent,
    RegComponent,
    MainComponentComponent,
    PrivacyComponent,
    LoginComponent,
    ChangePassComponent,
    CustomizationComponent,
    DeleteAkkComponent,
    NotFoundComponent,
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
  providers: [AuthService, HostService, BudgetItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
