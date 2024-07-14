import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';
import { Cadastro } from '../../core/types/types';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<Cadastro | null>(null);

  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificarJWT();
    }
   }

   decodificarJWT(){
    const token = this.tokenService.retornarToken();
    const user = jwtDecode(token) as Cadastro;
    this.userSubject.next(user);
   }

   retornaUser (){
    return this.userSubject.asObservable();
   }

   salvarToken(token: string){
      this.tokenService.salvarToken(token);
      this.decodificarJWT();
   }

   logout(){
    this.tokenService.excluirToken();
    this.userSubject.next(null);
   }

   estaLoagado(){
    return this.tokenService.possuiToken();
   }

}
