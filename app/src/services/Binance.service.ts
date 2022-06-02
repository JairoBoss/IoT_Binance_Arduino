import httpClient from "./HttpClient";

const prefix = "binance";

export default class BinanceService {  
  static async getBTC() {
    return (await httpClient.get(`${prefix}/btc-usdt`)).data;
  }
  
  static async getETH() {
    return (await httpClient.get(`${prefix}/eth-usdt`)).data;
  }
}
