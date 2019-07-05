import { LanguageService } from '../language.service';
import { Component, OnInit } from '@angular/core';
import { Language } from '../../../typings/Language';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {


  language : Language = {
    creator:'',
    name:'',
    year:1970
  }
  constructor(private languageservice : LanguageService,private router: Router) { }

  ngOnInit() {

  }
  postLanguage(){
    this.languageservice.addLanguage(this.language).subscribe(res=>{
      alert('Language added successfully!')
      this.router.navigateByUrl('/languages')

    },error=>{
      alert('servidor com problemas,tente novamente!')
    })
  }

}
