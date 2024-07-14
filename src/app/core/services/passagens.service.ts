import { Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DadosBusca, Passagem, Resultado } from '../types/types';
import { Companhias } from 'src/app/shared/form-busca/filtros-complementares/companhias/companhias.component';

@Injectable({
  providedIn: 'root'
})
export class PassagensService {

  precoMin = 0;
  precoMax = 0;
  apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  getPassagens(search: DadosBusca): Observable<Resultado> {
    console.log('get passagens foi chamado');
    const params = this.converterParametrosParaString(search);
    console.log(params); 
    const obs = this.httpClient.get<Resultado>(this.apiUrl + '/passagem/search?'+params);
    obs.pipe(take(1)).subscribe(res => {
      this.precoMin = res.precoMin;
      this.precoMax = res.precoMax;
    });
    return obs;
  }

  converterParametrosParaString(parametros: DadosBusca){
    const query = Object.entries(parametros).map(
      ([key, value]) => {
        if (!value) {
          return '';
        }
        return `${key}=${value}`;
      }
    ).join('&');
    return query;
  }

  getCompanhias(): Observable< Companhias[]> {
    return this.httpClient.get<Companhias[]>(this.apiUrl + '/companhias');
  }

  getTodasAsPassagensExistentes(): void {
    let todasAsPassagens: Passagem[];
    const chamada = this.httpClient.get<Resultado>(this.apiUrl + '/passagem/search?&pagina=1&porPagina=200');
    chamada.subscribe( (res) => {
      todasAsPassagens = res.resultado;
      console.log(todasAsPassagens);
    } );
  }


}
