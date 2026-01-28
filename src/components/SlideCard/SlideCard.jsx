import './SlideCard.css';

export default function SlideCard({img, label, content}) {
  return (
    <>
      <div className="slide-card">
        <div className="slide-card-img">
            <img src={img} alt="Card Image" />
        </div>
        <div className="slide-card-label heading weight--700 size--20">{label}</div>
        <div className="slide-card-content text weight--400 size--16">{content}</div>
      </div>
    </>
  );
}