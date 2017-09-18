import { Component, Input, Directive } from '@angular/core';

@Component({
    selector: 'modelo-pontos-corridos',
    templateUrl: './pontos-corridos.component.html',
})

export class PontosCorridosComponent {
  @Input() campeonato: any = [];
}
