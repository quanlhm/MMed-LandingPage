import "./Features.css";
import CardImg11 from "../../assets/images/slide1-card-1.png";
import CardImg12 from "../../assets/images/slide1-card-2.png";
import CardImg13 from "../../assets/images/slide1-card-3.png";
import CardImg14 from "../../assets/images/slide1-card-4.png";
import CardImg21 from "../../assets/images/slide2-card-1.png";
import CardImg22 from "../../assets/images/slide2-card-2.png";
import CardImg23 from "../../assets/images/slide2-card-3.png";
import CardImg24 from "../../assets/images/slide2-card-4.png";
import CardImg31 from "../../assets/images/slide3-card-1.png";
import CardImg32 from "../../assets/images/slide3-card-2.png";
import CardImg33 from "../../assets/images/slide3-card-3.png";
import CardImg34 from "../../assets/images/slide3-card-4.png";
import Slider from "../../components/Slider/Slider.jsx";

export default function Features() {
  const data = [
    {
      label: "Cập nhật y khoa",
      content:
        "Luôn đi đầu trong tri thức y học.\nKhám phá các cập nhật chuyên ngành được chọn lọc, súc tích và dễ tiếp thu - giúp bạn không bỏ lỡ bất kỳ tiến bộ nào.",
      cards: [
        {
          img: CardImg11,
          label: "Video đào tạo",
          content:
            "Học hỏi kinh nghiệm thực tiễn từ các chuyên gia đầu ngành qua video ngắn gọn, sinh động và dễ áp dụng lâm sàng.",
        },
        {
          img: CardImg12,
          label: "Chia sẻ ca lâm sàng",
          content:
            "Trao đổi, học hỏi từ những ca bệnh điển hình và cập nhật hướng xử trí hiệu quả từ đồng nghiệp trong ngành.",
        },
        {
          img: CardImg13,
          label: "Bài viết chuyên môn",
          content:
            "Theo dõi nhanh các nghiên cứu, công bố và tin tức y học nổi bật - tất cả trong một nơi duy nhất.",
        },
        {
          img: CardImg14,
          label: "Hướng dẫn điều trị",
          content:
            "Cập nhật kịp thời các khuyến cáo và phác đồ điều trị mới nhất trong chuyên khoa của bạn.",
        },
      ],
    },

    {
      label: "Chương trình CME",
      content:
        "Học tập y khoa không còn nhàm chán!\nCác tổ chức uy tín mang đến những chương trình CME sinh động, ngắn gọn và thiết thực, giúp bạn dễ dàng cập nhật kiến thức chuyên môn mọi lúc, mọi nơi.",
      cards: [
        {
          img: CardImg21,
          label: "Video theo yêu cầu",
          content:
            "Xem bài giảng từ chuyên gia vào bất kỳ thời điểm nào.\nChủ động học - linh hoạt thời gian – trọn vẹn giá trị.",
        },
        {
          img: CardImg22,
          label: "Đánh giá năng lực",
          content:
            "Hoàn thành bài kiểm tra nhanh sau mỗi khóa học và nhận kết quả ngay, giúp củng cố kiến thức và ghi nhận tiến bộ của bạn.",
        },
        {
          img: CardImg23,
          label: "Hội thảo trực tuyến",
          content:
            "Kết nối trực tiếp với các chuyên gia đầu ngành qua webinar tương tác.\nBỏ lỡ buổi học? Xem lại bản ghi dễ dàng chỉ với một cú nhấp.",
        },
        {
          img: CardImg24,
          label: "Chứng chỉ CME điện tử",
          content:
            "Hoàn tất khóa học, vượt bài kiểm tra, bạn sẽ nhận chứng chỉ CME điện tử hợp lệ cùng điểm CME chính thức, được công nhận theo quy định Bộ Y tế.",
        },
      ],
    },

    {
      label: "Cộng đồng Chuyên môn",
      content:
        "Học hỏi không chỉ đến từ sách vở, mà từ những đồng nghiệp cùng chí hướng.\nCộng đồng MMed giúp bạn kết nối, trao đổi và cùng nhau nâng tầm kiến thức y khoa.",
      cards: [
        {
          img: CardImg31,
          label: "Kênh cộng đồng",
          content:
            "Xem bài giảng từ chuyên gia vào bất kỳ thời điểm nào.\nChủ động học - linh hoạt thời gian – trọn vẹn giá trị.",
        },
        {
          img: CardImg32,
          label: "Mạng lưới HCP",
          content:
            "Hoàn thành bài kiểm tra nhanh sau mỗi khóa học và nhận kết quả ngay, giúp củng cố kiến thức và ghi nhận tiến bộ của bạn.",
        },
        {
          img: CardImg33,
          label: "Tin nhắn Bảo mật",
          content:
            "Kết nối trực tiếp với các chuyên gia đầu ngành qua webinar tương tác.\nBỏ lỡ buổi học? Xem lại bản ghi dễ dàng chỉ với một cú nhấp.",
        },
        {
          img: CardImg34,
          label: "Bình luận & Trao đổi",
          content:
            "Hoàn tất khóa học, vượt bài kiểm tra, bạn sẽ nhận chứng chỉ CME điện tử hợp lệ cùng điểm CME chính thức, được công nhận theo quy định Bộ Y tế.",
        },
      ],
    },
  ];

  return (
    <>
      <section className="features" id="features">
        <div className="features-container">
          <div className="features-title heading weight--700 size--40">
            Tính Năng Chính
          </div>
          <Slider data={data} type="features" />
        </div>
      </section>
    </>
  );
}
