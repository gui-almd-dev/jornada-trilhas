import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Depoimentos, Estado, Promocao } from 'src/app/core/types/types';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<Estado[]>;

  constructor(
    private http: HttpClient
  ) { }

  listar (): Observable<Promocao[]> {
    return this.http.get<Promocao[]>(`${this.apiUrl}/promocoes`);
  }

  listarEstados(): Observable <Estado[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(
        shareReplay(1)
      );
    }
    return this.cache$;
  }

  private requestEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(`${this.apiUrl}/estados`);
  }

  listarDepoimentos(): Observable<Depoimentos[]> {
    return this.http.get<Depoimentos[]>(`${this.apiUrl}/depoimentos`);
  }

}

