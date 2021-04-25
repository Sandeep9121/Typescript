
//creation of class
class Emp{
  EmployeeName:string

  constructor(name :string){
      this.EmployeeName=name;
  }
  greet(){
      console.log(`Good morning ${this.EmployeeName}`);
  }
}

//create a instance
let emp1=new Emp('sandeep');
emp1.greet(); //call it

class Manager extends Emp{
    constructor(managerName :string){
     super(managerName)
    }
    delegateWork (){
        console.log(this.raj(),`manager delegates Task`);// undefined manager delegates Task
        this.raj()//hi
    }
    
    raj(){console.log("hiiiii")}

}
let  m1=new Manager('dhoni');
m1.greet();// parent method
console.log(m1.EmployeeName);// coming from parent class Emp constructor 
m1.delegateWork();

