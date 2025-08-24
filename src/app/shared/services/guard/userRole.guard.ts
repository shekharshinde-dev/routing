import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";



@Injectable({
    providedIn : 'root'
})

export class UserRoleGuard implements CanActivate{
   
    private _authServ = inject(AuthService)
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
        
        //statcic dara >> UserRole

        // LogIn User >> local storage

        let arrOfUserRole :string[] = route.data['userRole'];
        let logedInUser : string = this._authServ.getUserRole()!
        return arrOfUserRole.includes(logedInUser);

        // if(arrOfUserRole.includes(logedInUser)){
        //     return true
        // }else{
        //     return false
        // }
    }
}