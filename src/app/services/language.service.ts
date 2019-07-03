import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from 'typings/Language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private httpclient : HttpClient) { }

  getLanguages() : Observable <Language []> {
     return this.httpclient.get<Language []>('https://alefesouza.dev/gama/languages.php')
  }

}
