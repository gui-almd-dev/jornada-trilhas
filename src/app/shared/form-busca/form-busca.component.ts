import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from 'src/app/busca/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.css']
})
export class FormBuscaComponent {
  @Output() realizarBusca = new EventEmitter();

  constructor(public formBuscaService: FormBuscaService) {}

  buscar(){
    if (this.formBuscaService.formEstaValido) {
      const formBuscaValue = this.formBuscaService.obterDadosDeBusca();
      console.log(this.formBuscaService.formBusca.value);
      this.realizarBusca.emit(formBuscaValue);
    }
    else {
      alert('Formulário precisa ser preenchido');
    }
  }

  inverterOrigemDestino(){
    const armazenaValorOrigem = this.formBuscaService.formBusca.get('origem')?.value;
    const armazenaValorDestino = this.formBuscaService.formBusca.get('destino')?.value;
    
    this.formBuscaService.formBusca.patchValue({origem: armazenaValorDestino});
    this.formBuscaService.formBusca.patchValue({destino: armazenaValorOrigem});
  }
}
