import { LanguageService } from './../../services/language.service';
import { Language } from 'typings/Language';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-languages',
  templateUrl: './list-languages.component.html',
  styleUrls: ['./list-languages.component.css']
})
export class ListLanguagesComponent implements OnInit {
  

  languages : Language [] = [];
  constructor(public languageService : LanguageService) { }

  ngOnInit() {

    this.languageService.getLanguages().subscribe(languages=>{
      this.languages = languages;
      console.log(languages)
    })


  }

}
