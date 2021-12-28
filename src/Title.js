import "./Title.css";
import { useTranslation } from "react-i18next";
// import { Gregg } from "./assets/Gregg";
import Gregg from "./assets/Gregg.svg";

const Title = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="Header">
        <img src={Gregg} alt="Gregg Logo" style={{ height: "3em" }} />
        <br />
        {t("title-p1-1")} <b>Gonzalo García Granés</b> {t("title-p1-prons")}{" "}
        <br />
        {t("title-p1-2")}
        <br />
        {t("title-p1-3")}
        <br />
        <br />
        {t("title-p2-1")}{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/Gonza116">
          GitHub
        </a>{" "}
        {t("title-p2-2")}{" "}
        <a
          href="https://drive.google.com/file/d/1BQwnZglSSSR3FSX1ZJ-_REm670-MFpTB/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          {t("title-p2-3")}
        </a>
        .
        <br />
        <br />
        {t("title-p3-1")}{" "}
        <a
          href="mailto:gonzalogranes@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          {t("title-p3-2")}
        </a>{" "}
        {t("title-p3-3")}{" "}
        <a
          href="https://linkedin.com/in/gonzalogarciagranes"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        .
      </div>
    </div>
  );
};

export default Title;
