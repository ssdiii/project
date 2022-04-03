"use strict";

let nam = 20;

function showFirstMassage(text) {
    console.log(text);
    console.log(nam)
}

showFirstMassage("hello world");
console.log(nam);

function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));


function ret() {
    let nam = 50;



    //


    return nam;
}
const anoherNum = ret();
console.log(anoherNum);



const logger = function() {
    console.log("hello");
};

logger();