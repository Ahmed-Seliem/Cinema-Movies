import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Account/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path: 'login' ,component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
