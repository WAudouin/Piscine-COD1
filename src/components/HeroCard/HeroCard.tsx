import { Hero } from "../../interfaces/Hero";
import HeadlinerBadge from "../HeadlinerBadge/HeadlinerBadge";
import "./HeroCard.scss";

export interface HeroCardProps {
  hero: Hero;
}

const HeroCard = ({ hero }: HeroCardProps) => {
  return (
    <article
      className="hero-card"
      style={{ backgroundColor: `${hero.lightColor}` }}
    >
      <div className="header">
        <div className="category-and-points">
          <span className="category">{hero.category.toLocaleUpperCase()}</span>
          <span className="points">/{hero.maxPoints} pts</span>
        </div>
        <span className="hero-name">{hero.heroName.toLocaleUpperCase()}</span>
        <div className="headliners">
          {hero.headliners.map((hl) => {
            return (
              <HeadlinerBadge
                name={hl}
                bgColor={hero.midColor}
                borderColor={hero.darkColor}
                key={hl}
              />
            );
          })}
        </div>
      </div>
      <div className="content">
        <img
          className="hero-picture"
          src={`/heroes-pictures/${hero.picture}`}
          alt={hero.heroName}
        />
        <div className="hero-description">
          <p dangerouslySetInnerHTML={{ __html: hero.first_part_desc }} />
          <p dangerouslySetInnerHTML={{ __html: hero.second_part_desc }} />
        </div>
      </div>

      <img
        className="hero-icon"
        src={`/heroes-icons/${hero.icon}`}
        alt={hero.heroName}
      />
    </article>
  );
};

export default HeroCard;
