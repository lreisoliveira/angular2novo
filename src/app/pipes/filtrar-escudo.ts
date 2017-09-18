import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'FiltrarEscudo'})
export class FiltrarEscudoPipe implements PipeTransform {
  transform(data: string, alt: any = String): any {
          console.log('+8979998');
         if (typeof alt == 'undefined') {
          alt = "";
         }
          console.log('9999');

          var PLUGIN_URL_TABELAS_FUTEBOL = '';
          var img = '<img alt="'+alt+'" title="'+alt+'" src=" ' + PLUGIN_URL_TABELAS_FUTEBOL + '/images/time-nao-definido.png" width="30" height="30" />';
          if (data == null || data == '' || data == '' || typeof data == 'undefined') {
              return img;
          }
          console.log('161616');
          var re = /(?:\.([^.]+))?$/;
          var ext = re.exec(data)[1];

          if (ext =='undefined' || ext =='net' || ext =='com' || typeof ext == 'undefined') {
              return img;
          }
          console.log('212121');
          return '<span class="tooltip-box"><img src="' + data + '" alt="'+alt+'" title="'+alt+'" /><span class="tooltiptext">'+alt+'</span></span>';
  }
}