import { Component, OnInit } from '@angular/core';
import { Users } from '../shared/model/user.model';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userData: Users[] = []

  constructor(private _userServ: UsersService) { }
  ngOnInit(): void {
    this.fetchDataForService()
  }
  fetchDataForService() {
    this._userServ.fetchAllUsers()
      .subscribe({
        next: (data) => {
          this.userData = data
        },
        error: (err) => {
          console.log(err)

        }
      })
  }
}
