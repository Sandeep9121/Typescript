export{}
//function of other type difficult to 

function firstName(person :{firstName:string ,lastName:string}){
    console.log(`${person.firstName} ${person.lastName}`);
    console.log("name is ",person.firstName,person.lastName);
}
let p={
    firstName:'Sandeep',
    lastName:'Sanjay'
}

firstName(p);// due to this we need to create interface
//lets look into the interface

interface Person{
    firstname :string
    lastname :string
}

function firstName2(person :Person){
    console.log(`${person.firstname} ${person.lastname}`);
}
let i={
    firstname:'Sandeep',
    lastname:'Sanjay interface '
}
firstName2(i); 