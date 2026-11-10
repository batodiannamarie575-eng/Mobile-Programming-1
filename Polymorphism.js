class Person {
    name() {
        console.log("Hello!");
    }
}

class Student extends Person {
    name() {
        console.log("Dianna");
    }
}

let person = new Student();
person.name();