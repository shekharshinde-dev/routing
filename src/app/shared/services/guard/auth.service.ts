import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { LoginUSer, RegisterUser } from "../../model/auth.model";


@Injectable({
    providedIn: 'root'
})

export class AuthService {
    userLoginStatus: boolean = false;
    AUTH_BASE_URL: string = environment.authBaseUrl

    constructor(private http: HttpClient) { }

    login(userDetails: LoginUSer): Observable<any> {

        //api Call >>store JWT token in ls 
        // return of('Login Successfully')
        let LOGIN_URL = `${this.AUTH_BASE_URL}/api/auth/login`;
        return this.http.post(LOGIN_URL, userDetails)

    }
    signUp(userDetails: RegisterUser): Observable<any> {
        //api call
        let SIGN_UP_URL = `${this.AUTH_BASE_URL}/api/auth/register`;
        return this.http.post(SIGN_UP_URL, userDetails)
    }

    saveToken(token: string) {
        localStorage.setItem('token', token)
    }
    saveUserRole(userRole: string) {
        localStorage.setItem('userRole', userRole)
    }
    getToken(): boolean {
        return !!localStorage.getItem('token')
        // if(localStorage.getItem('token')){
        //     return true
        // }else{
        //     return false
        // }
    }
}