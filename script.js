document.addEventListener('DOMContentLoaded', function() { 
    createBoard(16);
    console.log('h');

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function() {  
        let size = getSize();
        createBoard(size);
    });

    let color = "black";
});

function createBoard(size) { 
    let board = document.querySelector(".board");
    board.innerHTML = ''; // Clear the board before creating a new one

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numbDivs = size * size;

    for (let i = 0; i < numbDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize() { 
    let input = prompt('What will be the size of the board?'); 
    let message = document.querySelector("#message");

    if (input === "" || input === null) {
        message.innerHTML = "Please provide a number";
        return 16; // Default size if no input
    }

    input = parseInt(input); // Convert input to an integer

    if (input < 1 || input > 100) { 
        message.innerHTML = "Provide a number between 1 and 100";
        return 16; // Default size if out of bounds
    } else { 
        message.innerHTML = "Now you can play";
        return input;
    }
}

function colorDiv() { 
    if (color === "random") { 
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else { 
        this.style.backgroundColor = "black";
    }
}

function setColor(colorChoice) { 
    color = colorChoice;
}

function resetBoard() { 
    let divs = document.querySelectorAll('.board div'); // Select only divs within the board
    divs.forEach((div) => div.style.backgroundColor = 'white');
}
