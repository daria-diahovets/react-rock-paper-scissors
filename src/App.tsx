import { observer } from "mobx-react-lite";
import ChoiceController from "./components/ChoiceController";
import InfoPanel from "./components/InfoPanel";
import MenuControl from "./components/MenuControl";
import themes from "./store/themes";

const App = observer(() => {
  return (
    <div className={`wrapper ${themes.theme}`}>
      <MenuControl />
      <h1>🪨 Rock Paper Scissors Game 🪨</h1>
      <InfoPanel />
      <ChoiceController />
      <a
        className="copyright"
        target="_blank"
        href="https://t.me/drzoidberg_portfolio"
      >
        @dczoidberg
      </a>
    </div>
  );
});

export default App;
