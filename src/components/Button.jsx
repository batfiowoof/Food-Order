export default function Button({
  children,
  textOnly,
  classes,
  onClick,
  circular,
}) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += ` ${classes}`;
  if (circular) {
    cssClasses = "button-circular";
  }
  return (
    <button className={cssClasses} onClick={onClick}>
      {children}
    </button>
  );
}
