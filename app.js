let firstName = "Santita";

const numberOfStates = 50;

let num1 = 5 + 4;

// This is a JavaScript file

function sayHello() {
    alert("Hello World!");
}

sayHello();


function checkAge(name, age) {
    if(age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

checkAge("Charles", 21);

checkAge("Abby", 27);

checkAge("James", 18);

checkAge("John", 17);

let favoriteVegetables = ["Avocado", "Broccoli", "Cabbage", "Kale"];

for( let a = 0; a < favoriteVegetables.length; a++) {
    console.log(favoriteVegetables[a]);
}

let pet = {
    name:"Koda",
    breed: "Toy Poddle"
};

console.log(pet.name);
console.log(pet.breed);

let family = [
    {
        name: "Tristan",
        age: 6
    },
    {
        name: "Sandra",
        age: 68
    },
    {
        name: "Chloe",
        age: 11
    },
    {
        name: "Juanita",
        age: 21
    },
    {
        name: "Cyriah",
        age: 6
    }
];

for(let b = 0; b < family.length; b++) {
    checkAge(family[b].name, family[b].age); 
}


function getLength(word) {
    console.log(word.length);
    if(word.length % 2 == 0) {
        console.log("The worls is nice and even!");
    } else {
        console.log("The World is an odd plac!");
    }
}

getLength("Hello World");

