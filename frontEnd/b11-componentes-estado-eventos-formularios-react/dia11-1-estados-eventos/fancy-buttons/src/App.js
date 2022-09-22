import React from 'react';

// function handleButtonOne() {
//   console.log('Clicou no botão 1!');
// }

// function handleButtonTwo() {
//   console.log('Clicou no botão 2!');
// }

// function handleButtonThree() {
//   console.log('Clicou no botão 3!');
// }

class App extends React.Component {
  constructor(props) {
    super()
    this.handleClick = this.handleClick.bind(this) // ajuda a corrigir o escopo do this, inicialmente se refere apenas classe, com  .bind() vincula a função ao this da classe;
    // com arrow function não precisa de vincular o this da classe, será o mesmo da classe;
    this.state = {
      numCliques: 0
    }
  }
  
/* 3 formas de usar o setStage: (função assíncorna https://pt-br.reactjs.org/docs/react-component.html#setstate )
1- diretamente colocando uma string
2- colocando uma callback
3- com 2 funções como parâmetros, sendo 2 callbacks
*/
// não devemos usar this.state para atualizar o estado e sim .setStage; https://pt-br.reactjs.org/docs/state-and-lifecycle.html#do-not-modify-state-directly 
  handleClick() {
    this.setStage((estadoAnterior) => ({ 
      numCliques: estadoAnterior.numCliques + 1
    }))
  };

  render() {
    return (
      <div>
        <button onClick={ this.handleClick }>Botão 1</button>
      </div>
    );
  }
}

export default App;