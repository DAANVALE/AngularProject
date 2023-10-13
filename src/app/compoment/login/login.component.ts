import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  
  signupUser: any[] = [];
  signupObject: any = 
  {
    userName: '',
    email: '',
    password: ''
  };

  loginObject: any = 
  {
    email: '',
    password: ''
  };

  constructor(){}

  ngOnInit(): void 
  {
    this.onSignUp;
    this.onLoginUp;
  }

  onSignUp()
  {

    console.log(this.signupObject);

    this.signupUser.push(this.signupObject);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUser));

    this.signupObject = 
    {
      userName: '',
      email: '',
      password: ''
    }
  }

  onLoginUp()
  {
  }
}
