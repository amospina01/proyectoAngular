import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  constructor(private loginService: LoginService,private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  autenticar(){
    console.log('autenticado')
    this.loginService.autenticarService('Angie')
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
