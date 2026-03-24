// let call = function() {
//     console.log("salom");
// }
// if(false) {
//     call = function(){};
// };
// call();


// Decloration notation!

// function sum(num1,num2) {
//    return num1 + num2;
// }
// console.log(sum(12,34));

// function sqt(x) {
//     return x * x;
// }
// console.log(sqt(10));
// sqt = (x) => x*x;
// console.log(sqt(12));

// const sum = (num1,num2) => num1 + num2;
// console.log(sum(12,34));

// let age = prompt("What is your age?");
// let welcome = (age >18) ? () => alert("Hello") : alert("By");
// welcome();

// let sum2 = (a,b) => {
//     let result = a + b;
//     return result;
// }
// alert(sum2(1,4))

// const power = (base,exponent) => {
//     let result = 1;
//     for(let i = 0; i < exponent; i++){
//         result = base * result
//     }
//     return result;
// }
// console.log(power(4,7));

// let radius = 1;
// let x = 1;
// let y = 1;

// const circle = {
//     radius:1,
//     location: {
//         x:1,
//         y:1
//     },
//     isVisible:true,
//     draw:function() {
//         console.log("doira");
        
//     }
// }
// function draw() {};
// function move() {};

function createCircle() {
    return {
        circle = {
    radius:1,
    location: {
        x:1,
        y:1
    },
    isVisible:true,
    draw:function() {
        console.log("doira");
        
    }
}
    }
}
console.log(createCircle());





