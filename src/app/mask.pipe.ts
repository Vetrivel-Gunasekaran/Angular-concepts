import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mask'
})
export class MaskPipe implements PipeTransform {
  transform(value: string, showMask: boolean): string {
    if (!showMask) {
      return `${value.substring(0, 3)} ${value.substring(3, 6)} ${value.substring(6, 9)}`;
    }
    
    value = value.substring(value.length - 3);
    return `*** *** ${value}`;
  }
}
