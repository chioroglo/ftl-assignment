import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


  public formGroup: FormGroup;
  // public formGroup = new FormGroup({
  //   email: new FormControl("",[Validators.required,Validators.email]),
  //   password: new FormControl("",[Validators.required])
  // })

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _formBuilder: FormBuilder) {

    this.formGroup = this._formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })
  }

  async signInButtonClicked(): Promise<any> {

    this._userService.authenticate(this.formGroup.value).subscribe({
      next: (response) => console.log("AUTHENTICATED SUCCESSFULLY"),
      error: (error) => console.log(error)
    });

  }
}
