import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService{

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7000

    }
  ]

  get personajes(): Personaje[]{
    return [...this._personajes];
  }

  agregarPersonaje (data: Personaje){
      this._personajes.push(data)
  }

}
