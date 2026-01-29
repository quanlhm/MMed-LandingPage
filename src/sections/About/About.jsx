import "./About.css";
import Slider from "../../components/Slider/Slider";

export default function About() {
  const data = [
    {
      content: (
        <>
          Một nền tảng tuyệt vời để kết
          <br />
          nối, học hỏi và hợp tác chuyên
          <br />
          môn, giúp tôi không ngừng
          <br />
          nâng cao tay nghề và phát triển
          <br />
          sự nghiệp y khoa.
        </>
      ),
      author: (
        <>
          BS. Trung Hiếu
          <br />
          Ngoại tổng quát
        </>
      ),
    },
    {
      content: (
        <>
          MMed mang đến cơ hội trao
          <br />
          đổi kinh nghiệm với đồng
          <br />
          nghiệp, mở rộng góc nhìn và cập
          <br />
          nhật kiến thức mới nhất trong
          <br />
          chuyên ngành.
        </>
      ),
      author: (
        <>
          BS. Hồng Dương
          <br />
          Nội tim mạch
        </>
      ),
    },
    {
      content: (
        <>
          Cảm ơn MMed đã trở thành nguồn cảm hứng và động lực để chúng tôi tiếp
          tục cống hiến cho cộng đồng và nâng cao
          <br />
          chất lượng điều trị.
        </>
      ),
      author: (
        <>
          BS. Thanh Điền
          <br />
          Nhi khoa
        </>
      ),
    },
    {
      content: (
        <>
          Một nền tảng tuyệt vời để kết
          <br />
          nối, học hỏi và hợp tác chuyên
          <br />
          môn, giúp tôi không ngừng
          <br />
          nâng cao tay nghề và phát triển
          <br />
          sự nghiệp y khoa.
        </>
      ),
      author: (
        <>
          BS. Thanh Điền
          <br />
          Nhi khoa
        </>
      ),
    },
  ];

  return (
    <>
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-title heading weight--700 size--36">
            LẮNG NGHE ĐỒNG NGHIỆP CỦA BẠN NÓI GÌ VỀ MMED
          </div>
          <div className="about-comment-wrapper">
            <div className="about-comment">
              <div className="content text weight--700 size--20">
                “MMed giúp tôi tiếp cận kiến thức y khoa chất lượng cao, linh
                hoạt mọi lúc mọi nơi. Nền tảng CME này thực sự thay đổi cách tôi
                chăm sóc bệnh nhân, mang lại hiệu quả điều trị tốt hơn và nâng
                cao tiêu chuẩn hành nghề.”
              </div>
              <div className="author text weight--700 size--20">
                BS. Nguyễn Hoàng Anh <br /> Chuyên khoa Nội tổng quát
              </div>
            </div>
          </div>
          <Slider data={data} type="about" />
        </div>
      </section>
    </>
  );
}
