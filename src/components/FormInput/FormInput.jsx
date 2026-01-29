import './FormInput.css';

export default function FormInput({title, type = "text", placeholder}) {
  return (
    <>
      <div className="form-input">
        <div className="input-title text weight--700 size--20">
          {title} <span></span>
        </div>
        {type === "textarea" ? (
          <textarea
            rows={5}
            className="input-field textarea-field"
            placeholder={placeholder}
            required
          />
        ) : (
          <input
            type={type}
            className="input-field"
            placeholder={placeholder}
            required
          />
        )}
      </div>
    </>
  );
}

