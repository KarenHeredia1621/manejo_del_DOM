const caja_unica = document.getElementById('caja-unica');
const cajita = document.querySelectorAll('.caja-contenidos');
const estilo_clase = document.querySelector('#titulo-2');



caja_unica.innerText = "cambio en el texto n1 con inner text";
caja_unica.innerHTML = "cambio en el texto n2 con inner html";
caja_unica.textContent = "cambio en el texto n3 con text content";



estilo_clase.textContent = "manipulacion de estilos ccss y clases"



cajita.forEach((caja, index) => {
    caja.textContent = 'caja multiple' + index;
    caja.style.color = "pink"
    caja.style.fontSize = "45px";
    caja.style.textAlign = "center"
})