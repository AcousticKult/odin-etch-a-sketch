const container = document.getElementById("container");
container.style.width = "800px";
container.style.height = "800px";

const userNumber = "16";

for (let i =  1; i < (userNumber ** 2); i++) {
    const squares = document.createElement("div");
    squares.style.width = container.style.width / userNumber;
    squares.style.height = squares.style.width;
    // squares.classList.add("squares");
    container.append(squares);

    /*;
        squareRow.style.height = "50px";
        squareRow.classList.add("squareRow");
        container.append(squareRow);
    }*/
}

const button = document.querySelector("button");

/* button.addEventListener("click", (event) => {
    container.append(square);
}) */
