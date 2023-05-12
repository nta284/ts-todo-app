let id: number = 1;

id = 5;

let age: number = 20;
let str: string = "Hi";
let isStudent: boolean = true;
let anyTypeVariable: any = "anything"

let ids: number[] = [1, 3, 5, 34, 3];
let arr: any[] = ["abc", 2, true];

// Tuple
let person: [number, string, boolean] = [1, "A", false];

// Tuple Array
let people: [string, number][] = [
    ["m", 0],
    ["n", 1],
    ["o", 2]
]

// Union
let unionVariable: number | string = "hello";

// Enum
enum Direction {
    East,
    West,
    South,
    North
}

enum Direction2 {
    East = 2,
    West,
    South,
    North
}

enum Direction3 {
    East = "East",
    West = "West",
    South = "South",
    North = "North"
}

console.log(Direction[0]); // East
console.log(Direction.South); // 2
console.log(Direction2.South); // 4
console.log(Direction3.South); // South

// Object
type User = {
    name: string,
    age: number
}

const user: User = {
    name: "A",
    age: 18
}

// Type Assertion
let a: any = 5;
let b = <number>a;
let c = a as number;

console.log(typeof b); // number
console.log(typeof c); // number

// Function
function add(x: number, y: number): number {
    return a + b;
}

function log(msg: string): void {
    console.log(msg);
}

// Interfaces
interface Person {
    readonly name: string;
    age: number;
    isMale?: boolean;
}

const person1: Person = {
    name: "Person1",
    age: 24
}

person1.age = 22;

interface MyFunc {
    (num1: number, num2: number): number
}

const divide: MyFunc = (a, b) => {
    return a / b;
}

console.log(divide(9, 3));

// Classes
class Student {
    private name: string;
    protected grade: number;
    isMale: boolean;

    constructor(name: string, grade: number, isMale: boolean) {
        this.name = name;
        this.grade = grade;
        this.isMale = isMale;
    }

    getInfo(): string {
        return `${this.name} is in grade ${this.grade} and is ${this.isMale ? "male" : "female"}`;
    }
}

const student1 = new Student("Student 1", 9, true);

student1.name = "New name";
student1.grade = 10;
student1.isMale = false;

console.log(student1.getInfo());

interface EmployeeInterface {
    id: number;
    name: string;
    getInfo(): string;
}

class Employee implements EmployeeInterface {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.name = name;
        this.id = id;
    }

    getInfo(): string {
        return `${this.name} with id ${this.id}`;
    }
}

// Subclass
class Admin extends Employee {
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

// Generics
function identity<T>(arg: T): T {
    return arg;
}

const identity2 = <T>(arg: T): T => arg;

console.log(identity<number>(4));
console.log(identity<string>("hi"));
console.log(identity2<number>(5));

export { };