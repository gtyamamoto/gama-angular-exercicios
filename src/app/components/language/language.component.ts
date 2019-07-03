import { Language } from 'typings/Language';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  @Input() language : Language   = {name:'john doe',creator:'n.d.a',year:1999};
  constructor() { }

  ngOnInit() {
  }

}
