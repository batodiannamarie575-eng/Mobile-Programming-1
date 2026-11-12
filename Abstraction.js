class Greetings {
    #method1()
    {
        console.log("Good Day!");
    }
    method2()
    {
        this.#method1();
        console.log("Above output from method1")
    }
}
let obj = new Greetings();
obj.method2;