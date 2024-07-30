export default function Button({
  children,
  textOnly,
  classes,
  onClick,
  ...props
}) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += ` ${classes}`;
  return (
    <button className={cssClasses} onClick={onClick} style={props}>
      {children}
    </button>
  );
}
