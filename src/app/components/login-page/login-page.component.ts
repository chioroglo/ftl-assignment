import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Store } from '@ngrx/store';
import {authorize} from "../../reducers/user/userStateActions";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


  public formGroup: FormGroup;

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _store : Store) {

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

  async signInButtonClicked(e: SubmitEvent): Promise<any> {

    e.preventDefault();

    this._userService.authenticate(this.formGroup.value).subscribe({
      next: (response) => {
        console.log(response);
        this._store.dispatch(authorize(response));
        console.log("authorized");
        this._router.navigate(['profile']);
      },
      error: (error) => console.log(error)
    });

  }
}
