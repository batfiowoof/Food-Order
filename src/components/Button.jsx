export default function Button({ children, textOnly, classes, onClick }) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += ` ${classes}`;
  return (
    <button className={cssClasses} onClick={onClick}>
      {children}
    </button>
  );
}
