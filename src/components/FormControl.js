import React from "react";
import classNames from "classnames";
export default function FormControl({
  label,
  type,
  as,
  wrapperClass,
  options,
  className,
  dataName,
  group,
  ...rest
}) {
  const renderElement =
    type === "select" ? (
      <select
        className={classNames("form-select", className)}
        data-name={dataName}
        {...rest}
      >
        {[
          { value: "s", text: `-- Select ${label.toLowerCase()} --` },
          ...options,
        ].map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    ) : type === "textarea" ? (
      <textarea
        className={classNames("form-control", className)}
        data-name={dataName}
        {...rest}
      ></textarea>
    ) : (
      <input
        className={classNames("form-control", className)}
        data-name={dataName}
        type={type}
        {...rest}
      />
    );
  return (
    <>
      <div className={wrapperClass}>
        <label className="form-label">{label}</label>
        {group ? (
          <div
            className={
              "input-group" +
              (group?.type === "merge" ? " input-group-merge" : "")
            }
          >
            {group?.pos === "left" ? (
              <span className="input-group-text">{group?.text}</span>
            ) : (
              <></>
            )}
            {renderElement}
            {group?.pos === "right" ? (
              <span className="input-group-text">{group?.text}</span>
            ) : (
              <></>
            )}
          </div>
        ) : (
          renderElement
        )}
      </div>
    </>
  );
}
FormControl.defaultProps = {
  options: [],
};
