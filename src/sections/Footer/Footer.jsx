import "./Footer.css";
import LogoLarge from "../../assets/images/logo-large.png";

export default function Footer() {
  const footerData = [
    {
      label: "Công Ty",
      items: [
        {
          label: "Về Chúng Tôi",
          link: "#AboutUs",
        },
        {
          label: "Liên Hệ",
          link: "#ContactUs",
        },
      ],
    },
    {
      label: "Chuyên Gia Chăm Sóc Sức Khoẻ",
      items: [
        {
          label: "Điều Khoản Và Điều Kiện",
          link: "#Terms",
        },
        {
          label: "Chính Sách Bảo Mật",
          link: "#Privacy",
        },
      ],
    },
    {
      label: "Tổ Chức",
      items: [
        {
          label: "Chính Sách Bảo Mật",
          link: "#Privacy",
        },
        {
          label: "Hợp Tác & Đối Tác",
          link: "#Partners",
        },
      ],
    },
  ];


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">

          <div className="footer-logo">
            <a href="/">
              <img src={LogoLarge} alt="MMed" className="footer-logo-img" />
            </a>
          </div>

          <div className="footer-links-wrapper">
            <div className="footer-links">
              {footerData.map((section, index) => (
                <div key={index} className="footer-section">
                  <div className="footer-section-title">{section.label}</div>
                  <ul className="footer-section-list">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="footer-section-item" onClick={() => {
                        window.location.href = item.link;
                      }}>
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="footer-copyright text weight--400 size--16">© 2026 MMed.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
