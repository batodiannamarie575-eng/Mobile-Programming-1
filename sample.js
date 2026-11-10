const student = {
    name: "Marielle",
    program: "BSIT",
    introduce: function() {
        console.log(`Hi, I'm ${this.name} from ${this.program}`)
    }
};

student.introduce(); 
