import { User } from 'firebase';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService],
})
export class HeaderComponent implements OnInit {
  public user$: Observable<any> = this.authSvc.afAuth.user;
  public comp: Observable<any> = this.authSvc.afAuth.user;

  @Output() public sidenavToggle = new EventEmitter();
  
  constructor(private authSvc: AuthService, private router: Router) {}

  async ngOnInit() {}

  async onLogout(usuario) {
    try {
      await this.authSvc.logout();
      swal.fire(`Gracias por visitarnos ${usuario}.`, 'Tu sesión ha sido finalizada. ', 'success');
      this.router.navigate(['/home']);
    } catch (error) {
      console.log(error);
    }
  }


  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
