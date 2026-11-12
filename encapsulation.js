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

person.name = "Rowelyn Bato";
console.log(person.name);
