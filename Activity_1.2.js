class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return "Name: " + this.name;
    }
}

class PersonalInfo extends Person {
    #contact;

    constructor(name, age, contact) {
        super(name, age);
        this.#contact = contact;
    }

    introduce() {
        return "Personal Info: " + this.name;
    }

    getContact() {
        return this.#contact;
    }

    status() {
        if (this.age >= 18) {
            return "Adult";
        } else if (this.age >= 13) {
            return "Teenager";
        } else {
            return "Child";
        }
    }
}

class YearLevel extends Person {
    #level;

    constructor(name, age, level) {
        super(name, age);
        this.#level = level;
    }

    introduce() {
        return "Student: " + this.name;
    }

    getLevel() {
        return this.#level;
    }
}

class Student extends PersonalInfo {
    program() {
        return "BSIT";
    }
}

const p1 = {
    name: "Dianna",
    age: 20
};

const p2 = {
    name: "Marielle",
    age: 20
};

let school = "NWSSU";
let section = "3A";
let pass = 75;

let names = ["Dianna", "Marielle", "Jomarie"];
let ages = [20, 20, 21];
let hobbies = ["Reading", "Singing", "Drawing"];

let a = new PersonalInfo(p1.name, p1.age, "09535342959");
let b = new PersonalInfo(p2.name, p2.age, "09655375869");
let c = new YearLevel("Rodnie", 22, "3rd Year");
let d = new Student("Rodnie", 22, "09275317941");

console.log("       STUDENT INFORMATION: ");
console.log("School: " + school);
console.log("Section: " + section);

console.log("       PERSONAL INFORMATION: ");

console.log("Name: " + a.name);
console.log("Age: " + a.age);
console.log("Contact: " + a.getContact());
console.log("Status: " + a.status());

console.log("          INTRODUCTIONS: ");

console.log(a.introduce());
console.log(c.introduce());

console.log("        ACADEMIC STATUS: ");

if (a.age >= pass) {
    console.log("Dianna: Passed");
} else {
    console.log("Dianna: Failed");
}

if (b.age >= 90) {
    console.log("Marielle: Excellent");
} else {
    console.log("Marielle: Needs Improvement");
}

if (d.age >= 18) {
    console.log("Rodnie: Adult");
} else {
    console.log("Rodnie: Minor");
}

console.log("             NAMES: ");
for (let n of names) {
    console.log("- " + n);
}

console.log("             AGES: ");

for (let age of ages) {
    console.log("- " + age);
}

console.log("           HOBBIES: ");

hobbies.forEach(hobby => {
    console.log("- " + hobby);
});

console.log("         STUDENT DETAILS: ");

console.log("Name: " + d.name);
console.log("Age: " + d.age);
console.log("Year Level: " + c.getLevel());
console.log("Program: " + d.program());
console.log("Contact: " + d.getContact());
  