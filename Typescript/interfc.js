"use strict";
exports.__esModule = true;
//function of other type difficult to 
function firstName(person) {
    console.log(person.firstName + " " + person.lastName);
    console.log("name is ", person.firstName, person.lastName);
}
var p = {
    firstName: 'Sandeep',
    lastName: 'Sanjay'
};
firstName(p); // due to this we need to create interface
function firstName2(person) {
    console.log(person.firstname + " " + person.lastname);
}
var i = {
    firstname: 'Sandeep',
    lastname: 'Sanjay interface '
};
firstName2(i);
