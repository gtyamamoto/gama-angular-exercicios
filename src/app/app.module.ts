import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { ListLanguagesComponent } from './components/list-languages/list-languages.component';
import { LanguageComponent } from './components/language/language.component';
import { NotaComponent } from './components/nota/nota.component';
import { YearRangePipe } from './pipes/year-range.pipe';
import { AddLanguageComponent } from './components/add-language/add-language.component';

const routes : Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'languages',component:ListLanguagesComponent},
  {path:'addlanguage',component:AddLanguageComponent},
  {path:'counter',component:CounterComponent},
  {path:'**',component:NotaComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ListLanguagesComponent,
    LanguageComponent,
    HomeComponent,
    NotaComponent,
    YearRangePipe,
    AddLanguageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
