import { Component, Input } from '@angular/core';

@Component({
    selector: 'tabela-modulo-rodadas',
    templateUrl: './rodadas.component.html',
})

export class RodadasComponent {

  @Input()
  configCampeonato: any = [];

  @Input()
  jogos: any = [];

  @Input()
  nomeReduzidoDoGrupo: String;

  jsonParaArray(obj) {
    return Object.keys(obj).map((key)=>{ return obj[key]});
 }

  rodadas       = [];
  auxNomeGrupo  = '';
  contadorGrupo = 0;
  indiceGrupo   = [];

  constructor(){
    setTimeout(()=>{
      this.montarRodada(23);
    },2000);
  }

  montarRodada(rodadaAtual){

    var nomeGrupo = '';
    var resultado: any = []
        resultado = document.querySelectorAll("[class^=rodadas_grupo_]");

    resultado.forEach((elemento) => {
      nomeGrupo = elemento.className.split("_")[2];

      if(this.auxNomeGrupo != nomeGrupo) {
          this.auxNomeGrupo = nomeGrupo;
          this.contadorGrupo  = 0;
      }

      if (typeof this.rodadas[nomeGrupo] == 'undefined') {
          this.rodadas[nomeGrupo]     = [];
          this.indiceGrupo[nomeGrupo] = 0;
      }

      if (typeof nomeGrupo != 'undefined') {
          this.rodadas[nomeGrupo][this.contadorGrupo] = elemento;
      }
      this.contadorGrupo     = this.contadorGrupo + 1;
      elemento.style.display = 'none';
    })

    if (rodadaAtual == 1) {
        rodadaAtual = 0;
    } else {
        rodadaAtual = rodadaAtual-1;
    }

    for (var grupo in this.rodadas) {
        if (grupo != 'remove') {
            this.indiceGrupo[grupo] = rodadaAtual;
            this.rodadas[grupo][rodadaAtual].style.display = 'block';
        }
    }
  }

  irParaProximaRodada(grupo) {

    var resultado: any = []
        resultado = document.querySelectorAll("[class=rodadas_grupo_" + grupo + "]");

    resultado.forEach((elemento) => {
      elemento.style.display = 'none';
    })

    this.indiceGrupo[grupo] = this.indiceGrupo[grupo] + 1;
    var proximo = this.rodadas[grupo][this.indiceGrupo[grupo]];
    if (proximo instanceof Object){
        proximo.style.display = 'block';
    } else {
        this.indiceGrupo[grupo] = 0;
        this.rodadas[grupo][this.indiceGrupo[grupo]].style.display = 'block';
    }
  };

  irParaRodadaAnterior(grupo) {

    var resultado: any = []
        resultado = document.querySelectorAll("[class=rodadas_grupo_" + grupo + "]");

    resultado.forEach((elemento) => {
      elemento.style.display = 'none';
    })

      this.indiceGrupo[grupo] = this.indiceGrupo[grupo] - 1;
      var anterior = this.rodadas[grupo][this.indiceGrupo[grupo]];
      if (anterior instanceof Object) {
          anterior.style.display = 'block';
      } else {
          this.indiceGrupo[grupo] = (this.rodadas[grupo].length - 1);
          this.rodadas[grupo][this.indiceGrupo[grupo]].style.display = 'block';
      }
  };

  moverProximaRodada(grupo) {
      this.irParaProximaRodada(grupo);
  };

  moverRodadaAnterior(grupo) {
      this.irParaRodadaAnterior(grupo);
  };

}


