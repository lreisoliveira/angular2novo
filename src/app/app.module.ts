import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './routes';
import { ApiConfig } from "./config/api.config";

import { Campeonato } from "./lib/campeonato";
import { Legenda } from "./lib/legenda";

import { ApiService } from "./service/api.service";

import { IndexComponent } from "./index/index.component";
import { TemplateComponent } from "./campeonato/template.component";

import { PontosCorridosComponent } from "./campeonato/modelos/pontos-corridos.component";

import { ClassificacaoComponent } from "./campeonato/modulos/classificacao/classificacao.component";
import { RodadasComponent } from "./campeonato/modulos/rodadas/rodadas.component";

import { ReduzirNomeGrupoPipe } from "./pipes/reduzir-nome-grupo";
import { FiltrarEscudoPipe } from "./pipes/filtrar-escudo";
import { LinkPaginaEquipePipe } from "./pipes/link-pagina-equipe";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent,
    TemplateComponent,
    PontosCorridosComponent,
    ClassificacaoComponent,
    RodadasComponent,
    ReduzirNomeGrupoPipe,
    FiltrarEscudoPipe,
    LinkPaginaEquipePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, ApiConfig, Campeonato, Legenda],
  bootstrap: [IndexComponent]
})
export class AppModule { }
