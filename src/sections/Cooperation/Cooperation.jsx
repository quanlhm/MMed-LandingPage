import "./Cooperation.css";
import Img from "../../assets/images/cooperation-img.png";

export default function Cooperation() {
  return (
    <>
      <section className="cooperation">
        \
        <div className="cooperation-container">
          <div className="cooperation-title heading weight--700 size--40">
            Hơn 100 trường đại học y khoa, hiệp hội chuyên ngành và bệnh viện
            hàng đầu Việt Nam hợp tác cung cấp nội dung giáo dục chất lượng cao
            trên MMed.
          </div>
          <div className="cooperation-images">
            <div className="cooperation-image">
              <img src={Img} alt="Cooperation Image" />
            </div>
            <div className="cooperation-image">
              <img src={Img} alt="Cooperation Image" />
            </div>
            <div className="cooperation-image">
              <img src={Img} alt="Cooperation Image" />
            </div>
            <div className="cooperation-image">
              <img src={Img} alt="Cooperation Image" />
            </div>
            <div className="cooperation-image">
              <img src={Img} alt="Cooperation Image" />
            </div>
            <div className="cooperation-image">
              <img src={Img} alt="Cooperation Image" />
            </div>
            <div className="cooperation-image">
              <img src={Img} alt="Cooperation Image" />
            </div>
            <div className="cooperation-image">
              <img src={Img} alt="Cooperation Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
