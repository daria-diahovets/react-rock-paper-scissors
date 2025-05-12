import { makeAutoObservable } from "mobx";

type TTheme = "light-theme" | "dark-theme";

const getTheme = () => {
  let theme: TTheme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme") as TTheme;
  }
  return theme;
};

class Themes {
  theme: TTheme = getTheme();
  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme() {
    this.theme = this.theme === "light-theme" ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", this.theme);
  }
}

export default new Themes();