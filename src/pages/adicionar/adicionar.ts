import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-adicionar',
  templateUrl: 'adicionar.html'
})
export class AdicionarPage {
  public data = {
    pais: 'br',
    cidade: ''
  };
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) { }

  dismiss(formData) {
    this.viewCtrl.dismiss(formData);
  }

  fechar() {
    this.viewCtrl.dismiss();
  }
}
