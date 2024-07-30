export default function Input({ label, type, id }) {
  return (
    <div className="control">
      <label htmlFor={label} className="control-row">
        {label}
      </label>
      <input type={type} id={id} />
    </div>
  );
}
