let name = ["Dianna", "Rowelyn", "Sofia", "Jeruel"];
let age = [20, 17, 16, 11];
let yearLevel = ["thirdYear", "Grade12", "Grade11", "Grade6"];

for (let i = 0; i < age.length; i++) {
    if (age[i] >= 18)
        console.log(name[i] + " - Adult - " + yearLevel[i]);
    else if (age[i] >=13)
        console.log(name[i] + " - Teen - " + yearLevel[i]);
    else
        console.log(name[i] + " - Child - " + yearLevel[i]);
}

for (let n of name)
    console.log(n);

for (let a of age)
    console.log(a);

for (let y of yearLevel)
    console.log(y);
