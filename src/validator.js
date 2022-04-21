const validator = {
  isValid : function (creditNumber) { 
   let splitNumbers = creditNumber.split('')
   let reverseNumbers = splitNumbers.reverse()
   let digits = reverseNumbers.map(Number); // crea un nuevo array de números, le da reversa, los divide con , y los guarda en digitos

    for (let i = 0; i < digits.length; i++) { //inicia la iteración (i) en 0, el largo de digitos debe ser menor a i, y en cada iteración se le suma 1
    
      if (i % 2 ) { 
        digits[i] *= 2;
        if (digits[i] > 9) {
          digits[i] -= 9;
        }    // este if hace un modulo de la posición, siendo 0 falso y 1 verdadero, de ser verdadero *2 el valor de la posición de 2
      }    // el segundo if verifica
    } 

    let sum = eval(digits.join('+')); //eval convierte a números para así poder sumarlo con el join
  if (sum % 10 === 0) { 
    return true 
  } 
    return false
  }, 

  maskify: function (inputCard) {
    
    return inputCard.slice(0,-4).replace(/./g, "#") + inputCard.slice(-4); // separa los digitos, los reemplaza y le agrega los últimos 4

  }
}
  export default validator; 
  