import { Component, Input, Directive } from '@angular/core';

@Component({
    selector: 'tabela-modulo-classificacao',
    templateUrl: './classificacao.component.html',
})
export class ClassificacaoComponent {

  @Input()
  campeonato: any = [];

  @Input()
  grupo: any = [];

  @Input()
  nomeReduzidoDoGrupo: String;

}
