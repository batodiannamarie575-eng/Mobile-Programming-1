class Person {
    #name;

    get name() {
        return this.name;
    }
    set name(name) {
        this.name = name;
    }
}

let person = new Person();

person.name = "Dianna Marie";
console.log(person.name);
