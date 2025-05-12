import { makeAutoObservable } from "mobx";

export enum PossibleChoice {
  Rock = "ROCK",
  Paper = "PAPER",
  Scissors = "SCISSORS",
}

class Game {
  isGameRunning: boolean = true;
  playerChoice: PossibleChoice | null = null;
  computerChoice: PossibleChoice | null = null;
  summaryText: string = "Make your choice!";

  constructor() {
    makeAutoObservable(this);
  }

  rndComputerValue() {
    const rndChange = Math.floor(Math.random() * 12);
    if (rndChange < 4) {
      this.computerChoice = PossibleChoice.Rock;
    } else if (rndChange < 8) {
      this.computerChoice = PossibleChoice.Paper;
    } else {
      this.computerChoice = PossibleChoice.Scissors;
    }
    return this.computerChoice;
  }

  getCompareValue(computer: PossibleChoice, player: PossibleChoice) {
    if (computer === player) {
      this.summaryText = "You have a draw!";
    } else if (
      (computer === PossibleChoice.Rock &&
        player === PossibleChoice.Scissors) ||
      (computer === PossibleChoice.Paper && player === PossibleChoice.Rock) ||
      (computer === PossibleChoice.Scissors && player === PossibleChoice.Paper)
    ) {
      this.summaryText = "You lose!";
    } else {
      this.summaryText = "You won!";
    }
  }

  gameHandler(option: PossibleChoice) {
    if (this.isGameRunning) {
      this.playerChoice = option;
      this.computerChoice = this.rndComputerValue();
      this.getCompareValue(this.computerChoice, this.playerChoice);
      this.isGameRunning = false;
    }
  }

  resetGame() {
    this.isGameRunning = true;
    this.playerChoice = null;
    this.computerChoice = null;
    this.summaryText = "Make your choice!";
  }
}

export default new Game();
