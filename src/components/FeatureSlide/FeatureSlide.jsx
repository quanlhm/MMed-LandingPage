import "./FeatureSlide.css";
import SlideCard from "../../components/SlideCard/SlideCard.jsx";

export default function FeatureSlide({ item }) {
  return (
    <>
      <div className="feature-slide">
        <div className="feature-slide-left">
          <div className="left-container">
            <div className="slide-label heading weight--700 size--24">
              {item.label}
            </div>
            <div className="slide-content text weight--700 size--20">
              {item.content}
            </div>
          </div>
        </div>
        <div className="feature-slide-right">
          <div className="right-container">
            {item.cards.map((card, index) => (
              <SlideCard
                img={card.img}
                label={card.label}
                content={card.content}
                key={index}
              />
            ))}
          </div>
          <div className="right-bottom"></div>
        </div>
      </div>
    </>
  );
}
