///cambiar contenidos a elemnetos unicos 


const cajaUnica = document.getElementById('caja-unica');

cajaUnica.innerText = "cambio en el texto n1 con inner text"
cajaUnica.innerHTML = "cambio en el texto n2 con inner text"
cajaUnica.textContent = "cambio en el texto n3 con inner text"


const estiloClase = document.querySelector('#titulo-2')

estiloClase.textContent = "manipulacion de estilos ccss y clases"



 const caja = document.querySelectorAll('.caja-contenidos')

 caja.forEach((cajita, index)=>{
 cajita.textContent = 'caja multiple' + index;
 cajita.style.color = "red"
 cajita.style.fontSize = "45px";
 cajita.style.textAlign = "center"


 }

)
// for para un limite en especifico
 //foreach para todos . ambos se repiten, a nivel de arreglos se utiliza el FOR cuando me interesa definir un limite en la cantidad de veces que se repite esa ejecucion.
 // si no me interesa definir un limite , si no recorrerr todo el arreglo usamos FOREACH
 // arreglos = coleccion de valores, elementos u objetos