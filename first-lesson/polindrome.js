/* Опис: Напишіть функцію, яка приймає рядок і перевіряє, чи є цей рядок паліндромом. 
Паліндром — це слово або фраза, які читаються однаково зліва направо і справа наліво, 
не враховуючи пробіли, розділові знаки і регістр літер.
*/

// regex to remove useless symbols /[^a-z0-9]/g

function isPolindrome(str) {
    let mappedString =  str
        .toLowerCase() // a man, a plan, a canal, panama
        .replaceAll(' ', '')// a m a n a p l a n  acanalpanama

   return mappedString === mappedString
        .split('') // a m a n
        .reverse() // [n, a, m, a]
        .join('') // amanaplanacanalpanama
}

console.log(isPolindrome('Hello '));

const mullNumber = function (mulNumber) {
    let result = mulNumber
    for (let i = 0; i < (mulNumber.toString().length); i++) {
        result = result * 2;
    }
    console.log(mulNumber.toString().length);
    return result
}

console.log(mullNumber(22))

function multiply(value, multiply) {

    if (value && typeof value === "number") {
  
      let getValStrLen = (value += '').length;
  
  
  
      return value * multiply * getValStrLen;
  
    } else {
  
      return "Value is Not a Number";
  
    }
  
  }

console.log(multiply(11, 2))