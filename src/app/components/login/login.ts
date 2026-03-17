import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  /* flag = false;

  submit(data: any) {
    if (data.valid) {
      console.log(data.value);
    }else {
      this.flag = true;
      setTimeout(() => {
        this.flag = false;
      }, 2000);
    }
  } */

  /*  */
  loginForm: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: ProductService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  submit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginForm.reset();
      localStorage.setItem('role', 'User');
      this.router.navigate(['/home']);
    } else {
      console.log('Data In valid');
    }
  }
}
