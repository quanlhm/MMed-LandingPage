import "./Header.css";
import Button from "../Button/Button.jsx";

export default function Header() {
  return (
    <>
      <div className="header-wrapper">
        <div className="header">
          <div className="header-buttons">
            <Button
              label="Đăng nhập"
              weight="700"
              size="16"
              className="secondary"
            />
            <Button
              label="Tham gia miễn phí"
              weight="700"
              size="16"
              className="primary"
            />
          </div>
        </div>
      </div>
    </>
  );
}
