export interface IMovimiento {
  _id?: string;
  usuario: string;
  moneda: string;
  tipo: string;
  cantidad: string;
}

export class Movimiento implements IMovimiento {
  _id?: string;
  usuario: string;
  moneda: string;
  tipo: string;
  cantidad: string;

  constructor(data: IMovimiento) {
    this._id = data._id;
    this.usuario = data.usuario;
    this.moneda = data.moneda;
    this.tipo = data.tipo;
    this.cantidad = data.cantidad;
  }
}
