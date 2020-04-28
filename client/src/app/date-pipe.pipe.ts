import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe extends DatePipe implements PipeTransform {
  transform(date: Date, args?: any): string {
    const now = new Date(Date.now());
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    const copyDate = new Date(date.getTime());

    date.setSeconds(0);
    date.setHours(0);
    date.setMinutes(0);

    const diffDays = now.getDay() - date.getDay();
    let format = '';
    if (diffDays === 0) {
      format = 'Idag';
    } else if (diffDays === 1) {
      format = 'Igår';
    } else if (diffDays === -1) {
      format = 'Imorgon';
    } else {
      return super.transform(copyDate, format="hh:mm");
    }

    return format + ' ' + super.transform(copyDate, format="hh:mm");
  }
}
