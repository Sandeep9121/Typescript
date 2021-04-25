"use strict";
exports.__esModule = true;
//variable Types
function add(num1, num2) {
    return num1 + num2;
}
var a = add(5, 'sandeep');
console.info(a);
console.log(add(5, 'sandeep'));
console.info(a);
//optional parametre and default parametres
function addition(num1, num2, num3) {
    if (num3)
        return num1 + num2 + num3;
    else
        return num2 + num1;
}
addition(5, 6); // optional
addition(3, 5, 4);
//default parametere
function addDef(num1, num2) {
    if (num2 === void 0) { num2 = 33; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(addDef(2, 9)); //11 
console.log(addDef(3)); //default value is 33 i send 3  
