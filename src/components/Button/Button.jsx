import "./Button.css";

// size: nm, md, lg
// weight: nm, md, lg
export default function Button({ type = "", label, size, weight, className = "", onClick }) {
  return (
    <button
      className={`nav--button size--${size} weight--${weight} ${className}`}
      type={type === "" ? "button" : type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
