import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes : Routes = [
  {path :'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
]
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
