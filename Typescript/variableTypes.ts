export{}
//variable Types
function add(num1 :number,num2:string){

    return num1+num2;
}
let a:string=add(5,'sandeep');

console.info(a);
console.log(add(5,'sandeep'));
console.info(a);


//optional parametre and default parametres

function addition (num1:number , num2:number ,num3?:number ):number{
    if(num3)
    return  num1+num2+num3;
    else
    return num2+num1;
}
addition(5,6);// optional
addition(3,5,4);

//default parametere
function addDef(num1:number,num2:number=33){
    if(num2)
    return num1+num2;
    else 
    return num1;
}
console.log(addDef(2,9)); //11 
console.log(addDef(3));//default value is 33 i send 3  output is 36

