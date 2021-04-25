export{}
//variable Types
function add(num1 :number,num2:string){

    return num1+num2;
}

//function of other type

function firstName(person :{firstName:string ,lastName:string}){
    console.log(`${person.firstName} ${person.lastName}`);
    console.log("name is ",person.firstName,person.lastName);
}
let p={
    firstName:'Sandeep',
    lastName:'Sanjay'
}

firstName(p);