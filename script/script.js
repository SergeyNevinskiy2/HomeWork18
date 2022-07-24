'use strict'


const padString = (string, srtLenght, symbol, right = true) => {
  if (typeof string !== 'string') throw new Error('is not in type string');
  if (typeof srtLenght !== 'number') throw new Error('is no in number');
  if (string.length === srtLenght) return string;
  if (string.length > srtLenght) return string.substring(0, srtLenght);

  if (typeof symbol !== 'string') throw new Error('symbol is not string');
  if (symbol.length > 1) throw new Error (' symbol length long');
  if (typeof right !== 'boolean') throw new Error('right is not boolean');

  const symbols = symbol.repeat(srtLenght - string.length);

  return right ? string + symbols : symbols + string;

}


console.log(padString('hello', 2))
console.log(padString('hello',8, '*'))

