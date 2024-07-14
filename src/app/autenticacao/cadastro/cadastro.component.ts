import { CrudCadastroService } from '../services/crud-cadastro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup;
  aceiteTermos = false;

  constructor(private crudCadastroService: CrudCadastroService, private formBuilder: FormBuilder, private router: Router, private cadastroService: CadastroService )
  {this.cadastroForm = cadastroService.cadastroForm;}

  ngOnInit(): void {
    console.log(this.cadastroForm);
  } 

  cadastrar(){
    console.log(this.cadastroForm);
    const cadastro = {
      nome : this.cadastroForm.get('nome')?.value,
      nascimento: `${this.cadastroForm.get('dataNascimento')?.value}`,
      cpf: this.cadastroForm.get('cpf')?.value,
      telefone: this.cadastroForm.get('telefone')?.value,
      email: this.cadastroForm.get('email')?.value,
      senha: this.cadastroForm.get('senha')?.value,
      genero: this.cadastroForm.get('genero')?.value,
      cidade: this.cadastroForm.get('cidade')?.value,
      estado: this.cadastroForm.get('estado')?.value,
    };
    console.log(cadastro);
    this.crudCadastroService.setCadastro(cadastro).subscribe({
      next: (value) => {
        console.log ('Cadastro realizado com sucesso', value);
        this.router.navigate(['auth/login']);
      },
      error: (err) => {
        console.log ('Cadastro não realizado', err);
      }
    } );
  }

  dadosVerificados(){
    const email = this.cadastroForm.get('email')?.value;
    const confirmaEmail = this.cadastroForm.get('confirma_email')?.value;
    const senha = this.cadastroForm.get('senha')?.value;
    const confirmaSenha = this.cadastroForm.get('confirma_senha')?.value;
    if(email === confirmaEmail && senha === confirmaSenha){
      return true;
  }
  return false;
  }

  verificadados(){
    console.log(this.dadosVerificados());
  }

  exibirForm(){
    console.log(this.cadastroForm);
  }

  aceitarTermos(event: boolean){
    this.aceiteTermos = event;
  }
}
