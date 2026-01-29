import "./Header.css";
import Button from "../Button/Button.jsx";
import Logo from "../../assets/images/light-logo.png";
import LogoText from "../../assets/images/logo-text.png";

export default function Header() {
  return (
    <>
      <div className="header-wrapper">
        <div className="header">
          <div className="header-logo-container">
            <a href="#hero" className="header-logo">
              <div>
                <img src={Logo} alt="Logo" />
              </div>
              <div>
                <img src={LogoText} alt="Logo text" />
              </div>
            </a>
          </div>
          <div className="header-buttons">
            <Button
              label="Đăng nhập"
              weight="700"
              size="16"
              className="secondary"
              onClick={() => {
                window.location.href = "#Login";
              }}
            />
            <Button
              label="Tham gia miễn phí"
              weight="700"
              size="16"
              className="primary"
              onClick={() => {
                window.location.href = "#TryFree";
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
