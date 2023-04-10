// import FooCepAPI from './FooCepAPI';
import ICepAPI from './IFooCepAPI';

export default class CepService {
  // private readonly cepApi: FooCepAPI;

  // INVERSÃO DE DEPENDÊNCIA: tipar com interface, e não com classe.
  // & implementar a interface na classe q será passada.
  constructor(private readonly cepApi: ICepAPI) {
  // INJEÇÃO DE DEPENDÊNCIA:
  // A classe deve ser passada por qm chama CepService()
  // e não instanciada dentro de CepService()
    // this.cepApi = new FooCepAPI();
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}