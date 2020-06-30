import { User } from 'firebase';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService],
})
export class HeaderComponent implements OnInit {
  public isLogged = false;
 // public user: any;
  public user$: Observable<any> = this.authSvc.afAuth.user;
  us: User;
  admin: string = '1' ;
  corre: string = 'jose_jaime6@hotmail.com';
  @Output() public sidenavToggle = new EventEmitter();
  //admin2: boolean = false;

  constructor(private authSvc: AuthService, private router: Router) { }

  async ngOnInit() {
    this.us = await this.authSvc.getCurrentUser();
    console.log(this.us?.email);
    console.log(this.corre);
    if (this.us?.email === this.corre) {
      // this.isLogged = true;
      this.admin = '2';
    }

    if (this.us?.email !== this.corre) {
      // this.isLogged = true;
      this.admin = '3';
    }
  }

  async onLogout(){
    try{
      this.admin = '1';
      await this.authSvc.logout();
      this.router.navigate(['/home'])
    }catch(error){console.log(error)}
    
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
