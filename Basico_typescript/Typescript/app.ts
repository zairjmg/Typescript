//@ts-check
console.log("Hola mundo");

//Type
var myString: string = "hola mundo";
var myNumbre: number = 22
var myBool: boolean = true;
var myAny: any;
myAny = false;

/* document.write(myNumbre.toString()); */

/* Arrays */
var StringArray: string[] = ["Item1", "Item2", "Item3", ""];
var NumberArray: number[] = [1, 2, 3, 4];
var BoolArray: boolean[] = [true, false, true];
var AnyArray: any[] = [];

/* tuple */
var tuple: [string, number];
tuple = ['Hola', 26];

/* void, Undefined, null */
/* let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined; */

/* Functions */
function suma(num1: number, num2: number) {
    return num1 + num2;
}

let resta = function(num1: number|string, 
    num2: number|string):number {
        if (typeof(num1) === 'string') {
            num1 = parseInt(num1);
        }
        if (typeof(num2) === 'string') {
            num2 = parseInt(num2);
        }

    return num1 - num2;
}

function Nombre(firstname, lastname?): string {
    return `${firstname} ${lastname}`;
}

/* function myVoidFunction():void {
    return;
} */

document.write(Nombre('jair', 'mejia'));

/* Intrefaces */
interface ItoDo {
    title: string,
    text:string
}

function showTodo(toDo: {title: string; text:string;}) {
    console.log(`${toDo.title} - ${toDo.text}`);
}

let myTodo: ItoDo = {title: 'Eat Dinner', text: 'lorem'};

showTodo(myTodo);

/* Classes */

class User {
    private name: string;
    public email: string;
    protected age: number;

    constructor(name: string, email: string, age:number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register() {
        console.log(`${this.name} is registered`);
    }

    showMeage() {
        return this.age;
    }

    public ageInyears() {
        return this.age + ' years';
    }

    payInvoice() {
        console.log(`${this.name} paide invoice`);
    }
}

let datos = new User('jair', 'jairjmg@email.com', 26);

console.log(datos.register());
console.log(datos.ageInyears());

class Member extends User {
    id:number;

    constructor(id, name, email, age) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice(): void {
        super.payInvoice();
    }
}

let member = new Member(1, 'jose', 'jair.jmgu@email.com', 26);
member.payInvoice();


console.log('sigue actualizando');
