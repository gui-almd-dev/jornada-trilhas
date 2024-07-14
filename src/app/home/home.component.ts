import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosBusca, Depoimentos, Promocao } from 'src/app/core/types/types';
import { PromocaoService } from './promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  promocoes!: Promocao[];
  depoimentos: Depoimentos[] = [];

  constructor(
    private servicoPromocao: PromocaoService,
    private router: Router
  ) {

  }

  ngOnInit(){
    this.servicoPromocao.listar().subscribe(resposta => 
      {
        this.promocoes = resposta;
        console.log(this.promocoes);
      }
    );
    this.servicoPromocao.listarDepoimentos().subscribe(dados => this.depoimentos = dados);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navegarParaBusca(event: DadosBusca){
    this.router.navigate(['busca']);
  }

}

