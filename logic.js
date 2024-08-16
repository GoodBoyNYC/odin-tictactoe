const updateScreen = (cell, turnCount) => {
    if (cell.textContent === '') {
        if (turnCount % 2 == 0) {
            cell.textContent = 'X';
        }
        else {
            cell.textContent = 'O';
        }
    }
};

const checkBoard = (arr) => {
    const winConditions = [
        /*Row*/[0, 1, 2],
        /*Row*/[3, 4, 5],
        /*Row*/[6, 7, 8],
        /*Column*/[0, 3, 6],
        /*Column*/[1, 4, 7],
        /*Column*/[2, 5, 8]
    ];

    winConditions.forEach(condition => {
        const [a, b, c] = condition;

        //console.log(`Comparing: arr[${a}] (${arr[a]}), arr[${b}] (${arr[b]}), arr[${c}] (${arr[c]})`);

        if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
            console.log(`Winner: ${arr[a]}`);
            //updateScore
            return `Winner: ${arr[a]}`;
        }
    })
    //console.log("2no winner");
    return 'No Winner';
};


const game = (function () {
    const cells = document.querySelectorAll(".cell");
    const btnReset = document.querySelector(".reset");
    let turnCount = 0;
    const board = Array.from(cells).map(cell => cell.textContent);
    btnReset.addEventListener("click", event => {
        turnCount = 0;
        cells.forEach(cell => {
            cell.innerHTML = '';
        })
    })
    cells.forEach(cell => {
        cell.addEventListener("click", event => {
            if (cell.textContent === '' && turnCount != 9) {
                updateScreen(cell, turnCount);
                console.log(turnCount++);
                checkBoard(board);
            }
            else {
                console.log("No winner");
            }
        })
    });
})();

// function createPlayer(name) {
//     const playerName = name;
//     let score = 0;
//     const getScore = () => score;
//     const updateScore = () => score++;

//     return { name, getScore, updateScore };
// }