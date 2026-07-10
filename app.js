const container = document.getElementById("container");
container.style.width = "800px";
container.style.height = "800px";

const userNumber = 16;

for (let i =  0; i < (userNumber ** 2); i++) {
    const squares = document.createElement("div");
    squares.style.width = `${parseInt(container.style.width)/userNumber}px`;
    squares.style.height = `${parseInt(container.style.height)/userNumber}px`;
    // squares.classList.add("squares");
    console.log(squares.style.width);
    container.append(squares);
}

const button = document.querySelector("button");

/* button.addEventListener("click", (event) => {
    container.append(square);
}) */
