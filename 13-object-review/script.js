
const myObject = {
    property: 'Value',
    otherProperty: 77,
    "final property": function() {
        //do something
    }
};

//dot notation
myObject.property; // 'Value'

//bracket notation
myObject["final property"]; //[Function]

let bigArray = [2, 5, 1, 9, 10, 4, 7, 27, 91];

let filtMapReduced = sumOfTripledEvens(bigArray);

console.log(filtMapReduced);


function sumOfTripledEvens(arr) {
    return arr.filter((num) => {
        return (num % 2 === 0);
    }).map((num) => {
        return num * 3;
    }).reduce((total, currNum) => {
        return total + currNum;
    })
}

let header1 = document.getElementById("originalArr");
let header2 = document.getElementById("newNum");

console.log(header1.textContent);
console.log(header2.textContent);

header1.innerText = "[" + bigArray + "]";  
header2.innerText = filtMapReduced;
header2.style.color = '#0008ff';

let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
  alert( prop ); // name, surname, age
}
