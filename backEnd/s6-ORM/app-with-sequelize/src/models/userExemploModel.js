/* o arquivo model tb pode ser criado pelo seguinte comando:
npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string
Que irá gerar o arquivo model e o arquivo migration correspondente.
No entanto, o código dos arquivos gerados é pouco legível e segue um padrão que dificulta a escrita de testes.

O model representa UMA linha na tabela, então por convenção os termos são usados no SINGULAR, ao contrário do nome da tabela.

Se não explicitamos o nome da tabela no model, por padrão, o Sequelize coloca no plural o nome do model e o usa como nome da tabela. 
Caso seja necessário explicitar o nome da tabela, pode-se fazer isso apenas acrescentando um outro parâmetro na função do model, o tableName
*/

const UserExemploModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    // aqui inserimos o datatype da coluna adicionada:
    phoneNum: DataTypes.STRING,
  });
  // responsável por sincronizar a model com os métodos do Sequelize:
  // o método SYNC está sendo chamado com o parâmetro force: true. Isso significa que, toda vez que o servidor for iniciado, a tabela será recriada. Isso é útil para testes, mas não deve ser usado em produção.
  (async () => {
    await sequelize.sync({ force: true });
    // As funções vão aqui

    // INICIALIZANDO INSTÂNCIAS: BUILD/SAVE e CREATE

    /* o método BUILD não se comunica com o banco de dados. 
    Isso acontece por que essa função cria uma instância de um model, que representa os dados que irão ser salvos no banco de dados, mas não os salva. */
    const sara = User.build({
      fullName: 'Sara Silva Santos',
      email: 'sara.ss@email.com',
    });

    console.log(sara instanceof User); // true
    console.log(sara.fullName); // "Sara Silva Santos"
    // método SAVE: Para salvar os dados no banco de dados, o método save deve ser utilizado:
    await sara.save();
    console.log('Pessoa salva no banco de dados!');

    /* método CREATE: Uma forma mais simples de criar uma instância de um model e já salvá-la no banco de dados; combina o build e o save em uma única função: */
    const ligia = await User.create({
      fullName: 'Ligia Silva Santos',
      email: 'ligia.ss@email.com',
    });

    console.log(ligia instanceof User); // true
    console.log(ligia.name); // "Ligia Silva Santos"

    // MODIFICANDO: SET/SAVE, UPDATE.

    sara.fullName = "Jane Doe";
    // O nome ainda está "Sara Silva Santos" no banco de dados!
    await sara.save();
    // Agora o nome foi atualizado para "Jane Doe" no banco de dados!

    // método SET: atualizar diversos campos de uma vez:
    ligia.set({
      fullName: "Lígia Carneiro Bicalho",
      email: "ligia.cb@email.com"
    });
    // O nome e e-mail ainda serão os mesmos, "Lígia Silva Santos", no banco de dados!
    await ligia.save();
    // Agora o nome e e-mail foram atualizados no banco de dados. 

    // método UPDATE: Para atualizar&salvar os campos específicos que foram modificados:
    sara.email = "sara.doe@trybe.com";
    await sara.update({ fullName: "Sara Doe" });
    // O banco de dados agora tem "Sara Doe" para o nome, mas o email ainda é "sara.ss@email.com".
    await sara.save();
    // O banco de dados agora tem "sara.doe@trybe.com" para o email.

    // EXCLUINDO INFORMAÇÕES: DESTROY

    const mario = await User.create({ fullName: "Mario Bors" });
    console.log(mario.fullName); // "Mario Bors"

    await mario.destroy();
    // Agora essa entrada não existe mais no banco de dados!
  })();

  return User;
};

module.exports = UserExemploModel;