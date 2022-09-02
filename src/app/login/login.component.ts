import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { loginModal } from './login.modal';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = { username: '', password: '', checked: false }
  loginModal = new loginModal('KALYAN0055', '');
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  login() {
    console.log(this.loginData);
    this.loginModal = this.loginData;
    console.log(this.loginModal);

    if (this.loginModal.password && this.loginModal.password) {
      this.router.navigate(['/dashboard'])
    }
  }

  get diagnostic() { return JSON.stringify(this.loginModal); }
}
