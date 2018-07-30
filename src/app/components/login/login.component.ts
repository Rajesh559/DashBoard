import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  
  model: any ={};
  validate = "admin";
  showError : boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    if(this.model.username == 'admin' && this.model.password == 'admin123') {
        localStorage.setItem('uname',this.validate);
        this.router.navigate(['/dashboard']);
    }
    else {
      this.showError = true;
      setTimeout(() => {
         this.showError = false; 
       }, 3000);    
    }
  }

}
