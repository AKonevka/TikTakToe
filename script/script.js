// Начинает игрок X
let currentPlayer = "X";
// Устанавливает начальное значение переменной, которая показывает, завкршенна ли игра
let gameEnded = false;
//Создает пустое полу для игры
let board = ["", "", "", "", "", "", "", "", ""];
//определяет выгрышные комбинации для игры
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// Функция, вызываемая при клике на ячейку
function cellCliked(cellIndex) {
    // проверяет, что игра не завершена и выбранная яейка пуста
    if (!gameEnded && board[cellIndex] === "") {
        //получает элемент ячейки по его индексу
        const cell = document.getElementById(`cell${cellIndex}`);
        // Устанави=ливает текст ячейка в значение текущего игрока
        cell.textContent = currentPlayer;
        // Устанавливаем атрибут data-value в значение текущего игрока
        cell.setAttribute('data-value', currentPlayer);
        //Записывает значение текущего игрока в массив игрового поля
        board[cellIndex] = currentPlayer;
        //Проверяет, выиграл ли текущий игрок
        if (checkWinner(currentPlayer)) {
            //Выводит сообщение о победе текущего игрока
            document.getElementById("message").textContent = `Игрок ${currentPlayer} победил!`;
            //Устанавливает, что игра завершенна
            gameEnded = true;
        } else if (isBoardFull()) {
            // Выводит сообщение о ничьей, если игровое поле полностью заполнено
            document.getElementById("message").textContent = "Ничья!";
            //Устанавливает, что игра завершенна
            gameEnded = true;
        } else {
            //Переключает текущего игрока
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }


}

// Функция, которая проверяет, выиграл ли игрок
function checkWinner(player) {
    // Перебирает все выигрышние комбинации
    for (const pattern of winPatterns) {
        //получае индексы ячеек из текущей выигрышной комбинации
        const [a, b, c] = pattern;
        // Проверяет, что все три ячейки имеют значение текущего игрока 
        if (board[a] === player && board[b] === player && board[c] === player) {
            // Возвращает true, если текущий игрок выйграл
            return true;
        }
    }
}
// функция, которая проверят, заполнено ли игровое 
function isBoardFull() {
    // Взовращает true, если все ячейки заполнены
    return board.every(cell => cell !== "");
}

