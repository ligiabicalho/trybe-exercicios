// exercício 1
export interface IAgenda<T>{
  protocolo: string;
  data: Date;
  regras: T;
}