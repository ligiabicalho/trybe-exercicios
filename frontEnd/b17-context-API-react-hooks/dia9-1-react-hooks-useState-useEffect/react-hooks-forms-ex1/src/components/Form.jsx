
function Form() {
  return (
    <div className="Form">
      <header className="Form-header">
        <h2>Formulário React Hooks</h2>
      </header>
      <form>
        <label htmlFor='fullName'>
          Nome completo:
          <input id='fullName' type='text' />
        </label>
        <label htmlFor='age'>
          Idade:
          <input id='age' type='number' />
        </label>
        <label htmlFor='city'>
          Cidade:
          <input id='city' type='text' />
        </label>
        <fieldset>
          <legend>Módulo que está estudando:</legend>
        <label htmlFor='fundamentos'>
          <input id='fundamentos' type='radio' name='module' />
          Fundamentos
        </label>
        <label htmlFor='front-end'>
          <input id='front-end' type='radio' name='module' />
          Front-end
        </label>
        <label htmlFor='back-end'>
          <input id='back-end' type='radio' name='module' />
          Back-end
        </label>
        <label htmlFor='cs'>
          <input id='cs' type='radio' name='module' />
          Ciência da Computação
        </label>
        </fieldset>
        <button type="button">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
