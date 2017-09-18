import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './routes';
import { ApiConfig } from "./config/api.config";

import { Campeonato } from "./lib/campeonato";
import { ApiService } from "./service/api.service";

import { IndexComponent } from "./index/index.component";
import { TemplateComponent } from "./campeonato/template.component";

import { PontosCorridosComponent } from "./campeonato/modelos/pontos-corridos.component";

import { ClassificacaoComponent } from "./campeonato/modulos/classificacao/classificacao.component";
import { RodadasComponent } from "./campeonato/modulos/rodadas/rodadas.component";

@NgModule({
  declarations: [
    IndexComponent,
    TemplateComponent,
    PontosCorridosComponent,
    ClassificacaoComponent,
    RodadasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule
  ],
  providers: [ApiService, ApiConfig, Campeonato],
  bootstrap: [IndexComponent]
})
export class AppModule { }
