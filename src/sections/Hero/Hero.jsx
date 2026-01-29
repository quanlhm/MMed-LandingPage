import "./Hero.css";
import Header from "../../components/Header/Header.jsx";
import HeroCard from "../../components/HeroCard/HeroCard.jsx";
import HeroImg from "../../assets/images/hero-mobile-img.png";
import Img1 from "../../assets/images/hero-card-1.png";
import Img2 from "../../assets/images/hero-card-2.png";
import Img3 from "../../assets/images/hero-card-3.png";
import Img4 from "../../assets/images/hero-card-4.png";

export default function Hero() {
  return (
    <>
      <section className="hero" id="hero">
        <Header />
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-container-left">
              <img src={HeroImg} alt="Mobile Image" />
            </div>
            <div className="hero-container-right">
              <div className="hero-container-title weight--700 size--48 heading">
                Trao quyền cho đội ngũ y tế Kết Nối, Nâng Tầm, Dẫn Đầu
              </div>
              <div className="hero-container-content weight--700 size--20 text">
                MMed mang đến cho bác sĩ những công cụ hỗ trợ chuyên môn thông
                minh, kết nối mạng lưới đồng nghiệp và tổ chức y tế uy tín, đồng
                thời mở ra kho tài nguyên số và chương trình CME chất lượng -
                giúp đội ngũ y tế không ngừng phát triển và tiên phong trong
                chăm sóc sức khỏe hiện đại.
              </div>
              <div className="hero-container-cards">
                <div className="hero-container-cards-top">
                  <HeroCard
                    img={Img1}
                    title="30,000"
                    content={
                      <span>Chuyên Gia Y Tế <br /> Đã Tham Gia Cộng Đồng MMed</span>
                    }
                  />
                  <HeroCard
                    img={Img2}
                    title="10,000+"
                    content="Giờ Học CME Được Hoàn Thành"
                  />
                </div>
                <div className="hero-container-cards-bottom">
                  <HeroCard
                    img={Img3}
                    title="98%"
                    content="Bác Sĩ Sẵn Sàng Giới Thiệu MMed"
                  />
                  <HeroCard
                    img={Img4}
                    title="250+"
                    content="Chuyên Gia & Diễn Giả Hàng Đầu"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
