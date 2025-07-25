import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/shared/model/user.model';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  // if activeUrl has Id? isEditMode = true : isEditMode =false
  isEditMode: boolean = false;
  userId !: string;
  userForm!: FormGroup;
  editUSer !: Users;

  constructor(private _activeRouter: ActivatedRoute, private _userServ: UsersService, private _uuIdSev: UuidService, private _router: Router,private _matDialog:MatDialog) { }
  ngOnInit(): void {
    this.createUserForm()
    this.getUserParam()

  }
  getUserParam() {
    this.userId = this._activeRouter.snapshot.params['userId']
    if (this.userId) {
      this.isEditMode = true
      this._userServ.fetchUserDetails(this.userId).subscribe({
        next: data => {
          this.editUSer = data
          this.userForm.patchValue(data)

        },
        error: (err) => console.log(err)
      })
    } else {
      this.isEditMode = false
    }
  }

  createUserForm() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      userRole: new FormControl(null)
    })
  }
  addUser() {
    if (this.userForm.valid) {
      let obj: Users = {
        ...this.userForm.value,
        userId: this._uuIdSev.uuid()
      }

      this._userServ.addNewUser(obj)
      this.userForm.reset()
      console.log(obj);
      this._router.navigate(['users'])

    }
  }
  onUpdate() {
    if (this.userForm.valid) {
      let UPDATED_USER = {
        ...this.userForm.value,
        userId: this.userId
      }
      console.log(UPDATED_USER);
      this.userForm.reset( )
      this._userServ.updateUser(UPDATED_USER)
      this._router.navigate(['users'])
    }


  }


}
