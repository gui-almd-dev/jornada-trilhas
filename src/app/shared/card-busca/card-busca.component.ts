import { Component, Input } from '@angular/core';
import { Promocao } from 'src/app/core/types/types';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.css']
})
export class CardBuscaComponent {

 @Input() promo!: Promocao;
}
