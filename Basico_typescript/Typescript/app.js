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
//@ts-check
console.log("Hola mundo");
//Type
var myString = "hola mundo";
var myNumbre = 22;
var myBool = true;
var myAny;
myAny = false;
/* document.write(myNumbre.toString()); */
/* Arrays */
var StringArray = ["Item1", "Item2", "Item3", ""];
var NumberArray = [1, 2, 3, 4];
var BoolArray = [true, false, true];
var AnyArray = [];
/* tuple */
var tuple;
tuple = ['Hola', 26];
/* void, Undefined, null */
/* let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined; */
/* Functions */
function suma(num1, num2) {
    return num1 + num2;
}
var resta = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 - num2;
};
function Nombre(firstname, lastname) {
    return "".concat(firstname, " ").concat(lastname);
}
/* function myVoidFunction():void {
    return;
} */
document.write(Nombre('jair', 'mejia'));
function showTodo(toDo) {
    console.log("".concat(toDo.title, " - ").concat(toDo.text));
}
var myTodo = { title: 'Eat Dinner', text: 'lorem' };
showTodo(myTodo);
/* Classes */
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log("".concat(this.name, " is registered"));
    };
    User.prototype.showMeage = function () {
        return this.age;
    };
    User.prototype.ageInyears = function () {
        return this.age + ' years';
    };
    User.prototype.payInvoice = function () {
        console.log("".concat(this.name, " paide invoice"));
    };
    return User;
}());
var datos = new User('jair', 'jairjmg@email.com', 26);
console.log(datos.register());
console.log(datos.ageInyears());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var member = new Member(1, 'jose', 'jair.jmgu@email.com', 26);
member.payInvoice();
console.log('sigue actualizando');
