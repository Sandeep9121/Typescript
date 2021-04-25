var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//creation of class
var Emp = /** @class */ (function () {
    function Emp(name) {
        this.EmployeeName = name;
    }
    Emp.prototype.greet = function () {
        console.log("Good morning " + this.EmployeeName);
    };
    return Emp;
}());
//create a instance
var emp1 = new Emp('sandeep');
emp1.greet(); //call it
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log(this.raj(), "manager delegates Task");
        this.raj();
    };
    Manager.prototype.raj = function () { console.log("hiiiii"); };
    return Manager;
}(Emp));
var m1 = new Manager('dhoni');
m1.greet(); // parent method
console.log(m1.EmployeeName); // coming from parent class Emp constructor 
m1.delegateWork();
