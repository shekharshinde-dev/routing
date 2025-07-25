import { Injectable } from "@angular/core";
import { Users } from "../model/user.model";
import { Observable, of } from "rxjs";
import { SnackBarService } from "./snackbar.service";


@Injectable({
    providedIn: 'root'
})

export class UsersService {
    usersArr: Users[] = [
        {
            userName: 'Jhon',
            userId: '123',
            userRole: 'Candidate'
        },
        {
            userName: 'Jen',
            userId: '124',
            userRole: 'Admin'
        },
        {
            userName: 'May',
            userId: '125',
            userRole: 'Candidate'
        },
        {
            userName: 'Alex',
            userId: '126',
            userRole: 'Admin'
        },
        {
            userName: 'Sara',
            userId: '127',
            userRole: 'Candidate'
        },
        {
            userName: 'Liam',
            userId: '128',
            userRole: 'Admin'
        }
    ];

    constructor(private _snackbar: SnackBarService) { }

    fetchAllUsers(): Observable<Users[]> {
        //api call for fetch data
        return of(this.usersArr)
    }
    fetchUserDetails(id: string): Observable<Users> {
        let userObj = this.usersArr.find(user => user.userId === id) as Users
        return of(userObj)
    }

    addNewUser(userObj: Users) {
        this.usersArr.push(userObj)
        this._snackbar.openSnackBar(`The ${userObj.userName} is Added Successfully!! as a ${userObj.userRole}`)
    }
    updateUser(updateObj: Users) {
        //API Call PATCH/PUT to Update in DB
        let getIndex = this.usersArr.findIndex(user => user.userId === updateObj.userId)
        if (getIndex !== -1) {
            const oldUser = this.usersArr[getIndex]

            // update user

            this.usersArr[getIndex] = updateObj;
            this._snackbar.openSnackBar(`User updated successfully!\nOld: ${oldUser.userName} (${oldUser.userRole}) → New: ${updateObj.userName} (${updateObj.userRole})`)
        }
    }

    removeUser(userObj:Users){
        let getIndex = this.usersArr.findIndex(user => user.userId === userObj.userId);
        this.usersArr.splice(getIndex,1)
    }
}