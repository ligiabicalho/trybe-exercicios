import React from 'react';

function eventClick() {
  const texto = `Clicou no...`;
  console.log(texto);
  return texto;
};

class Button extends React.Component {
  render() {
  const buttonName = this.props;
    return (
      <button onClique={eventClick}>
        {buttonName} 
      </button>
    );
  }
}

export default Button;
