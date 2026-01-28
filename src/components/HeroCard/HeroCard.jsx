import './HeroCard.css';

export default function HeroCard({img, title, content}) {
  return (
    <>
      <div className="hero-card">
        <div className="hero-card-content">
          <div className="hero-card-image">
            <img src={img} alt="Card Image" />
          </div>
          <div className="hero-card-right">
            <div className="hero-card-title size--40 heading">
              {title}
            </div>
            <div className="hero-card-description weight--400 size--10">
              {content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}