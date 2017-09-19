import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatarNomeEstadio'})
export class EstadioPipe implements PipeTransform {
    transform(nome: string): any {
        var nomeFormatado = '';
        if (typeof nome != 'undefined' && nome != '-'){
            nomeFormatado = ' - ' + nome;
        }
        return nomeFormatado;
   }
}