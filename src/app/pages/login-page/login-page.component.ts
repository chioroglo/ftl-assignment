import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from '@ngrx/store';
import {loginRequest} from "../../states/auth/auth.actions";
import {AuthState} from "../../states/auth/types/AuthState";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


  public formGroup: FormGroup;

  constructor(
    private _router: Router,
    private _userService: AuthService,
    private _formBuilder: FormBuilder,
    private _store: Store<AuthState>) {

    this.formGroup = this._formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })
  }

  // form group getters
  getEmail() {
    return this.formGroup.get("email");
  }

  getPassword() {
    return this.formGroup.get("password");
  }

  signInButtonClicked(e: SubmitEvent) {

    e.preventDefault();

    this._store.dispatch(loginRequest(this.formGroup.value));

  }
}
