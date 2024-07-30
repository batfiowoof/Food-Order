export default function Button({ children, textOnly, classes }) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += ` ${classes}`;
  return <button className={cssClasses}>{children}</button>;
}
