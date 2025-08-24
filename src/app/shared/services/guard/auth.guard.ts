import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable({
    providedIn : 'root'
})
export class AuthGuard implements CanActivate ,CanActivateChild{

    constructor(private _authServ : AuthService,private _router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean |UrlTree {
        //it method can return true then navigate  allowed
        // return false
      
        //its method can return false then navigate not allowed
        if(this._authServ.getToken()){
            return true
        }else{
            //navigate to authComp
            return this._router.createUrlTree([''])
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   if(this._authServ.getToken()){
    //         return true
    //     }else{
    //         //navigate to authComp
    //         return this._router.createUrlTree([''])
    //     }  
    return this.canActivate(childRoute,state) /// call canActivate bcz same funcallity both
    }
}