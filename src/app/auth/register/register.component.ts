import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email : string = ''
  password : string = ''
  confirmpassword : string = ''
  constructor(private authservice : AuthService) { }

  ngOnInit() {
  }
   

  createUser(){
      
    if(this.confirmpassword!==this.password) return alert('senhas nao coincidem!')

    this.authservice.createAccount(this.email,this.password)
    .subscribe(val=>{
      alert('usuario criado com sucesso!')
      console.log(val)
    })


  }

}
