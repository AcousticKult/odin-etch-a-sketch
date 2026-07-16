// create container with defined dimensions
const container = document.getElementById("container");
container.style.width = "800px";
container.style.height = "800px";

// create initial square size + highlight colour
let userNumber = 16;

createSquares(userNumber);
addClassList();

function createSquares(userNumber) {
    for (let i =  0; i < (userNumber ** 2); i++) {
        const squares = document.createElement("div");
        squares.style.width = `${parseInt(container.style.width)/userNumber}px`;
        squares.style.height = `${parseInt(container.style.height)/userNumber}px`;
        container.append(squares);
    };
};

function addClassList() {
    for (const child of container.children) {
        child.addEventListener("mouseenter", () => {
            child.classList.add("newClass");
        });
    };
};

const button = document.querySelector("button");
button.addEventListener("click", handleButtonClick);

let result = document.createElement("p");

function handleButtonClick() {
    let userInput = prompt("Give me a number between 1 - 100.");

    if (userInput === null) {
        result.textContent = "OK, maybe next time.";
        buttonDiv.append(result);
    } else if (userInput.toLowerCase() === "") {
        result.textContent = "Don't be shy, enter a number!";
        buttonDiv.append(result);
    } else if (userInput < 1 || userInput > 100) {
        result.textContent = "Please choose a number between 1 to 100 only!";
        buttonDiv.append(result);
    } else {
        userNumber = parseInt(userInput);

        container.replaceChildren();
        createSquares(userNumber);
        addClassList();
        
        result.textContent = "";
    }

    this.blur();
};