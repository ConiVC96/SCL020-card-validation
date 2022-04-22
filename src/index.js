import validator from './validator.js';


// declaración de variables
const form = document.querySelector('#paymentForm');
const inputList = Array.from(document.querySelectorAll('input'));  // [...]
const inputPayment = document.getElementById('creditCard');
let paymentTemporalvalue = ''; //inicializo la variable

// eventListener onchange (cuando el valor del input cambie), recibe el nombre y una función
inputPayment.addEventListener('change', (e) => {
  let value = e.target.value                       // esto es lo mismo que poner inputPayment.value pero por convención es mejor este
  let maskData = validator.maskify(value)         // esta variable retorna el valor de maskify, que es el input enmascarado 
  paymentTemporalvalue = inputPayment.value      // a la variable pTV le pasaré el valor de iP para guardar el valor antes de transformarse 
 //para después cambiar el valor al Maskdata
  inputPayment.value = maskData   
})

// eventListener onsubmit (cuando el formulario se ha enviado)
form.addEventListener('submit', (e) => {
  e.preventDefault()                         // por defecto actualiza la página, con esto evitamos ese comportamiento
  inputList.forEach( function(input) {        //Por cada uno de los input voy a preguntar si están vacíos
    if(input.value === ''){
      alert(input.placeholder + ' es obligatorio') //${}
    }
  })
  validator.isValid(paymentTemporalvalue);
  
  if (validator.isValid(paymentTemporalvalue) == true) {  
    alert('Número de tarjeta válido') 
  } else {
    alert ('Número de tarjeta ingresado no válido, favor revisar nuevamente')
  }
})

