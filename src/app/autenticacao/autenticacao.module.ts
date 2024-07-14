import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MaterialModule } from '../core/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DadosDeAcessoComponent } from '../shared/dados-de-acesso/dados-de-acesso.component';
import { DadosPessoaisComponent } from '../shared/dados-pessoais/dados-pessoais.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutenticacaoRoutingModule } from './autenticacao-routing.module';



@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    PerfilComponent,
    DadosDeAcessoComponent,
    DadosPessoaisComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    AutenticacaoRoutingModule
  ],
  exports: [
    CadastroComponent,
    LoginComponent,
    PerfilComponent]
})
export class AutenticacaoModule { }
