import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    standalone: true,
})

export class FilterPipe implements PipeTransform {
  transform(items: any[] | null | undefined, text: string, property?: string): any[] {
    if (!items) {
      return [];
    } else {
      return items.filter((item: any) =>
        (property ? item[property] : item).toString().toLowerCase().includes(text.toLowerCase())
      );
    }
  }
}
