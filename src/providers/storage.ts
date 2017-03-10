import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class StorageService {
  private storageDb = 'armazenaclima';
  private storage: Storage;
  private tempos: Array<Object>;
  constructor() {
    this.storage = new Storage();
    this.obterTempos().then(data => {
      this.tempos = JSON.parse(data);
    });
  }

  obterTempos() {
    return this.storage.get(this.storageDb);
  }

  criarTempos(tempo) {
    if (!this.tempos) {
      this.tempos = [tempo];
    } else {
      this.tempos.push(tempo);
    }

    this.storage.set(this.storageDb, JSON.stringify(this.tempos));
  }
}
