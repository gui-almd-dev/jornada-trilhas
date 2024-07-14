import { TokenService } from '../services/token.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from 'src/app/autenticacao/services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const senha = this.loginForm.value.senha;

      this.authService.autenticar(email, senha).subscribe({
        next: (value) => {
          console.log('Login realizado com sucesso', value);
          if(value.body){
            this.tokenService.salvarToken(value.body.access_token);
          }
          this.router.navigateByUrl('/perfil');
          this.loginForm.reset();
        },
        error: (err) => {
          console.log('Erro no login', err);
        },
      });
    }
  }
  
  irParaPaginaCadastro(){
    this.router.navigate(['/auth/cadastro']);
  }
}
