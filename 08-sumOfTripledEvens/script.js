const arr = [4, 68, 29, 3, 60, 11, 235];

const filteredArr = arr.filter((num) => {
	return num % 2 === 0;
});

//quick reminder that single line anonymous functions (i.e. no brackets)
//don't need an explicit return statement
const mappedArr = filteredArr.map((num) => num * 3);

const reduced = mappedArr.reduce((total, currentNum) => {
	return total + currentNum;	
});

// end. Rest is just for practice displaying on web page.

const container = document.querySelector(".container");

const header = document.createElement("h1");
header.textContent = `Original Array: [${arr}]`;
container.appendChild(header);

const header2 = document.createElement("h1");
container.appendChild(header2);
header2.textContent = `Filtered: [${filteredArr}]`;

const header3 = document.createElement("h1");
container.appendChild(header3);
header3.textContent = `Mapped: [${mappedArr}]`;

const header4 = document.createElement("h1");
container.appendChild(header4);
header4.textContent = `Reduced: ${reduced}`;

const body = document.querySelector("body");
body.style.backgroundColor = "black";
body.style.color = "blue";

