"use strict";
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
exports.__esModule = true;
var id = 1;
id = 5;
var age = 20;
var str = "Hi";
var isStudent = true;
var anyTypeVariable = "anything";
var ids = [1, 3, 5, 34, 3];
var arr = ["abc", 2, true];
// Tuple
var person = [1, "A", false];
// Tuple Array
var people = [
    ["m", 0],
    ["n", 1],
    ["o", 2]
];
// Union
var unionVariable = "hello";
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["East"] = 0] = "East";
    Direction[Direction["West"] = 1] = "West";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["North"] = 3] = "North";
})(Direction || (Direction = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["East"] = 2] = "East";
    Direction2[Direction2["West"] = 3] = "West";
    Direction2[Direction2["South"] = 4] = "South";
    Direction2[Direction2["North"] = 5] = "North";
})(Direction2 || (Direction2 = {}));
var Direction3;
(function (Direction3) {
    Direction3["East"] = "East";
    Direction3["West"] = "West";
    Direction3["South"] = "South";
    Direction3["North"] = "North";
})(Direction3 || (Direction3 = {}));
console.log(Direction[0]); // East
console.log(Direction.South); // 2
console.log(Direction2.South); // 4
console.log(Direction3.South); // South
var user = {
    name: "A",
    age: 18
};
// Type Assertion
var a = 5;
var b = a;
var c = a;
console.log(typeof b); // number
console.log(typeof c); // number
// Function
function add(x, y) {
    return a + b;
}
function log(msg) {
    console.log(msg);
}
var person1 = {
    name: "Person1",
    age: 24
};
person1.age = 22;
var divide = function (a, b) {
    return a / b;
};
console.log(divide(9, 3));
// Classes
var Student = /** @class */ (function () {
    function Student(name, grade, isMale) {
        this.name = name;
        this.grade = grade;
        this.isMale = isMale;
    }
    Student.prototype.getInfo = function () {
        return "".concat(this.name, " is in grade ").concat(this.grade, " and is ").concat(this.isMale ? "male" : "female");
    };
    return Student;
}());
var student1 = new Student("Student 1", 9, true);
student1.name = "New name";
student1.grade = 10;
student1.isMale = false;
console.log(student1.getInfo());
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.name = name;
        this.id = id;
    }
    Employee.prototype.getInfo = function () {
        return "".concat(this.name, " with id ").concat(this.id);
    };
    return Employee;
}());
// Subclass
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Admin;
}(Employee));
// Generics
function identity(arg) {
    return arg;
}
var identity2 = function (arg) { return arg; };
console.log(identity(4));
console.log(identity("hi"));
console.log(identity2(5));
