function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function keepTheme() {
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "theme-default") {
      setTheme("theme-default");
    } else if (localStorage.getItem("theme") === "theme-alternate") {
      setTheme("theme-alternate");
    }
  } else {
    setTheme("theme-default");
  }
}

module.exports = {
  setTheme,
  keepTheme,
};
