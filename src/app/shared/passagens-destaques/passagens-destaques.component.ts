import { Component, Input } from '@angular/core';
import { Destaques } from 'src/app/core/types/types';

@Component({
  selector: 'app-passagens-destaques',
  templateUrl: './passagens-destaques.component.html',
  styleUrls: ['./passagens-destaques.component.css']
})
export class PassagensDestaquesComponent {

  @Input() destaques!: Destaques;
  @Input() exibirSection!: boolean;


}