import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './shared/modal/modal.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AutenticacaoInterceptor } from './core/interceptors/autenticacao.interceptor';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './core/material/material.module';
import { HomeModule } from './home/home.module';
import { ErroModule } from './core/erro/erro.module';
import { ErrosInterceptor } from './core/erro/erros.interceptor';

registerLocaleData(localePt, 'pt'); // Registre o idioma desejado

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ErroModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }, // Use o idioma desejado (pt-BR),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrosInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
