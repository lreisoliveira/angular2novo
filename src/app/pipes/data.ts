import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatarData'})
export class DataPipe implements PipeTransform {
    transform(data: string): any {
        if(data != null) {
            return data.replace(':','h');
        }
        return data;
    }
}