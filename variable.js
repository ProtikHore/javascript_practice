// var vairable is funtional scope
// let vairable is block scope
// const variable is block scope
// let variable can reassign but can not declare twice
// const variable can not ve reassign


if(true) {
    var varVariable = 'This is var';
    var varVariable = 'This is var again'; // no error and replace
}
console.log(varVariable);



if(true) {
    let letVariable = 'This is let';
    letVariable = 'This is new let';
    //let letVariable = 'This is let again'; // give error; can not declare twice a let variable
    console.log(letVariable); // will print
}
//console.log(letVariable); //give error




if(true) {
    const constVariable = 'This is const';
    //constVariable = 'This is new const'; // can not reassign

    const constObject = {
        name: 'Protik',
        age: 25
    }

    constObject.age = 30; // can change object properties value in const variable
    console.log(constVariable);
    console.log(constObject);
}
//console.log(letVariable);

var a = 5;
function f() {
    a = 6;
    console.log(a);
}
//console.log(a);
f();
console.log(a);


let b = 10;
function ff() {
    b = 20;
    console.log(b);
}
//console.log(b);
ff();
console.log(b);