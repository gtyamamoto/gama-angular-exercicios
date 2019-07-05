import { AuthGuard } from '../auth/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListLanguagesComponent } from './list-languages/list-languages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLanguageComponent } from './add-language/add-language.component';
import { Routes, RouterModule } from '@angular/router';
import { LanguageComponent } from './language/language.component';
import { YearRangePipe } from './year-range.pipe';


const routes : Routes = [
  {path:'',component:ListLanguagesComponent,canActivate:[AuthGuard]},
  {path:'add',component:AddLanguageComponent,canActivate:[AuthGuard]},
];
@NgModule({
  declarations: [
    ListLanguagesComponent,
    AddLanguageComponent,
    LanguageComponent,
    YearRangePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
    
  ]
})
export class LanguagesModule { }
