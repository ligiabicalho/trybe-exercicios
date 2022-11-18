import React, { useState } from "react";

function Form() {
  const [userData, setUserData] = useState({
    fullName: '',
    age: 0,
    city: '',
    module: 'x',
  });

  const handleChange = (e) => {
  setUserData({
        ...userData,
        [e.target.name]: e.target.value,
      });
  }

  return (
    <div className="Form">
      <header className="Form-header">
        <h2>Formulário React Hooks</h2>
      </header>
      <form>
        <fieldset>
          <legend>Dados pessoais:</legend>
        <label htmlFor='fullName'>
          Nome completo:
          <input id='fullName' name='fullName' type='text' value={userData.fullName} onChange={(handleChange)}/>
        </label>
        <label htmlFor='age'>
          Idade:
          <input id='age' name='age' type='number' value={userData.age} onChange={(handleChange)}/>
        </label>
        <label htmlFor='city'>
          Cidade:
          <input id='city' name='city' type='text' value={userData.city} onChange={(handleChange)}/>
        </label>
        <fieldset>
          <legend>Módulo que está estudando:</legend>
        <label htmlFor='fundamentos'>
          <input id='fundamentos' 
          type='radio' 
          name='module' 
          value='fundamentos' 
          checked={module === 'fundamentos'} // está assim no gabarito, no entanto nenhuma opção fica checkada!
          onChange={(handleChange)}/>
          Fundamentos
        </label>
        <label htmlFor='front-end'>
          <input id='front-end' 
          type='radio' 
          name='module' 
          value='front-end'
          checked={module === 'front-end'}
          onChange={(handleChange)}/>
          Front-end
        </label>
        <label htmlFor='back-end'>
          <input id='back-end' 
          type='radio' 
          name='module' 
          value='back-end' 
          checked={module === 'back-end'}
          onChange={(handleChange)}/>
          Back-end
        </label>
        <label htmlFor='cs'>
          <input id='cs' 
          type='radio' 
          name='module' 
          value='cs' 
          checked={module === 'cs'}
          onChange={(handleChange)}/>
          Ciência da Computação
        </label>
        </fieldset>
        <button type="button" onClick={ () => console.log('Click!')}>Enviar</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;