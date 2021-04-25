"use strict";
exports.__esModule = true;
var message = 'hello  haii a sjns';
console.log(message);
message = 'sandeep';
var sandeep = true;
var account = 34;
var name = "" + message;
//embeded expression in the string declarations
var sentence = "my name is " + name + " i am the  beginner in typescript";
console.log(sentence);
//static type checking 
var s = name.charAt(0);
var n = null;
var u = undefined;
var list = [1, 2, 2, 3, 3];
var list3 = [1, 2, 33, 4,];
var person = ['sandee', 44];
var color;
(function (color) {
    color[color["red"] = 9] = "red";
    color[color["green"] = 10] = "green";
    color[color["blue"] = 11] = "blue";
})(color || (color = {}));
;
var c = color.green;
console.log(c); // result number 10
//any type
var randovalue = 19;
randovalue = true;
randovalue = 'sandeep';
//if variable is any no error
var myvariable1 = 10;
console.log(myvariable1.name);
myvariable1();
myvariable1.toUpperCase();
// if you assign it to unknown it require proper data type
var myvariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
console.log(myvariable.name);
myvariable();
myvariable.toUpperCase();
