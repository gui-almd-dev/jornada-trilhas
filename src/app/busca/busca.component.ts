import {
  DadosBusca,
  Destaques,
  Passagem,
  Resultado,
} from 'src/app/core/types/types';
import { PassagensService } from '../core/services/passagens.service';
import { Component, OnInit } from '@angular/core';
import { FormBuscaService } from 'src/app/busca/form-busca.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css'],
})
export class BuscaComponent implements OnInit {
  passagens: Passagem[] = [];
  destaques!: Destaques;
  exibirDestaques!: boolean;

  constructor(
    private passagensService: PassagensService,
    private formBuscaService: FormBuscaService
  ) {}

  ngOnInit(): void {
    this.passagensService.getTodasAsPassagensExistentes();
    const buscaPadrao: DadosBusca = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 200,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    };

    const busca = this.formBuscaService.formEstaValido
      ? this.formBuscaService.obterDadosDeBusca()
      : buscaPadrao;
    this.passagensService
      .getPassagens(busca)
      .pipe(take(1))
      .subscribe({
        next: (resp: Resultado) => {
          this.passagens = resp.resultado;
          console.log(this.passagens);
          this.definirPassagensDestaques();
          this.formBuscaService.formBusca.patchValue({
            precoMin: resp.precoMin,
            precoMax: resp.precoMax,
          });
        },
        error: (err) => {
          console.log('erro ao fazer requisição', err);
        },
      });
  }

  busca(ev: DadosBusca) {
    this.passagensService.getPassagens(ev).subscribe({
      next: (resp: Resultado) => {
        // console.log (resp)
        this.passagens = resp.resultado;
        this.definirPassagensDestaques();
        console.log(this.passagens);
      },
      error: (err) => {
        console.log('erro ao fazer requisição', err);
      },
    });
  }

  definirPassagensDestaques() {
    if (this.passagens.length !== 0) {
      console.log('definir passagens foi chamado');
      const passagensDestaque = {
        menorTempo: this.passagens.sort((a, b) => {
          return a.tempoVoo - b.tempoVoo;
        })[0],
        menorValor: this.passagens.sort((a, b) => {
          return (
            a.precoIda +
            a.precoVolta +
            a.taxaEmbarque -
            (b.precoIda + b.precoVolta + b.taxaEmbarque)
          );
        })[0],
        recomendada: this.passagens.sort((a, b) => {
          return a.tempoVoo - b.tempoVoo;
        })[0],
      };
      this.destaques = passagensDestaque;
      this.exibirDestaques = true;
      console.log(this.destaques.menorTempo);
      console.log(this.destaques.recomendada);
    }
    else{
      this.exibirDestaques = false;
    }
  }
}
