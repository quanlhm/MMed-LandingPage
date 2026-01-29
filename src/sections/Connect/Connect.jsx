import './Connect.css';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';

export default function Connect() {
  return (
    <>
      <section className="connect" id="connect">
        <div className="connect-container">
          <div className="connect-title heading weight--70 size--40">
            Kết nối cùng MMed
          </div>
          <div className="connect-subtitle text weight--700 size--24">
            Chúng tôi luôn sẵn sàng lắng nghe! Gửi ngay câu hỏi hoặc góp ý của
            bạn – đội ngũ MMed sẽ phản hồi nhanh chóng để đồng hành cùng bạn
            trên hành trình phát triển chuyên môn.
          </div>
          <form action="" method="post" className="connect-form-grid">
            <div className="connect-form-grid-item">
              <FormInput
                title={
                  <>
                    Họ và tên <span>*</span>
                  </>
                }
                type="text"
                placeholder="Nhập họ và tên"
              />
              <FormInput
                title={
                  <>
                    Email <span>*</span>
                  </>
                }
                type="email"
                placeholder="Nhập email"
              />
            </div>
            <div className="connect-form-grid-item">
              <FormInput
                title={
                  <>
                    Tổ chức <span>*</span>
                  </>
                }
                type="text"
                placeholder="Tên tổ chức"
              />
              <FormInput
                title={
                  <>
                    Vai trò <span>*</span>
                  </>
                }
                type="text"
                placeholder="Chức danh/ Vị trí"
              />
            </div>
            <div className="connect-form-grid-item">
              <FormInput
                title={
                  <>
                    Lời nhắn <span>*</span>
                  </>
                }
                type="textarea"
                placeholder="Bạn muốn trao đổi điều gì?"
              />
            </div>
            <div className="connect-form-button-box">
              <Button
                label="Gửi"
                type="submit"
                weight={700}
                size={16}
                className="primary connect--button"
                onClick={() => {
                  window.location.href = "#SendForm";
                }}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}