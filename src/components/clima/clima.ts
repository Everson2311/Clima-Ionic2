import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'clima',
  templateUrl: 'clima.html'
})
export class ClimaEl {
  @Input() clima: Object;
  @Output() verMais: EventEmitter<Object> = new EventEmitter();

  constructor() {}

  clickClima() {
    this.verMais.next(this.clima);
  }

}
