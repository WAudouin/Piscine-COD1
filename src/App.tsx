import { useEffect, useState } from "react";
import "./App.scss";
import HeroCard from "./components/HeroCard/HeroCard";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Slider from "./components/Slider/Slider";
import heroesData from "./data/heroes.json";
import { Hero } from "./interfaces/Hero";

function App() {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const [heroes, setHeroes] = useState<Hero[]>([]);

  const [nightMode, setNightMode] = useState<boolean>(false);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const totalScrollableDistance = documentHeight - windowHeight;
    const currentScrollPercentage = (scrollTop / totalScrollableDistance) * 100;

    setScrollPercentage(Math.round(currentScrollPercentage));
  };

  useEffect(() => {
    setHeroes(heroesData);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ProgressBar scrollPercentage={scrollPercentage} />
      <header>
        <span className="logo">LA PISCINE</span>
        <span className="percentage">{scrollPercentage}%</span>
        <button
          onClick={toggleNightMode}
          className={`switch ${nightMode ? "night" : ""}`}
        >
          <img src={`/switch-icon.svg`} alt="Switch icon" />
        </button>
      </header>
      <section className="hero">
        <article className="caption">
          <span>
            Que le plus fort,
            <br />
            <img src={`/caption-icon.svg`} alt="Caption icon" />
            l'emporte!
          </span>
        </article>
        <img src={`/card-hero.svg`} alt="Logo" />
      </section>
      <Slider />
      <section className="heroes-list">
        {heroes.map((hero) => {
          return <HeroCard hero={hero} key={hero.category} />;
        })}
        <article className="final-frame">
          <span className="subtitle">/ FINALE02</span>
          <span className="big-caption">Click Me ? Might enter the finals</span>
          <a href="https://www.linablidi.com/" target="_blank" className="CTA">
            <img src={`/bigcaption.svg`} alt="Caption link" />
          </a>
          <img className="caption-smiley" src={`/smiley.svg`} alt="Smiley" />
        </article>
      </section>

      <footer>
        <span className="logo">LA PISCINE</span>
        <span>{scrollPercentage}%</span>
        <span>@2024</span>
      </footer>
    </>
  );
}

export default App;
