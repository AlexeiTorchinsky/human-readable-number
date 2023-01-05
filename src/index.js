module.exports = function toReadable (number) {
  const numbers = [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9]
  const words1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const words2 = ['ten', 'eleven', 'twelve', 'thir', 'for', 'fif','twenty'];
  const words3 = ['', '', 'twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine']
  let str = '';
  
  // from 0 to 9
  function getString0(n) {
    for (let i = 0; i < numbers.length; i++) {
      if ( n == numbers[i]) {
        return words1[n];
      }
    }
  }

  if (String(number).length == 1) {
    return getString0(number);
  }

  // 10 to 19
  function getString(numb) {
      if (numb == 10) return words2[0];
      if (numb == 11) return words2[1];
      if (numb == 12) return words2[2];
      if (numb == 13) return words2[3] + 'teen';
      if (numb == 14) return words1[4] + 'teen';
      if (numb == 15) return words2[5] + 'teen';
      if (numb == 16) return words3[6] + 'teen';
      if (numb == 17) return words3[7] + 'teen';
      if (numb == 18) return words3[8] + 'teen';
      if (numb == 19) return words3[9] + 'teen';
    }
  
  if (String(number).length == 2 && number < 20) {
    return getString(number);
  }

  // 20 to 99
  function getString1(num) {
    let numFirstDigit = Math.trunc(num / 10);
    let numSecondDigit = num % 10;
    
    for (let i = 0; i < numbers.length; i++) {
      if (numFirstDigit == numbers[i]) {
        str += words3[numFirstDigit] + 'ty';
      }
    }
    for (let j = 0; j < numbers.length; j++) {
      if (numSecondDigit == numbers[j] && numSecondDigit != 0) {
        str += ' ' + words1[numSecondDigit];
      }
      
    } 
    return str
  }
  if (String(number).length == 2 && number >= 20) {
    return getString1(number);
  }

  // 100 to 999
  if (String(number).length == 3 ) { 
    let numberFirstDigit = Math.trunc(number / 100);
    let numDecimal = number % 100;

    if (numDecimal == 0) {
      for (let i = 0; i < numbers.length; i++) {
        if (numberFirstDigit == numbers[i]) {
          str = words1[numberFirstDigit] + ' hundred';
        }     
      }
    }
    if (numDecimal > 0 && numDecimal < 10) {
      let partOfString0 = getString0(numDecimal);
      for (let i = 0; i < numbers.length; i++) {
        if (numberFirstDigit == numbers[i])
        str = words1[numberFirstDigit] + ' hundred' + ' ' + partOfString0;
      }
    }


    if (numDecimal >= 10  && numDecimal < 20) {
      let partOfString = getString(numDecimal);
      for (let i = 0; i < numbers.length; i++) {
        if (numberFirstDigit == numbers[i])
        str = words1[numberFirstDigit] + ' hundred' + ' ' + partOfString;
      }
    }

    if (numDecimal >= 20) {
      let partOfString1 = getString1(numDecimal);
      for (let i = 0; i < numbers.length; i++) {
        if (numberFirstDigit == numbers[i])
        str = words1[numberFirstDigit] + ' hundred' + ' ' + partOfString1;
      }
    }

  return str;
  }

}
