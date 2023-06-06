import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidationsService } from 'src/app/core/services/validations.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(
    private validationsService: ValidationsService,
    private fb: UntypedFormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.onInitRegisterForm();
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
      this.registerForm
    );
  }

  /**
   * Method to submit the login form
   */
  onSubmit(): void {
    if (this.registerForm.valid) {
      this.showSuccess();
    }
  }

  /**
   * Method to init the register form
   */
  private onInitRegisterForm(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
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
      `Welcome ${
        this.registerForm.controls['firstName'].value +
        ' ' +
        this.registerForm.controls['lastName'].value
      } to the MVP Courses`,
      {
        timeOut: 5000,
      }
    );
    this.router.navigateByUrl('/');
  }
}
