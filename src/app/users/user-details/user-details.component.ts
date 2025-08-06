import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GetConfirmComponent } from 'src/app/get-confirm/get-confirm.component';
import { Users } from 'src/app/shared/model/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userId !: string;
  userInfo!: Users;
  editUser !: Users;
  constructor(private _activatedRoute: ActivatedRoute, private _userServ: UsersService, private _matDialog: MatDialog,private _router:Router) { }

  ngOnInit(): void {
    this.getParam()
    this.onLoad()
  }

  getParam() {
    this.userId = this._activatedRoute.snapshot.params['userId']
    if (this.userId) {
      this._userServ.fetchUserDetails(this.userId).subscribe({
        next: data => {
          this.userInfo = data;
        },
        error: (err) => {
          console.log(err);

        }
      })

    }
  }


  onRemove() {

    console.log('trigger');

    let matDialogConfig = new MatDialogConfig()
    matDialogConfig.width = "700px";
    matDialogConfig.maxWidth = "90%";
    matDialogConfig.disableClose = true;
    matDialogConfig.data = `Are You sure, You want to Remove ${this.userInfo.userName}`
    let matDialogRef = this._matDialog.open(GetConfirmComponent, matDialogConfig)
    matDialogRef.afterClosed().subscribe((res)=>{
      if(res){
        this._userServ.removeUser(this.userInfo)
      this._router.navigate(['users'])
      }
      
    })
  }
  onLoad(){
    this._activatedRoute.params.subscribe(param =>{
      console.log(param)
      this.userId = param['userId']
      if(this.userId){
        this._userServ.fetchUserDetails(this.userId).subscribe({
          next : (data) => {
            this.userInfo = data
          },
          error : err => console.log(err)
          
        })
      }
    })
  }


}
