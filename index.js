import validator from './validator.js';


const form = document.querySelector('#paymentForm');
const inputList = Array.from(document.querySelectorAll('input'));  
const inputPayment = document.getElementById('creditCard');
let paymentTemporalvalue = ''; 


inputPayment.addEventListener('change', (e) => {
  let value = e.target.value                      
  let maskData = validator.maskify(value)         
  paymentTemporalvalue = inputPayment.value      
  inputPayment.value = maskData   
})


form.addEventListener('submit', (e) => {
  e.preventDefault()                         
  inputList.forEach( function(input) {        
    if(input.value === ''){
      alert(input.placeholder + ' es obligatorio') 
    }
  })
  validator.isValid(paymentTemporalvalue);
  
  if (validator.isValid(paymentTemporalvalue) == true) {  
    alert('Número de tarjeta válido') 
  } else {
    alert ('Número de tarjeta ingresado no válido, favor revisar nuevamente')
  }
})

