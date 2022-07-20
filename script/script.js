'use strict'
function padString(str, num, char, symbRightOrLeft = true) {
  if (typeof str !== 'string' || str.trim() === '') {
      return "Invalid string";
  }
  if (isNaN(num) || num <= 0) {
  return "Error - not a number";
 }
 if (char === null) {
  return "Invalid symbol";
 }
 if (typeof symbRightOrLeft !== 'boolean') {
  return "Error - not boolean";
 }
 let change = num - str.length;
 if (num > str.length) {
  for (let i = 0; i < change; i++) {
    symbRightOrLeft ? (str += char) : (str = char + str);
  }  
  return str;
} 
if ((num < str.length) || (num === str.length))   {
  str = str.substring(0, num);
  return str;
} 
} 

console.log(padString("hello", 8, "*"));
console.log(padString("hello", 6, "*", false));
console.log(padString("hello", 2));
