import { NgModule } from '@angular/core';
import { MaterialModule } from '../core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CardBuscaComponent } from './card-busca/card-busca.component';
import { CardDepoimentosComponent } from './card-depoimentos/card-depoimentos.component';
import { FiltrosBuscaComponent } from './filtros-busca/filtros-busca.component';
import { DropdownUfComponent } from './form-busca/dropdown-uf/dropdown-uf.component';
import { CompanhiasComponent } from './form-busca/filtros-complementares/companhias/companhias.component';
import { FiltrosComplementaresComponent } from './form-busca/filtros-complementares/filtros-complementares.component';
import { LabelComponent } from './form-busca/filtros-complementares/label/label.component';
import { ParadasComponent } from './form-busca/filtros-complementares/paradas/paradas.component';
import { PrecosComponent } from './form-busca/filtros-complementares/precos/precos.component';
import { FormBuscaComponent } from './form-busca/form-busca.component';
import { PassagensDestaquesComponent } from './passagens-destaques/passagens-destaques.component';
import { SeletorPassageiroComponent } from './seletor-passageiro/seletor-passageiro.component';

@NgModule({

  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent,
    CardDepoimentosComponent,
    CardBuscaComponent,
    FormBuscaComponent,
    SeletorPassageiroComponent,
    FiltrosBuscaComponent,
    DropdownUfComponent,
    CompanhiasComponent,
    LabelComponent,
    ParadasComponent,
    PrecosComponent,
    FiltrosComplementaresComponent,
    PassagensDestaquesComponent,
  ],
  imports:[
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent,
    CardDepoimentosComponent,
    CardBuscaComponent,
    FormBuscaComponent,
    SeletorPassageiroComponent,
    FiltrosBuscaComponent,
    DropdownUfComponent,
    CompanhiasComponent,
    LabelComponent,
    ParadasComponent,
    PrecosComponent,
    FiltrosComplementaresComponent,
    PassagensDestaquesComponent,
  ]
})
export class SharedModule {}
