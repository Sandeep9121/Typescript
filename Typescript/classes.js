"use strict";
exports.__esModule = true;
//variable Types
function add(num1, num2) {
    return num1 + num2;
}
//function of other type
function firstName(person) {
    console.log(person.firstName + " " + person.lastName);
    console.log("name is ", person.firstName, person.lastName);
}
var p = {
    firstName: 'Sandeep',
    lastName: 'Sanjay'
};
firstName(p);
