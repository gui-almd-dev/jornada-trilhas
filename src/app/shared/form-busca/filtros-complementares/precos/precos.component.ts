import { FormBuscaService } from 'src/app/busca/form-busca.service';
import { PassagensService } from './../../../../core/services/passagens.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-precos',
  templateUrl: './precos.component.html',
  styleUrls: ['./precos.component.scss'],
})
export class PrecosComponent {
  precoMin: FormControl<number>;
  precoMax: FormControl<number>;

  constructor(
    public passagensService: PassagensService,
    private formbusca: FormBuscaService
  ) {
    this.precoMin = this.formbusca.obterControle<number>('precoMin');
    this.precoMax = this.formbusca.obterControle<number>('precoMax');
}
}