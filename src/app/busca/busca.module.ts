import { NgModule } from '@angular/core';
import { BuscaComponent } from "./busca.component";
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from "../core/material/material.module";
import { AutenticacaoModule } from "../autenticacao/autenticacao.module";
import { CommonModule } from '@angular/common';
import { BuscaRoutingModule } from './busca-routing.module';

@NgModule({
declarations:[
    BuscaComponent
],
imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AutenticacaoModule,
    BuscaRoutingModule
],
exports:[
    BuscaComponent
]
})
export class BuscaModule {}