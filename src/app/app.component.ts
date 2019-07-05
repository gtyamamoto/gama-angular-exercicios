import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email ='';
  constructor(public authservice : AuthService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const token = localStorage.getItem('token')
    if(token!==''){
      this.authservice.verifyToken(token)
      .subscribe(v=>{
        this.authservice.setUser({email:v.users[0].email})
      },error=>{
        console.warn(error)
      })
    }
    this.authservice.currentUser.subscribe(user=>{
      if(user!==null) this.email = user.email
    })
  }
  logout(){
    this.authservice.logout()
  }

}
