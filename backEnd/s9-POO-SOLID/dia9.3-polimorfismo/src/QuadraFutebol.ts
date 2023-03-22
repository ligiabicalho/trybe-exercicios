// exercicio 4
import { IAgenda } from './interfaces/IAgenda';
import { IFutebol } from './interfaces/IFutebol';
import normas from './normas/normasDeUso';
import Quadra from './Quadra';

export default class QuadraFutebol extends Quadra {
  public futebolData: IFutebol = normas.futebol;

  public reservar<IFutebol>(date: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data: date,
      regras: this.futebolData as unknown as IFutebol,
    };
  }
}