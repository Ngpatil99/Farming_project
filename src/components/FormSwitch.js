import React from "react";
import classNames from "classnames";
export default function FormSwitch({
  wrapperClass,
  label,
  type,
  switches,
  onChange,
}) {
  return (
    <>
      <div className={wrapperClass}>
        {label ? (
          <label className="form-label d-block w-100">{label}</label>
        ) : (
          <></>
        )}
        {switches?.map(({ title, className, ...rest }, idx) => (
          <label className="switch" key={idx}>
            <input
              type={type}
              className={classNames("switch-input", className)}
              {...rest}
              onChange={(e) => {
                onChange(e, e.target.checked);
              }}
            />
            <span className="switch-toggle-slider">
              <span className="switch-on">
                <i className="bx bx-check"></i>
              </span>
              <span className="switch-off">
                <i className="bx bx-x"></i>
              </span>
            </span>
            <span className="switch-label">{title}</span>
          </label>
        ))}
      </div>
    </>
  );
}
