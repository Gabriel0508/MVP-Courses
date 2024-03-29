import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/core/services/validations.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private validationsService: ValidationsService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.onInitLoginForm();
  }

  /**
   * Method to display the error messages
   * @param field
   * @param errorType
   * @returns
   */
  onInputValidation(field: string, errorType: string): string {
    return this.validationsService.isFieldValid(
      field,
      errorType,
      this.loginForm
    );
  }

  /**
   * Method to navigate to a specific component
   * @param url
   */
  onNavigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

   /**
   * Method to submit the login form
   */
   onSubmit(): void {
    if (this.loginForm.valid) {
      this.showSuccess();
    }
    this.router.navigateByUrl('/')
  }

  /**
   * Method to init the login form
   */
  private onInitLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  /**
   * Method to show the notification
   */
  private showSuccess(): void {
    this.toastr.success(
      'Check our courses categories that we provided!',
      `Welcome back ${this.loginForm.controls['email'].value}`,
      {
        timeOut: 5000,
      }
    );
  }
}
