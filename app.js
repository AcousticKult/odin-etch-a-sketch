const container = document.getElementById("container");
container.style.width = "800px";
container.style.height = "800px";

for (let i =  1; i < 16; i++) {
    const squareColumn = document.createElement("div");
    squareColumn.style.width = "50px";
    squareColumn.style.height = "50px";
    squareColumn.classList.add("squareColumn");
    container.append(squareColumn);

    for (let x = 1; x <= 16; x++) {
        const squareRow = document.createElement("div");
        squareRow.style.width = "50px";
        squareRow.style.height = "50px";
        squareRow.classList.add("squareRow");
        container.append(squareRow);
    }
}

const button = document.querySelector("button");

/* button.addEventListener("click", (event) => {
    container.append(square);
}) */
