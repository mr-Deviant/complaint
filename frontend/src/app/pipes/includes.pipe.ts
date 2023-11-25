import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'includes',
})

export class IncludesPipe implements PipeTransform {
  transform(item: string | number | null | undefined, text: string): boolean {
    if (item === null || item === undefined) {
      return false;
    } else {
      return item.toString().toLowerCase().includes(text.toLowerCase());
    }
  }
}
