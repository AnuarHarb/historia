

const resultText = document.querySelector('.result-text');
const editButton = document.querySelector('.edit-button');
const editProtagonista = document.querySelector('.edit-protagonista');
const editLugar = document.querySelector('.edit-lugar');

editButton.addEventListener('click', function() {
  const protagonistaValue = editProtagonista.value;
  const lugarValue = editLugar.value;

  escribirHistoria(protagonistaValue, lugarValue);
});

function escribirHistoria(protagonista, lugar) {
  resultText.innerText = 'Hola ' + protagonista + ', esta es una historia que estoy agregando a ' + lugar + ' con js';
  resultText.style.fontSize = '40px';
}
