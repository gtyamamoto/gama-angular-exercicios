import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../../typings/Language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private httpclient : HttpClient) { }

  getLanguages() : Observable <Language []> {
     return this.httpclient.get<Language []>('http://localhost:3000/languages')
  }
  addLanguage(language : Language) {
    return this.httpclient.post('http://localhost:3000/languages',language)
  }

}
