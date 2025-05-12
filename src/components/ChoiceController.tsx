import { observer } from "mobx-react-lite";
import "./ChoiceController.css";
import game from "../store/game";
import { PossibleChoice } from "../store/game";
import sounds from "../store/sounds";

const ChoiceController = observer(() => {
  const rockBtnHandler = () => {
    if (sounds.isSoundOn) {
      const sound = new Audio("sounds/rock.mp3");
      sound.play();
    }

    game.gameHandler(PossibleChoice.Rock);
  };

  const paperBtnHandler = () => {
    if (sounds.isSoundOn) {
      const sound = new Audio("sounds/paper.mp3");
      sound.play();
    }

    game.gameHandler(PossibleChoice.Paper);
  };

  const scissorsBtnHandler = () => {
    if (sounds.isSoundOn) {
      const sound = new Audio("sounds/scissors.mp3");
      sound.play();
    }
    game.gameHandler(PossibleChoice.Scissors);
  };

  return (
    <div className="choice-block block">
      <h2>Let's Play!</h2>
      <div className="choice-btns">
        <button
          className={`choice-btn btn ${
            game.playerChoice === PossibleChoice.Rock ? "clicked" : ""
          }`}
          onClick={rockBtnHandler}
        >
          <svg
            width="45"
            height="52"
            viewBox="0 0 45 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_20_169)">
              <path
                d="M0.775391 51.2186H44.2246"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M41.3308 46.9113V19.4078C41.3308 9.12094 33.056 0.781433 22.8488 0.781433C12.6386 0.781433 4.36377 9.12094 4.36377 19.4078V46.9081"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M22.8457 13.6721V38.4624"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M31.8001 21.8552H13.7275"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_20_169">
                <rect width="45" height="52" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button
          className={`choice-btn btn ${
            game.playerChoice === PossibleChoice.Paper ? "clicked" : ""
          }`}
          onClick={paperBtnHandler}
        >
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.8027 26.6601C43.6111 26.6601 45.077 23.7775 45.077 20.2216C45.077 16.6658 43.6111 13.7832 41.8027 13.7832C39.9943 13.7832 38.5283 16.6658 38.5283 20.2216C38.5283 23.7775 39.9943 26.6601 41.8027 26.6601Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M52.1299 20.2216C52.1299 30.3614 47.5054 38.5795 41.8022 38.5795C36.0991 38.5795 31.4746 30.3614 31.4746 20.2216C31.4746 10.0818 36.0956 1.86725 41.8022 1.86725C47.5089 1.86725 52.1299 10.0853 52.1299 20.2216Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M41.8027 38.5795H12.1977C6.4911 38.5795 1.87012 30.3614 1.87012 20.2216C1.87012 10.0818 6.4911 1.86725 12.1977 1.86725H41.8027C36.096 1.86725 31.475 10.0853 31.475 20.2216C31.475 30.358 36.096 38.5795 41.8027 38.5795Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M52.1299 20.2216V48.2371C52.1299 50.3879 50.3831 52.1293 48.2257 52.1293H21.7142C19.5568 52.1293 17.8101 50.3879 17.8101 48.2371V43.1134"
              stroke="currentColor"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          className={`choice-btn btn ${
            game.playerChoice === PossibleChoice.Scissors ? "clicked" : ""
          }`}
          onClick={scissorsBtnHandler}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_20_179)">
              <path
                d="M11.6405 22.1725C17.5516 22.1725 22.3435 17.4173 22.3435 11.5514C22.3435 5.68557 17.5516 0.930359 11.6405 0.930359C5.7294 0.930359 0.9375 5.68557 0.9375 11.5514C0.9375 17.4173 5.7294 22.1725 11.6405 22.1725Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M11.6405 51.0696C17.5516 51.0696 22.3435 46.3144 22.3435 40.4486C22.3435 34.5827 17.5516 29.8275 11.6405 29.8275C5.7294 29.8275 0.9375 34.5827 0.9375 40.4486C0.9375 46.3144 5.7294 51.0696 11.6405 51.0696Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M19.8008 33.5787L51.0623 7.53595"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M33.1855 29.18L51.0627 44.4529"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M20.1235 18.0231L29.079 25.6707"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_20_179">
                <rect width="52" height="52" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
});

export default ChoiceController;
