function cardValidator(number) {
  if (typeof number !== "number" || number == ""){
    throw new Error ("é necessário o número do cartão para a validação"); 
  }else {
    let digit = convert(number);
    if (digit === true){
      throw new Error ("A quantidade de dígitos está incorreta"); 
    }else {
      let verification = reverseNumber(number).map(Number).map(conta).reduce(soma)  % 10 == 0;
      return verification;
    }	
  }

  function convert(num) {
    let convert = num.toString();
    if (convert.length === 1){
      return true;
    }else {
      return convert;
    }
  }

  function reverseNumber(num){
    let convert = num.toString();
    let arrayReverse = convert.split("").reverse();
    return arrayReverse;
  }

  function conta(num, i) {
    if (i % 2 == 0) {
      return num;
    } else {
      if (num * 2 <= 9) {
        return num * 2;
      } else {
        return num * 2 - 9;
      }
    }
  }
  function soma(acum, num) {
    return acum + num;
  }
}

module.exports.cardValidator = cardValidator;
