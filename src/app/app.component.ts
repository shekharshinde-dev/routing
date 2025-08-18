import { Component } from '@angular/core';
import { AuthService } from './shared/services/guard/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing';
  constructor(private _router:Router){}
  onLogOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('userRole') 
    this._router.navigate([''])
  }
}
