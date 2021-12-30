import "./AboutMe.css";
import { useTranslation } from "react-i18next";
import Gregg from "./assets/Gregg.svg";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <section className="about-me-container">
      <figure className="gregg-logo">
        <img src={Gregg} alt="Gregg Logo" style={{ height: "3em" }} />
      </figure>
      <div>
        <p>
          {t("title-p1-1")}{" "}
          <span className="about-me-name">Gonzalo García Granés</span>{" "}
          {t("title-p1-prons")} {t("title-p1-2")} {t("title-p1-3")}
        </p>
        <p>
          {t("title-p2-1")}{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Gonza116"
          >
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
        </p>
        <p>
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
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
