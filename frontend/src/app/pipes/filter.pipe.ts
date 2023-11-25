import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})

export class FilterPipe implements PipeTransform {
  transform(items: any[] | null | undefined, text: string, property: string): any[] {
    if (items === null || items === undefined) {
      return [];
    } else {
      return items.filter((item: any) => (item[property] ?? '').toString().toLowerCase().includes(text.toLowerCase()));
    }
  }
}
