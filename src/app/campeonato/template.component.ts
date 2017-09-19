import { Component, Input } from '@angular/core';

@Component({
    selector: 'template-campeonato',
    templateUrl: './template.component.html',
})

export class TemplateComponent {

  @Input() configCampeonato: any = [];

}


