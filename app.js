const container = document.getElementById("container");
container.style.width = "800px";
container.style.height = "800px";

let userNumber = 16;

for (let i =  0; i < (userNumber ** 2); i++) {
    const squares = document.createElement("div");
    squares.style.width = `${parseInt(container.style.width)/userNumber}px`;
    squares.style.height = `${parseInt(container.style.height)/userNumber}px`;
    container.append(squares);
};

for (const child of container.children) {
    child.addEventListener("mouseenter", () => {
        child.classList.add("newClass");
    });
};

const button = document.querySelector("button");

button.addEventListener("click", handleButtonClick);

function handleButtonClick() {
    let userInput = prompt("Give me a number between 1 - 100.");

    const result = document.createElement("p");

    if (userInput === null) {
        result.innerText = "OK, maybe next time.";
        buttonDiv.append(result);
    } else if (userInput.toLowerCase() === "") {
        result.innerText = "Don't be shy, enter a number!";
        buttonDiv.append(result);
    } else if (userInput < 0 || userInput > 100) {
        result.innerText = "Please choose a number between 1 to 100 only!";
        buttonDiv.append(result);
    } else {
        userNumber = userInput;
    }
};