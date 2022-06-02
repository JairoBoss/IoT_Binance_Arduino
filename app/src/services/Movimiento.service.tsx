import { Movimiento } from "../models/Movimiento";
import httpClient from "./HttpClient";

const prefix = "movimiento";

export default class MovimientoService {
  static async create(movimiento: Movimiento) {
    return (await httpClient.post(`${prefix}/`, movimiento)).data;
  }

  static async update(movimiento: Movimiento) {
    return (await httpClient.put(`${prefix}/${movimiento._id}`, movimiento))
      .data;
  }

  static async remove(id: string) {
    return (await httpClient.delete(`${prefix}/${id}`)).data;
  }

  static async getAll() {
    return (await httpClient.get(`${prefix}/`)).data;
  }
}
