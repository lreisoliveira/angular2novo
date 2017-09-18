import { Component, Input } from '@angular/core';

@Component({
    selector: 'tabela-modulo-rodadas',
    templateUrl: './rodadas.component.html',
})

export class RodadasComponent {

  @Input()
  configCampeonato: any = [];

}


