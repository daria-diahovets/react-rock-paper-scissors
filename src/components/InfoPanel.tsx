import { observer } from "mobx-react-lite";
import "./InfoPanel.css";
import game from "../store/game";
import sounds from "../store/sounds";

const InfoPanel = observer(() => {
  const resetHandler = () => {
    sounds.playClick();
    game.resetGame();
  };

  return (
    <div className="main-block block">
      <div className="info-block block">
        <div className="text">
          Your choice:{" "}
          <b>
            {game.playerChoice === null
              ? "_ _ _ _"
              : game.playerChoice.slice(0, 1) +
                game.playerChoice.slice(1).toLowerCase()}
          </b>
        </div>
        <div className="text">
          Computer choice:{" "}
          <b>
            {game.computerChoice === null
              ? "_ _ _ _ _ _"
              : game.computerChoice.slice(0, 1) +
                game.computerChoice.slice(1).toLowerCase()}
          </b>
        </div>
        <div className="result">{game.summaryText}</div>
      </div>
      <button className="reset-btn btn" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
});

export default InfoPanel;
