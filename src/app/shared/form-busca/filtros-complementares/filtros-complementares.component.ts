import { FormBuscaService } from 'src/app/busca/form-busca.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { PassagensService } from 'src/app/core/services/passagens.service';

@Component({
  selector: 'app-filtros-complementares',
  templateUrl: './filtros-complementares.component.html',
  styleUrls: ['./filtros-complementares.component.scss']
})
export class FiltrosComplementaresComponent {
  
  @Output() realizarBusca = new EventEmitter();
  constructor(public formBuscaService: FormBuscaService,
    private passagemService: PassagensService
  ){}
  

  busca(){
    if(!this.formBuscaService.formEstaValido){
      this.formBuscaService.formBusca.markAllAsTouched();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      return;
    }
    this.realizarBusca.emit(this.formBuscaService.obterDadosDeBusca());
  }

  limparFiltro(){
    this.formBuscaService.formBusca.patchValue({
      conexoes: null,
      companhiasId: null,
      precoMin: this.passagemService.precoMin,
      precoMax: this.passagemService.precoMax,

    });
  }

}
