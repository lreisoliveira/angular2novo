import { Component, ElementRef } from '@angular/core';
import { ApiService } from './../service/api.service';
import { Campeonato } from "../lib/campeonato";

@Component({
  selector: 'index-tabela-campeonato',
  templateUrl: './index.component.html',
})

export class IndexComponent extends Campeonato {

  public api: any;

  constructor(private apiService:ApiService, elementRef:ElementRef){
    super();
    this.slug = elementRef.nativeElement.getAttribute('slug');
    this.api  = apiService;
    this.MontarTabela(this.slug);
  }

  public MontarTabela(slug){
     this.api.getCampeonato(slug).subscribe(
      (data: any) => {
        this.criarCampeonato(data);
      },
      err => {  if (err.status != 200) {
                  console.log('Não foi possível obter os dados do campeonato ' + this.slug);
                }
             }
    );
  }

}
