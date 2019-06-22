



//Elementos del documento
const resultText = document.querySelector('.result-text');
const editButton = document.querySelector('.edit-button');
const protagonistaInput = document.querySelector('.protagonista-input');

// Suscripciones a Eventos
editButton.addEventListener('click', function() {
  let inputValue = protagonistaInput.value;
  escribirHistoria(inputValue);
});

// Función que cambia la historia
function escribirHistoria(protagonista) {
  // let protagonista = 'Anuar';
  resultText.innerText = 'Hola ' + protagonista + ', esta es la historia que estoy agregando desde js';
}







// console.log(resultText.innerText);
