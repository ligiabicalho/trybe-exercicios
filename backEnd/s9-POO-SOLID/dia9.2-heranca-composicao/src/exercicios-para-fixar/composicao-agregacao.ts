// A composição de objetos/classes é uma forma de combinar objetos ou tipos de dados para construir sua estrutura.
// Na agregação os objetos podem existir sem depender do outro objeto, por outro lado, na composição os objetos dependem da existência do outro objeto.


interface Logger{
  log(parm: string): void;
}

class ConsoleLogger implements Logger{
  log(param: string): void{
    console.log('Logger 1:', param);
  }
}

class ConsoleLogger2 implements Logger{
  log(param: string): void{
    console.log('Logger 2:', param);
  }
}

interface Database{
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database{
  constructor(public logger: Logger = new ConsoleLogger()){
  }

  save(key: string, value: string){
    this.logger.log(`Salvando o valor ${value} na chave ${key}`);
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');