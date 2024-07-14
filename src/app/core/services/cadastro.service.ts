import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidations } from 'src/app/shared/form-validation';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  cadastroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) 
  { this.cadastroForm = this.formBuilder.group({
    nome: [null, [Validators.required]],
    dataNascimento: [null, [Validators.required]],
    genero: [null, [Validators.required]],
    cpf: [null, [Validators.required]],
    telefone: [null, [Validators.required]],
    cidade: [null, [Validators.required]],
    estado: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    confirma_email: [null, [Validators.required, Validators.email, FormValidations.equalTo('email') ]],
    senha: [null, [Validators.required, Validators.minLength(3)]],
    confirma_senha: [null, [Validators.required,FormValidations.equalTo('senha')]], });}

  
}
