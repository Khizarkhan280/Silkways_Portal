// Label + input. as="textarea" makes a textarea, unit="KG" shows a unit on the side.
export default function BiltyField({ label, unit, as: Tag = "input", readOnly, ...props }) {
  const cls = [
    "bilty-input",
    unit && "bilty-input-unit",
    readOnly && "bilty-input-readonly",
    Tag === "textarea" && "bilty-input-textarea",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="bilty-field">
      <label htmlFor={props.name} className="bilty-label">{label}</label>
      <div className="bilty-field-wrap">
        <Tag
          id={props.name}
          className={cls}
          readOnly={readOnly}
          tabIndex={readOnly ? -1 : undefined}
          autoComplete="off"
          {...props}
        />
        {unit && <span className="bilty-unit">{unit}</span>}
      </div>
    </div>
  );
}