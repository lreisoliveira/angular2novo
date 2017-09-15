import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'tabela-campeonato',
    templateUrl: './brasileiro.component.html',
})

export class Campeonato {

  public campeonato: any = [];
  public slug: String;
  public anoCampeonato: String;
  public configCampeonato: any = [];

  public criarCampeonato(campeonato){
    this.campeonato    = campeonato;
    this.anoCampeonato = this.slug.replace(/[^\d]+/g,'');
    if (this.anoCampeonato.length > 4) {
      this.anoCampeonato = this.anoCampeonato.substr(0,4) + '-' + this.anoCampeonato.substr(4,4);
    }
    this.configCampeonato = this.configurarCampeonato(campeonato,this.anoCampeonato)
    console.log('configCampeonato', this.configCampeonato);
    //this.montarTabela(this.configCampeonato);
    //this.configCampeonato = this.slug;
  }

  public configurarCampeonato(campeonato, anoCampeonato){
    var config       = [];
    config['ano']    = anoCampeonato;
    config['modelo'] = campeonato.tipo;
    if (campeonato.tipo != 'pontos_corridos'){
     config['modelo'] = this.removerCaracteres(campeonato.slug);
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