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

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private authSvc: AuthService, private router: Router) { }

  async ngOnInit() {
    //this.user = await this.authSvc.getCurrentUser();
    //if (this.user) {
    //  this.isLogged = true;
    //}
  }

  async onLogout(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/home'])
    }catch(error){console.log(error)}
    
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
