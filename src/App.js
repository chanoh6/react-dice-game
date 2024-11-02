import { useState } from "react";
import Button from "./Button";
import Board from "./Board";
import AppLogo from "./assets/logo.png";
import "./App.css";

const random = (n) => {
  return Math.ceil(Math.random() * n);
};

const App = () => {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className="App">
      <div>
        <img className="App-logo" src={AppLogo} alt="주사위게임 로고" />
        <h1 className="App-title">주사위게임</h1>
        <div>
          <Button className="App-button" color="blue" onClick={handleRollClick}>
            던지기
          </Button>
          <Button className="App-button" color="red" onClick={handleClearClick}>
            처음부터
          </Button>
        </div>
      </div>
      <div className="App-boards">
        <div className="Board App-board">
          <Board name="나" color="blue" gameHistory={myHistory} />
        </div>
        <div className="Board App-board">
          <Board name="상대" color="red" gameHistory={otherHistory} />
        </div>
      </div>
    </div>
  );
};

export default App;
