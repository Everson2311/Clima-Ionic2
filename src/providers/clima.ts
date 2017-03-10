import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Geolocation } from 'ionic-native';
import 'rxjs/add/operator/map';

/*
  Generated class for the Clima provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Clima {

  private appId = '06993bf13761ddd7c01414664e49d436';
  private baseUrl = 'http://api.openweathermap.org/data/2.5/';
  constructor(public http: Http) {}

  cidade(cidade: string, pais: string) {
    let url = this.baseUrl + 'weather';
    url += '?appId=' + this.appId;
    url += '&q=' + cidade;
    url += ',' + pais;
    return this.http.get(url);
  }
  
  previsao(idCidade: string, dias: number) {
    let url = this.baseUrl + 'forecast/daily';
    url += '?appId=' + this.appId;
    url += '&id=' + idCidade;
    url += '&cnt' + dias;
    return this.http.get(url);
  }

  local() {
    let obs = Observable.create(observer => {
      Geolocation.getCurrentPosition().then((result => {
        let lat = result.coords.latitude;
        let lng = result.coords.longitude;
        let url = this.baseUrl + 'weather';
        url += '?appId=' + this.appId;
        url += '&lat='+lat+'&lon='+lng;
        this.http.get(url).subscribe(data => {
          observer.next(data.json());
        },
          err => observer.error(err),
          () => observer.complete());
      }));
    });
    return obs;
  }
  
}










