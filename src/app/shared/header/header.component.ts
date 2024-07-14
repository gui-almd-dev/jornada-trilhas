import { Router } from '@angular/router';
import { UserService } from '../../autenticacao/services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService: UserService, private router: Router){}

  user$ = this.userService.retornaUser();

  logout(){
    this.userService.logout();
    this.router.navigate(['auth/login ']);
  }

  irParaPaginaInicial(){
    this.router.navigate(['/']);
  }
  irParaPaginaCadastro(){
    this.router.navigate(['/auth/cadastro']);
  }
  irParaPaginaPerfil(){
    this.router.navigate(['/auth/perfil']);
  }
  irParaPaginaLogin(){
    this.router.navigate(['/auth/login']);
  }
}
