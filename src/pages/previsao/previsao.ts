import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Clima } from '../../providers/clima';

@Component({
  selector: 'page-previsao',
  templateUrl: 'previsao.html',
  providers: [Clima]
})
export class PrevisaoPage {
  public climaCidade;
  public previsaoList = [];
  constructor(public navCtrl: NavController, navParams: NavParams, public clima: Clima) {
    this.climaCidade = navParams.get('climaCidade');
    this.obterPrevisao(this.climaCidade.id);
  }

  obterPrevisao(idCidade) {
    this.clima.previsao(idCidade, 7)
      .map(data => data.json())
      .subscribe(data => {
        console.log(data.list);
        this.previsaoList = data.list;
      });
  }

}
