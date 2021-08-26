import { useEffect, useState } from "react";
import { setTheme } from "../utils/themes";
import "./Toggle.css";
import { useMediaQuery } from "react-responsive";

const Toggle = () => {
  const [togClass, setTogClass] = useState("default");
  const userPrefersDark = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });
  let theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-default") {
      setTheme("theme-alternate");
      setTogClass("alternate");
    } else {
      setTheme("theme-default");
      setTogClass("default");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-default") {
      setTogClass("default");
    } else if (localStorage.getItem("theme") === "theme-alternate") {
      setTogClass("alternate");
    }
  }, [theme]);

  if (userPrefersDark) {
    return (
      <div className="container--toggle">
        {togClass === "alternate" ? (
          <button className="toggle" onClick={handleOnClick}>
            🔆➡️🌙
          </button>
        ) : (
          <button className="toggle" onClick={handleOnClick}>
            🌙➡️🔆
          </button>
        )}
        <label htmlFor="toggle" className="toggle--label">
          <span className="toggle--label-background"></span>
        </label>
      </div>
    );
  } else {
    return (
      <div className="container--toggle">
        {togClass === "alternate" ? (
          <button className="toggle" onClick={handleOnClick}>
            🌙➡️🔆
          </button>
        ) : (
          <button className="toggle" onClick={handleOnClick}>
            🔆➡️🌙
          </button>
        )}
        <label htmlFor="toggle" className="toggle--label">
          <span className="toggle--label-background"></span>
        </label>
      </div>
    );
  }
};

export default Toggle;
