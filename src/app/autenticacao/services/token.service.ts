import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  salvarToken(token: string){
    console.log(token);
    return localStorage.setItem(KEY, token);
  }

  excluirToken(){
    localStorage.removeItem(KEY);
  }

  retornarToken() {
    console.log(localStorage.getItem(KEY));
    return localStorage.getItem(KEY) ?? '';
  }

  possuiToken() {
    return !!this.retornarToken();
  }


}
