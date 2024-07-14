import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuscaService } from 'src/app/busca/form-busca.service';
import { PassagensService } from 'src/app/core/services/passagens.service';

export interface Companhias {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-companhias',
  templateUrl: './companhias.component.html',
  styleUrls: ['./companhias.component.scss'],
})
export class CompanhiasComponent implements OnInit {
  opcoesSelecionadas: Companhias[]  = [];

  opcoes: Companhias[] = [
    {
      id: 0,
      nome: 'Gol',
    },
    {
      id: 1,
      nome: 'Oi',
    },
    {
      id: 2,
      nome: 'Azul',
    },
    {
      id: 3,
      nome: 'Latan',
    },
  ];

  compnahiasIdControl: FormControl<number[] | null>;

  constructor(
    private formBuscaService: FormBuscaService,
    private passagensService: PassagensService
  ) {
    this.compnahiasIdControl = this.formBuscaService.obterControle<number[] | null>('companhiasId');
    this.passagensService.getCompanhias().subscribe((companhias) => {
      this.opcoes = companhias;
    });
  }

  ngOnInit(): void {
    this.compnahiasIdControl.valueChanges.subscribe((value) => {
      if (!value) {
        this.opcoesSelecionadas = [];
      }
    });
  }

  habilitarDesabilitarCompanhia(companhia: Companhias, checked: boolean): void {
    if (!checked) {
      this.opcoesSelecionadas = this.opcoesSelecionadas.filter(comp => comp != companhia);
    } else {
      this.opcoesSelecionadas.push(companhia);
    }
    this.formBuscaService.formBusca.patchValue({
      companhiasId: this.opcoesSelecionadas.map(comp => Number(comp.id))
    });
  }
  companhiaSelecionada(companhia: Companhias): boolean {

    return this.opcoesSelecionadas.includes(companhia);
  }
}

