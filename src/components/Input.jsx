export default function Input({ label, type, name, id, ...props }) {
  return (
    <div className="control">
      <label htmlFor={id} className="control-row">
        {label}
      </label>
      <input type={type} name={id} required {...props} />
    </div>
  );
}
