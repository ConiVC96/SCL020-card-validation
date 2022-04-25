const validator = {
  isValid : function (creditNumber) { 
   let splitNumbers = creditNumber.split('')
   let reverseNumbers = splitNumbers.reverse()
   let digits = reverseNumbers.map(Number); 
   
    for (let i = 0; i < digits.length; i++) { 
      if (i % 2 ) { 
        digits[i] *= 2; 
        if (digits[i] > 9) {
          digits[i] -= 9;
        }    
      }   
    } 
    let sum = 0; 

      for (let i = 0; i < digits.length; i++)  {
        sum += digits[i];
      }
  if (sum % 10 === 0) { 
    return true 
  } 
    return false
  }, 
  maskify: function (inputCard) {
    return inputCard.slice(0,-4).replace(/./g, "#") + inputCard.slice(-4); 
  }
}
  export default validator; 
  