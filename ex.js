"use strict";
// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן
// דגשים
// שחקן  יכול לבחור בין אבן נייר ומספרים בלבד! אך שחקן יכול שלא תהיה לו בחירה
// התכנית יכולה להחזיר את המחרוזות
// 'tie', 'player1', 'player2'
// התשובה חייבת להכיל
// ENUM
// type/interface
// union
// במידה ולשחקן אין בחירה הצג זרקו שגיאה
// ממשו את הפונקציה הוסיפו טיפוסים לפרמטרים ולערך החזרה של הפונקציה
var option;
(function (option) {
    option[option["rook"] = 0] = "rook";
    option[option["preper"] = 1] = "preper";
    option[option["scissors"] = 2] = "scissors";
})(option || (option = {}));
function playGame(player1, player2) {
    const check = option[player1] - option[player2];
    if (check === 0)
        return "tie";
    if (check === 1 || check === -2)
        return "player1";
    return "player2";
}
const play = playGame("scissors", "preper");
console.log(play);
