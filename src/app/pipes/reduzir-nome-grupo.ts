import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'ReduzirNomeGrupo'})
export class ReduzirNomeGrupoPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;
      if (typeof  value != 'undefined') {
          return value.replace('GRUPO ','');
      }
      return value;
  }
}