import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBuscaService } from 'src/app/busca/form-busca.service';
import { FormValidations } from '../form-validation';

@Component({
  selector: 'app-dados-de-acesso',
  templateUrl: './dados-de-acesso.component.html',
  styleUrls: ['./dados-de-acesso.component.css']
})
export class DadosDeAcessoComponent {

  constructor(private formBuilder: FormBuilder, public formBuscaService: FormBuscaService){}

  @Input() marginTopNegativa = false;
  
  @Input() form: FormGroup = this.formBuilder.group({
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
    confirma_senha: [null, [Validators.required,FormValidations.equalTo('senha')]]
  });

  aplicarMargenTopNegativa() {
    if (this.marginTopNegativa === true) {
      return 'marginTopNegativa';
    }
    return '';
  }

}
