import "./AboutSlide.css";

export default function AboutSlide({item}) {

  return (
    <>
      <div className="about-slide">
        <div className="about-slide-content text weight--400 size--16">{item.content}</div>
        <div className="about-slide-author heading weight--700 size--20">{item.author}</div>
      </div>
    </>
  );
}
