import { Component, Input } from '@angular/core';
import { Depoimentos } from 'src/app/core/types/types';

@Component({
  selector: 'app-card-depoimentos',
  templateUrl: './card-depoimentos.component.html',
  styleUrls: ['./card-depoimentos.component.css']
})
export class CardDepoimentosComponent {

  @Input() depoimentos: Depoimentos | undefined;

}
