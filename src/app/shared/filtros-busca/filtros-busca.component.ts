import { Component, Input } from '@angular/core';
import { Orcamento, Passagem } from 'src/app/core/types/types';

@Component({
  selector: 'app-filtros-busca',
  templateUrl: './filtros-busca.component.html',
  styleUrls: ['./filtros-busca.component.css']
})
export class FiltrosBuscaComponent {
  
  @Input() passagem: Passagem = {
    companhia : {id: '4', nome: 'Latam'},
    conexoes : 2,
    dataIda : '27/12', 
    dataVolta : '30/12',
    destino : {id: '19', nome: 'Roraima', sigla: 'RR'},
    id : '2', 
    orcamento : [{ 
    descricao : "1 adulto, executiva",
    preco : 2800,
    taxaEmbarque : 175,  
    total : 2975
    }],
    origem : {id: '11', nome: 'Paraíba', sigla: 'PB'},
    precoIda : 2800,
    precoVolta : 2700,
    taxaEmbarque : 175, 
    tempoVoo : 6,
    tipo : "Executiva",
    total : 2975
  };
  
  orcamento: Orcamento = this.passagem.orcamento[0];
  
  
}
