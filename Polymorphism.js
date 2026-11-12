class Person {
    name() {
        console.log("Good Day!");
    }
}

class Student extends Person {
    name() {
        console.log("Dianna");
    }
}

let person = new Student();
person.name();