# 🪨 Rock Paper Scissors Game 🪨

Welcome to the **Rock Paper Scissors** Game! Test your luck and strategy in this classic Rock Paper Scissors game! Choose your move and play against the computer to see who wins. It's a quick and fun way to challenge your reflexes and decision-making skills. Perfect for a short break!

---

![Screenshot](https://raw.githubusercontent.com/daria-diahovets/react-rock-paper-scissors/master/screenshot.png)

---

## 🔍 Features

- **Play Game**: and have a good time.
- **Toggle Music**: make your choice with great ambient.
- **Toggle Sound**: make website more alive.
- **Change Theme**: choose your white/dark side.

---

## 📉 Technologies

- **React 19** with TypeScript
- **MobX** for state management
- **localStorage** for theme persistence

---

## 📊 State Management Details

### GameState

```typescript
export enum PossibleChoice {
  Rock = "ROCK",
  Paper = "PAPER",
  Scissors = "SCISSORS",
}
isGameRunning: boolean = true;
playerChoice: PossibleChoice | null = null;
computerChoice: PossibleChoice | null = null;
summaryText: string = "Make your choice!";
```

### ThemeState

```typescript
const getTheme = () => {
  let theme: TTheme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme") as TTheme;
  }
  return theme;
};
theme: TTheme = getTheme();
```

- Themes are stored and loaded from `localStorage`.

---

## 💻 How to Run Locally

```bash
git clone https://github.com/daria-diahovets/react-rock-paper-scissors.git
cd rock-paper-scissors
npm install
npm run dev
```

---

## 🎉 Join my Telegram Channel!

[Join Telegram](https://t.me/drzoidberg_portfolio)

Enjoy and happy coding! 🚀
