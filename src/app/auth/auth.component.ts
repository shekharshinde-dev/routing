import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/guard/auth.service';
import { Router } from '@angular/router';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { SnackBarService } from '../shared/services/snackbar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  allReadyHasAccount: boolean = true
  loginForm !: FormGroup;
  signUpForm !: FormGroup;
  constructor(private _authServ: AuthService, private _router: Router, private _snackbar: SnackBarService) { }
  ngOnInit(): void {
    this.createLoginForm()
    this.createSignUpForm()
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    })
  }
  createSignUpForm() {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      userRole: new FormControl(null, [Validators.required])
    })
  }

  onLogin() {
    //{email and pass } as a body send api
    //api call
    //save token in ls
    // this._authServ.login().subscribe({
    //   next: (data) => {
    //     console.log(data)
    //     this._authServ.saveToken('token from be')
    //     this._authServ.saveUserRole('Buyer')
    //     this._router.navigate(['/home'])

    //   },
    //   error: (err) => console.log(err)

    // })
    if (this.loginForm.valid) {
      let obj = this.loginForm.value
      this._authServ.login(obj)
        .subscribe({
          next: (res) => {
            console.log(res)
            //store token and userRole in ls 
            this._authServ.saveToken(res.token)
            this._authServ.saveUserRole(res.userRole)
            // // show msg 
            this._snackbar.openSnackBar(res.message)
            // //navigate to
           this._router.navigate(['/home'])
            
            
          },
          error : (err) =>{
            this._snackbar.openSnackBar(err.error.message)
            
          }
        })
    }

  }
  onSignUp() {
    if (this.signUpForm.valid) {
      let val = this.signUpForm.value
      console.log(val);
      this._authServ.signUp(val).subscribe({
        next: (res) => {
          console.log(res)
          this.signUpForm.reset()
          this.allReadyHasAccount = false
          this._snackbar.openSnackBar(res.message)
        },
        error: (err) => {
          this._snackbar.openSnackBar(err.error.message)

        }
      })
    }
  }
}
