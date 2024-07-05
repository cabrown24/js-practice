const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey, I'm red!";
container.appendChild(para);

const blueHeader = document.createElement("h3");
blueHeader.style.color = "blue";
blueHeader.textContent = "Im a blue h3";
container.appendChild(blueHeader);

const funDiv = document.createElement("div");
funDiv.style.backgroundColor = "pink";
funDiv.style.border = "2px solid black";

const innerHeader = document.createElement("h1");
innerHeader.textContent = "I'm in a div";
innerHeader.style.textAlign = "Center";
funDiv.appendChild(innerHeader);

const innerPara = document.createElement("p");
innerPara.textContent = "ME TOO";
innerPara.style.textAlign = "Center";
funDiv.appendChild(innerPara);


container.appendChild(funDiv);

// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

// const btn2 = document.querySelector("#btn2");
// btn2.addEventListener("click", function (e) {
//     if(e.target.style.background === 'blue') {
//         e.target.style.background = "red";
//     }
//     else  {
//         e.target.style.background = "blue";
//     }
// })

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
})