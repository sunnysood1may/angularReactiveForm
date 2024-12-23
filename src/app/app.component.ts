import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForm';
  loginForm = new FormGroup({
    email: new FormControl(''/*,[Validators.required,Validators.email]*/),
    //address: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    address: new FormControl(''/*,[Validators.required,Validators.pattern('[a-zA-z ]*')]*/),
    password: new FormControl('')
  })

  get email(){  return this.loginForm.get('email')  }
  get address(){  return this.loginForm.get('address')  }

  onLogin(){
    console.warn(this.loginForm.value);
  }

  /*collectData(){
    console.warn(this.loginForm.value);
  }*/

}
