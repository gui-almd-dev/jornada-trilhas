import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { DadosBusca } from '../core/types/types';


@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {

  formBusca: FormGroup;
  
  constructor(public dialog: MatDialog) { 
    const somenteIda = new FormControl(false, [Validators.required]);
    const dataVolta = new FormControl(null, [Validators.required]);

    this.formBusca = new FormGroup ({
      origem: new FormControl(null, [Validators.required]),
      destino: new FormControl(null, [Validators.required]),
      tipo: new FormControl("Econômica"),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
      dataIda: new FormControl(null, [Validators.required]),
      somenteIda,
      dataVolta,
      conexoes: new FormControl(null),
      companhiasId: new FormControl(null),
      precoMin: new FormControl(null),
      precoMax: new FormControl(null),
    });

    somenteIda.valueChanges.subscribe(somenteIda => {
      if(somenteIda){
        dataVolta.disable();
        dataVolta.setErrors(null); // Limpa os erros do campo
      }else{
        dataVolta.enable();
        dataVolta.setValidators([Validators.required]);
        dataVolta.updateValueAndValidity();
      }
    });
  }

  getDescricaoPassageiros(): string {
    let descricao = '';
    const adultos = this.formBusca.get('adultos')?.value;
    const criancas = this.formBusca.get('criancas')?.value;
    const bebes = this.formBusca.get('bebes')?.value;

    if (adultos && adultos === 1) {
      descricao = `${adultos} adulto`;
    }
    if (adultos && adultos > 1) {
      descricao = `${adultos} adultos`;
    }

    if(adultos && adultos > 0 ){
      descricao = descricao + ',';
    }

    if ( criancas && criancas === 1) {
      descricao = descricao + ` 1 crianca`;
    }
    if (criancas && criancas > 1) {
      descricao = descricao + ` ${criancas} criancas`;

      if(criancas && criancas > 0 ){
        descricao = descricao + ',';
      }

    }
    if (bebes && bebes === 1) {
      descricao = descricao + ` 1 bebê`;
    }
    if (bebes && bebes > 1) {
      descricao = descricao + ` ${bebes} bebês`;
    }

    return descricao;

  }

  obterControle<T>(nome: string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl<T>;
  }

  obterDadosDeBusca(): DadosBusca {
    const dataIdaControl = this.obterControle<Date>('dataIda').value;
    const dataIda = dataIdaControl ? dataIdaControl.toISOString() : null;

    const dadosBusca: DadosBusca = {
      pagina: 1,
      porPagina: 50,
      somenteIda: this.obterControle<boolean>('somenteIda').value,
      origemId: this.obterControle<number>('origem').value.id,
      destinoId: this.obterControle<number>('destino').value.id,
      tipo: this.obterControle<string>('tipo').value,
      passageirosAdultos: this.obterControle<number>('adultos').value,
      passageirosCriancas: this.obterControle<number>('criancas').value,
      passageirosBebes: this.obterControle<number>('bebes').value,
      dataIda, 
      
      
    };
    const dataVoltaControl = this.obterControle<Date>('dataVolta').value;
    if (dataVoltaControl) {
      dadosBusca.dataVolta = dataVoltaControl;
    }

    const conexoesControl = this.obterControle<number>('conexoes');
    if(conexoesControl.value){
      dadosBusca.conexoes = conexoesControl.value;
    }

    const conpanhiasIdControl = this.obterControle<number[]>('companhiasId');
    if(conpanhiasIdControl.value){
      dadosBusca.companhiasId = conpanhiasIdControl.value;
    }

    const precoMinControl = this.obterControle<number>('precoMin');
    if(precoMinControl){
      dadosBusca.precoMin = precoMinControl.value;
    }

    const precoMaxControl = this.obterControle<number>('precoMax');
    if (precoMaxControl) {
      dadosBusca.precoMax = precoMaxControl.value;
    }

    return dadosBusca;
  }

  openDialog() {
    this.dialog.open(ModalComponent);
  }

  alterarTipo(evento: MatChipSelectionChange, tipo: string){
    if (evento.selected) {
      this.formBusca.patchValue({
        tipo: tipo 
      });
      console.log ('Tipo de passagem alterado para: ',tipo);
    }
  }

  get formEstaValido(){
    return this.formBusca.valid;
  }

}
