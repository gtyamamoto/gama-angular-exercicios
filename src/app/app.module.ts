import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';


import { NotaComponent } from './components/nota/nota.component';



const routes : Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'languages',loadChildren:()=>import('./languages/languages.module').then(m=>m.LanguagesModule)},
  {path:'counter',component:CounterComponent},
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'**',component:NotaComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent,
    NotaComponent
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
