import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './routes';

import { TabelaComponent } from "./index/tabela.component";

import { HttpModule } from '@angular/http';
import { ApiService } from "./service/api.service";
import { ApiConfig } from "./config/api.config";
import { Campeonato } from "./campeonato/tabela.campeonato";
import { TemplateComponent } from "./campeonato/template.component";

@NgModule({
  declarations: [
    TabelaComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule
  ],
  providers: [ApiService, ApiConfig, Campeonato],
  bootstrap: [TabelaComponent]
})
export class AppModule { }
