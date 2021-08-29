import "./Title.css";
import { useTranslation } from "react-i18next";

const Title = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="Header">
        <p className="OverTitle">{t("OverTitle")}</p>
        <h1 className="Title">Gonzalo García Granés</h1>
        <p className="UnderTitle">{t("UnderTitle")}</p>
      </div>
      <div className="links-container">
        <a href="https://github.com/Gonza116" target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        <a
          href="https://es.linkedin.com/in/gonzalogarciagranes"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        <a
          href="mailto:gonzalogranes@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Mail
        </a>
      </div>
    </div>
  );
};

export default Title;
