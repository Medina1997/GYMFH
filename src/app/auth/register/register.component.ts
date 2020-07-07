import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {
    registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl('')
  });

  constructor(private authSvc: AuthService, private router: Router) { }
  contra: boolean = false;
  ngOnInit(): void {
  }

  async onRegister() {
    const {email, password, password2} = this.registerForm.value;
    if ( password2 === password ) {
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
        // redirect
        swal.fire('Usuario Registrado exitosamente.', 'Ahora navega en nuestro sitio y conocenos.', 'success');
        this.router.navigate(['/home']);
      }
    } catch (error) {console.log(error); }
  } else {
    swal.fire('¡Oh no! Las contraseñas son diferentes', 'Asegurese de que la contraseña sea la misma en los 2 campos.', 'error');
    this.contra = true;
   // alert('error');
  }
  }
}
