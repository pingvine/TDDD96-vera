import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeSv from '@angular/common/locales/sv';

registerLocaleData(localeSv, 'sv-se');

@Pipe({
  name: 'datePipe',
})
export class DatePipePipe implements PipeTransform {
  private datePipe = new DatePipe('sv-se');

  transform(date: Date, args?: any): string {
    const now = new Date(Date.now());
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    const copyDate = new Date(date.getTime());

    copyDate.setSeconds(0);
    copyDate.setHours(0);
    copyDate.setMinutes(0);

    const diffTime = now.getTime() - copyDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let format = '';
    if (diffDays === 0) {
      format = 'Idag';
    } else if (diffDays === 1) {
      format = 'Igår';
    } else if (diffDays === -1) {
      format = 'Imorgon';
    } else {
      return this.datePipe.transform(date, 'M/d HH:mm');
    }

    return `${format} ${this.datePipe.transform(date, 'HH:mm')}`;
  }
}
