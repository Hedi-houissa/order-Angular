import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.css'],
})
export class LoginUiComponent {
  email: string = '';
  password: string = '';
  errors: boolean = false;

  constructor(private router: Router) {}

  login(): void {
    // Perform authentication logic here
    // You can add authentication service or API call to validate the credentials
    // For simplicity, we'll use a simple check on the email and password

    if (this.email === 'user@user.com' && this.password === 'password') {
      this.errors = false;
      this.router.navigate(['/userOrder']);
    } else if (
      this.email === 'manager@manager.com' &&
      this.password === 'password'
    ) {
      this.errors = false;
      this.router.navigate(['/checkOrders']);
    } else {
      this.errors = true;
    }
  }
}
