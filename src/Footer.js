import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const quotes = [
    "The enemy gate is down (Ender's Game)",
    "If what I think it's happening is happening, it better not be (Fantastic Mr. Fox)",
    "You gotta do it every day - that's the hard part. But it does get easier. (BoJack Horseman)",
    "I believe in a universe that doesn't care and in people who do (Night In The Woods)",
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="footer-container">
      <p className="footer-principal">
        {t("footer-thanks-1")}
        <a href="https://alvaro.gs" target="_blank" rel="noreferrer">
          Álvaro
        </a>{" "}
        {t("footer-thanks-2")}
      </p>
      <p className="footer-quote">{quote}</p>
    </div>
  );
};

export default Footer;
