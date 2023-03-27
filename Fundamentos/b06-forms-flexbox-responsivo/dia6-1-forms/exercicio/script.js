function submit(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}
function enableSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
  const agree = document.querySelector('#agree');
  submitBtn.disabled = !agree.checked;
}

window.onload = function () {
  const submitBtn = document.querySelector('#submit-btn')
  submitBtn.addEventListener('click', submit);
  const agreement = document.querySelector('#agree');
  agreement.addEventListener('change', enableSubmit);
}


function textInputValidation() {
  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#nome').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#why').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}
