import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdicionarPage } from '../pages/adicionar/adicionar';
import { PrevisaoPage } from '../pages/previsao/previsao';
import { TemperaturaPipe } from '../pipes/temperatura';
import { ClimaEl } from '../components/clima/clima';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdicionarPage,
    TemperaturaPipe,
    PrevisaoPage,
    ClimaEl
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdicionarPage,
    PrevisaoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  {provide: LOCALE_ID, useValue: "pt-BR"}]
})
export class AppModule {}
