import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getDiaDaSemana'})
export class DiaDaSemanaPipe implements PipeTransform {
    transform(dia: string): any {
        switch (dia) {
              case 'Mon':
                  return 'Seg';
              case 'Tue':
                  return 'Ter';
              case 'Wed':
                  return 'Qua';
              case 'Thu':
                  return 'Qui';
              case 'Fri':
                  return 'Sex';
              case 'Sat':
                  return 'Sáb';
              case 'Sun':
                  return 'Dom';
              default:
                  return '';
          }
    }
}