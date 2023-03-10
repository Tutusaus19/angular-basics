import { Component } from '@angular/core'

@Component({
  selector: 'app-contador',
  template: `
        <h1>{{title}}</h1>

        <h3>La base es: <strong>{{numero}}</strong></h3>

        <button (click)="acumular(+base)">+ {{base}} </button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)">- {{base}}</button>
        <button (click)="reset()"> Reset</button>


  `
})
export class ContadorComponent {
  public title: string = 'Contador App';
  public numero: number = 0;
  public base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
  reset() {
    this.numero = 0;
  }
}
