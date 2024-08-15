const updateScreen = (cell) => {
    cell.textContent = 'X';
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
        
        console.log(`Comparing: arr[${a}] (${arr[a]}), arr[${b}] (${arr[b]}), arr[${c}] (${arr[c]})`);

        if(arr[a]&& arr[a]=== arr[b] && arr[a] === arr[c]){
            return `Winner: ${arr[a]}`;
        }
    })

    return 'No Winner';
};

const screenController = (function () {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("click", event => {
            updateScreen(cell);
            const board = Array.from(cells).map(cell => cell.textContent);
            checkBoard(board);
        })
    });
})();

