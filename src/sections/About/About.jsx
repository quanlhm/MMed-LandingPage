import './About.css';
import SlideCard from '../../components/SlideCard/SlideCard';
import Img1 from '../../assets/images/about-card-1.png';
import Img2 from '../../assets/images/about-card-2.png';
import Img3 from '../../assets/images/about-card-3.png';
import Img4 from '../../assets/images/about-card-4.png';
import Img5 from '../../assets/images/about-card-5.png';
import Img6 from '../../assets/images/about-card-6.png';
import Img7 from '../../assets/images/about-card-7.png';
import Img8 from '../../assets/images/about-card-8.png';
import Img9 from '../../assets/images/about-card-9.png';

export default function About() {

    const aboutData = [
      {
        img: Img1,
        label: "Adaptive Learning Path",
        content:
          "AI tự động gợi ý khóa học tiếp theo dựa trên chuyên khoa, CME đã hoàn thành và thói quen học tập của bạn.",
      },
      {
        img: Img2,
        label: "Predictive CME & Event Suggestion",
        content:
          "AI dự đoán webinar, khóa học hoặc chứng chỉ CME phù hợp kế hoạch học tập của bạn.",
      },
      {
        img: Img3,
        label: "AI Attendance Tracking (Webinar)",
        content:
          "AI điểm danh tự động, CME chính xác, không mất thời gian thủ công.",
      },
      {
        img: Img4,
        label: "AI Article Recommender",
        content:
          "Nhận bài viết, guideline và nghiên cứu mới nhất, phù hợp chính xác với lĩnh vực bạn quan tâm.",
      },
      {
        img: Img5,
        label: "AI Profile Completer",
        content:
          "Tự động hoàn thiện hồ sơ chuyên môn, tiết kiệm thời gian đăng ký và tăng độ tin cậy.",
      },
      {
        img: Img6,
        label: "Blockchain Verification Certificate",
        content:
          "Chứng chỉ CME được cấp với chữ ký số đồng thuận từ nền tảng và tổ chức, chống giả mạo, đảm bảo tin cậy tuyệt đối.",
      },
      {
        img: Img7,
        label: "Voice & Text Assistance",
        content:
          "Chuyển nội dung bài giảng thành giọng đọc tự nhiên, ghi chú nhanh bằng giọng nói hoặc text, học mọi lúc mọi nơi.",
      },
      {
        img: Img8,
        label: "Digital ID Verification",
        content:
          "Xác minh chuyên môn ngay lập tức, bảo mật dữ liệu, tạo niềm tin tuyệt đối.",
      },
      {
        img: Img9,
        label: "AI Connection Suggestion",
        content:
          "Gợi ý kết nối đồng nghiệp, HCP có cùng chuyên ngành hoặc hành vi học tập, mở rộng network chuyên môn hiệu quả.",
      },
    ];
  return (
    <>
      <section className="about">
        <div className="about-container">
          <div className="about-title heading weight--700 size--40">
            Học Thông Minh Hơn Với AI - Chuẩn Y Khoa Quốc Tế
          </div>
          <div className="about-content text weight--700 size--24">
            Chúng tôi tận dụng AI tiên tiến để gợi ý khóa học, bài viết y khoa,
            webinar và case lâm sàng phù hợp với chuyên môn và hành vi học của
            bạn.
          </div>
          <div className="about-grid">
            {aboutData.map((item, index) => (
              <SlideCard
                key={index}
                img={item.img}
                label={item.label}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}