//good use of const vars
// consts never change throughout the script
//caps are used for hard-coded pre-execution values
const COLOR_RED = '#F00';
const COLOR_GREEN = '#0F0';


//declare a variable
let message;
//assign value to a variable
message = 'Hello';

//combine decl and assignment, using mulitple vars
let user = 'Cal', 
    num = 23, 
    word = 'Hey';

word = 'Well hi!';

//alert(user + ' says: ' + word); //shows variable content
let fav_color = COLOR_RED;

let admin = 'Fernando';
let name = 'Marcos';

name = 'John';
admin = name;
//console.log(admin);

let myPlanet = 'earth';
let currUser = 'Me';

const BIRTHYEAR = 2000;
const age = someCode(BIRTHYEAR);
// alert(age);

let x = 100 + 50;
let y = 50 + x;

let z = y - 200;
z = (x + y + z) * 5;

x = 0x7D0;

//alert("converted from hex: " + x);

console.log(23 +97);

console.log(94 + 32 + 42 + 1 + 63 + 4);

console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);
let b = 7 * a;
console.log("b = " + b);

const MAX = 57;
let actual = MAX - 13;
let percentage = actual/MAX;
percentage = percentage.toFixed(3);

let string1 = "85";
let string2 = "15";

let sum = (+string1 + +string2);
console.log(sum);


function someCode(birthYear) {
    let age = new Date().getFullYear() - birthYear;
    return age;
}





