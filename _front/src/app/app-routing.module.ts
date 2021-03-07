import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

const routes: Routes = [
{ path: '', component: MainComponentComponent}, 
{ path: 'privacy', component: PrivacyComponent},
{ path: 'forgetPass',  component: MainComponentComponent},
{ path: '**', component:  NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
