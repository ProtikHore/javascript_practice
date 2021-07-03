"use strict";

var x = 3;

function myFunc() {
    var y = 10;
    var x = 5
    console.log(x + 'from myfunc');
}

myFunc();

console.log(x);
//console.log(y);