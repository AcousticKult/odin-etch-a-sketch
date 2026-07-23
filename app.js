// create container with defined dimensions
const container = document.getElementById("container");
container.style.width = "800px";
container.style.height = "800px";

// create initial square size + highlight colour
let userNumber = 16;

createSquares(userNumber);
addHoverEffect();

function createSquares(userNumber) {
    for (let i =  0; i < (userNumber ** 2); i++) {
        const squares = document.createElement("div");
        squares.style.width = `${parseInt(container.style.width)/userNumber}px`;
        squares.style.height = `${parseInt(container.style.height)/userNumber}px`;
        squares.style.opacity = "0.1";
        container.append(squares);
    };
};

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

function getRandomColor() {
    return `rgb(${getRandomIntInclusive(0, 255)} ${getRandomIntInclusive(0, 255)} ${getRandomIntInclusive(0, 255)})`
};

function increaseOpacity(element) {
    // increase opacity by 0.1 (10%)
    return `${element.style.opacity} + 0.1`;
};

// add hover colour effect and change opacity in 10 interactions
function addHoverEffect() {
    for (const child of container.children) {
        child.addEventListener("mouseenter", () => {
            // child.classList.add("hoverEffect");
            child.style.backgroundColor = getRandomColor();
            increaseOpacity(child);
        });
    };
};

// create button for user input
const button = document.querySelector("button");
button.addEventListener("click", handleButtonClick);

// create user feedback display
let result = document.createElement("p");

function handleButtonClick() {
    let userInput = prompt("Give me a number between 1 - 100.");

    if (userInput === null || isNaN(userInput)) {
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
        console.log(userNumber);

        container.replaceChildren();
        createSquares(userNumber);
        addHoverEffect();
        
        result.textContent = "";
    }

    this.blur();
};