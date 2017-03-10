import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AdicionarPage } from '../adicionar/adicionar';
import { PrevisaoPage } from '../previsao/previsao';
import { Clima } from '../../providers/clima';
import { StorageService } from '../../providers/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Clima, StorageService]
})
export class HomePage {
  public climaList = [];
  public climaLocal: Object;
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    private clima: Clima,
    private storage: StorageService) {
    this.obterClimaLocal();
    this.obterClimaGravado();
  }

  obterClimaGravado() {
    this.storage.obterTempos().then((tempos) => {
      this.climaList = JSON.parse(tempos) || [];
    });
  }

  adicionarClima() {
    let adicionarClimaModal = this.modalCtrl.create(AdicionarPage);
    adicionarClimaModal.onDidDismiss((data) => {
      if (data) {
        this.obterClima(data.cidade, data.pais);
      }
    });
    adicionarClimaModal.present();
  }

  obterClima(cidade: string, pais: string) {
    this.clima.cidade(cidade, pais).map(data => data.json())
      .subscribe(data => {
        this.climaList.push(data);
        this.storage.criarTempos(data);
      },
      err => console.log(err),
      () => {
        console.log('get');
      });
  }

  obterClimaLocal() {
    this.clima.local().subscribe(data => {
      this.climaLocal = data;
      console.log(data);
    });

  }
  verPrevisao(climaCidade) {
    this.navCtrl.push(PrevisaoPage, { climaCidade: climaCidade });
  }

}
