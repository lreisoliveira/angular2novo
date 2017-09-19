import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'linkDaPaginaDaEquipe'})
export class LinkPaginaEquipePipe implements PipeTransform {
  transform(input: string, link: any = String, title: String): any {
    if (typeof link != 'undefined' && link !== null) {
      var content = '<a class="team-link" href="/times/' + link + '" alt="' + title + '" title="' + title + '">';
      content += input;
      content += '</a>';
      input = content;
    }

    return input;
  }
}