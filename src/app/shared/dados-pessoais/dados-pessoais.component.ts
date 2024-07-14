import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormBuscaService } from 'src/app/busca/form-busca.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent {
  constructor(private formBuilder: FormBuilder, public formBuscaService: FormBuscaService){}

  @Input() form: FormGroup = this.formBuilder.group({
    nome: [null, [Validators.required]],
    dataNascimento: [null, [Validators.required]],
    genero: [null, [Validators.required]],
    cpf: [null, [Validators.required]],
    telefone: [null, [Validators.required]],
    cidade: [null, [Validators.required]],
    estado: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    senha: [null, [Validators.required]],
  });

  
  obterControle(nome: string): FormControl {
    const control = this.form.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

}
