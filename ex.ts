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
enum option {
  rook,
  preper,
  scissors,
}

type options = keyof typeof option;

const playGame = (player1: options, player2: options) => {
  const check = option[player1] - option[player2];
  if (check === 0) return "tie";
  if (check === 1 || check === -2) return "player1";
  return "player2";
};

const play = playGame("scissors", "preper");
console.log(play);
