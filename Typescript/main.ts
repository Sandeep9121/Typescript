export{}
let message ='hello  haii a sjns';
console.log(message);
message='sandeep';
 let sandeep:boolean= true;
 let account:number= 34;
 let name:string =`${message}`;

 //embeded expression in the string declarations
 let sentence :string =`my name is ${name} i am the  beginner in typescript`;
 console.log(sentence);
 //static type checking 
var s:string =name.charAt(0);
 
 let n:null =null;
 let u:String=undefined;

 let list:number[] =[1,2,2,3,3];
 let list3:Array<number>=[1,2,33,4,];
let person :[String ,number] =['sandee',44];
enum color {red =9,green,blue};
let c:color =color.green;
console.log(c); // result number 10

//any type

let randovalue :unknown =19;
randovalue=true;
randovalue='sandeep';
//if variable is any no error
let  myvariable1 :any=10;
console.log (myvariable1.name);
myvariable1();
myvariable1.toUpperCase();

//if you assign it to unknown it require proper data type
let  myvariable : unknown=10;
function hasName(obj :any):obj is {name :string}{
    return !!obj &&
           typeof obj === "object" &&
           "name" in obj
}
if(hasName(myvariable)){
    console.log (myvariable.name);
}


//myvariable(); // error
(myvariable as string).toUpperCase();

let a;
a=10;
a=true;
let b=20;
//b=true; ---> error

//ability to specify union of types

let multiType: number | boolean;
multiType=20;
multiType=true;

console.log("hiiii======",multiType.valueOf);
console.log('skskskss');

//anytype
let anyType :any;
anyType=20;
anyType=true;







