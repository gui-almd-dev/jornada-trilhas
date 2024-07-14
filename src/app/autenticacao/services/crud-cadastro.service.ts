import { Cadastro } from '../../core/types/types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudCadastroService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  setCadastro(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(`${this.apiUrl}/auth/cadastro`, cadastro);
  }

  buscarCadastro(): Observable<Cadastro> {
    return this.http.get<Cadastro>(`${this.apiUrl}/auth/perfil`);
  }

  editarCadastro(pessoaUsuaria: Cadastro): Observable<Cadastro> {
    return this.http.patch<Cadastro>(`${this.apiUrl}/auth/perfil`, pessoaUsuaria);
  }


}
