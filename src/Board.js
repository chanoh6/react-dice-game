import Dice from "./Dice";

const Board = ({name, color, gameHistory, className}) => {
    const num = gameHistory[gameHistory.length - 1] || 1;
    const sum = gameHistory.reduce((a, b) => a + b, 0);

    return (
        <div className={className}>
            <h2>{name}</h2>
            <Dice color={color} num={num} />
            <h2>총점</h2>
            <p>{sum}</p>
            <h2>기록</h2>
            <p>{gameHistory.join(', ')}</p>
        </div>
    );
};

export default Board;