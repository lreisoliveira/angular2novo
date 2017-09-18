import { Component } from '@angular/core';
import { Legenda } from "./legenda";

export class Campeonato extends Legenda {

  public campeonato: any = [];
  public slug: String;
  public anoCampeonato: String;
  public configCampeonato: any = [];
  public legenda: any;


 public getJogos(rodadasFaseGrupos, grupos)
 {

  var jogos        = new Object();
  var nome_grupo   = grupos[0]['nome'].replace('GRUPO', '').trim();
  var lista_grupos: any = [];
  var numeroRodada = '';

  for (var i in rodadasFaseGrupos) {
    lista_grupos = rodadasFaseGrupos[i];
      if (typeof rodadasFaseGrupos[i].grupos != 'undefined') {
        for (var ii in lista_grupos.grupos) {
          if (typeof lista_grupos.grupos[ii].partidas == 'undefined') {
            continue;
          }
          if (lista_grupos.grupos[ii].partidas.length > 0) {
            nome_grupo = lista_grupos.grupos[ii].nome_grupo;

            if (typeof jogos[nome_grupo] == "undefined") {
              jogos[nome_grupo] = new Object();
            }
            numeroRodada = lista_grupos.numero_rodada;
            if (typeof jogos[nome_grupo][numeroRodada] == 'undefined') {
              jogos[nome_grupo][numeroRodada] = new Object();
              jogos[nome_grupo][numeroRodada] = lista_grupos.grupos[ii].partidas;
            }
          }
        }
      }
    }
    return jogos;
 }

  public criarCampeonato(campeonato)
  {
    this.campeonato    = campeonato;
    this.anoCampeonato = this.slug.replace(/[^\d]+/g,'');
    if (this.anoCampeonato.length > 4) {
      this.anoCampeonato = this.anoCampeonato.substr(0,4) + '-' + this.anoCampeonato.substr(4,4);
    }
    this.configCampeonato = this.criarConfigCampeonato(campeonato,this.anoCampeonato)
    //console.log('configCampeonato', this.configCampeonato.campeonato.nome);
    //console.log('configCampeonato campeonato', campeonato);
    //this.montarTabela(this.configCampeonato);
    //this.configCampeonato = this.slug;
  }

  public criarConfigCampeonato(campeonato, anoCampeonato)
  {
    var config                 = [];
    config['ano']              = anoCampeonato;
    config['modelo']           = campeonato.tipo;
    config['json']             = campeonato;
    config['mostrarNomeGrupo'] = true;
    config['legenda']          = this.getLegenda(campeonato.slug);
    config['jogos']       = this.getJogos(campeonato.rodadas_grupos, campeonato.grupos);
    console.log('jogos', config['jogos']['A'])

    if (campeonato.tipo != 'pontos_corridos'){
      config['legenda']          = this.getLegenda(campeonato.slug);
      config['modelo']           = this.removerCaracteres(campeonato.slug);
      config['mostrarNomeGrupo'] = false;
    }
    return config;
  }

  public montarTabela(config){
    //this.valor = 'aeeesadsadsaeeeee';
  }

  /**
   * Remove números e o characteres '-' do final da string
   * Exemplo: uefa-champions-league-2017-2018 é convertido para uefa-champions-league
   * */
  private removerCaracteres(string){
      return string.replace(/[\d]+/g,'').replace(/-*$/, '')
  }

}