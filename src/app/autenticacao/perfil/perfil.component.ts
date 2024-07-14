import { UserService } from '../services/user.service';
import { FormularioService } from '../../core/services/formulario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { Cadastro } from 'src/app/core/types/types';
import { TokenService } from 'src/app/autenticacao/services/token.service';
import { CrudCadastroService } from '../services/crud-cadastro.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  cadastroForm!: FormGroup;

  constructor(
    private formularioService: FormularioService,
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cadastroService: CadastroService,
    private crudCadastroService: CrudCadastroService,
    private userService: UserService
  ) {
    this.cadastroForm = this.cadastroService.cadastroForm;
  }

  
  token = '';
  nome = '';
  cadastro!: Cadastro;
  form!: FormGroup | null;

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.crudCadastroService.buscarCadastro().subscribe(cadastro => {
      console.log(cadastro);
      this.cadastro = cadastro;
      this.nome = this.cadastro.nome;
      this.carregarFormulario();
    });
  }


  deslogar() {
      this.userService.logout();
      this.router.navigate(['auth/login']);
      }
  
  
  carregarFormulario(){
    this.form = this.formularioService.getCadastro();
    this.cadastroForm.patchValue({
      nome: this.cadastro.nome,
      dataNascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      telefone: this.cadastro.telefone,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      genero: this.cadastro.genero,
      cidade: this.cadastro.cidade,
      estado: this.cadastro.estado
    });
  }

  atualizar(){
    const dadosAtualizados = {
        nome: this.cadastroForm.value.nome,
        nascimento: this.cadastroForm.value.dataNascimento,
        cpf: this.cadastroForm.value.cpf,
        telefone: this.cadastroForm.value.telefone,
        email: this.cadastroForm.value.email,
        senha: this.cadastroForm.value.senha,
        genero: this.cadastroForm.value.genero,
        cidade: this.cadastroForm.value.cidade,
        estado: this.cadastroForm.value.estado
      };
      this.crudCadastroService.editarCadastro(dadosAtualizados).subscribe( {
        next: () => {
          alert('Cadastro autalizado com sucesso');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log('Erro ao atualizar cadastro', err);
        }
      } );
    }
}
