import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'temperatura'
})
@Injectable()
export class TemperaturaPipe {

  transform(value, args) {
    var r = '0';
    if (args == 'C') {
      r = Math.round(parseInt(value, 10) - 273.15).toString();
      r = r + '°C';
    }
    else {
      r = Math.round(parseInt(value, 10) * 9 / 5 - 459.67).toString();
      r = r + '°F';
    }
    return r;
  }
}
