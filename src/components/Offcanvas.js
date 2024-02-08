import React, { useEffect, useRef } from "react";

export default function Offcanvas({
  show,
  setShow,
  title,
  children,
  position,
}) {
  const offcanvas = useRef();
  useEffect(() => {
    if (show) offcanvas.current.classList.add("show");
    else offcanvas.current.classList.remove("show");
    setTimeout(
      () => {
        offcanvas.current.style.visibility = show ? "visible" : "hidden";
      },
      show ? 0 : 300
    );
  }, [show]);
  return (
    <>
      <div
        className={"offcanvas offcanvas-" + (position || "end")}
        ref={offcanvas}
        tabIndex="-1"
        style={{ visibility: "hidden" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">{title}</h5>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={() => setShow(false)}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body my-auto mx-0">{children}</div>
      </div>
      {show ? (
        <div
          className="offcanvas-backdrop fade show"
          onClick={() => setShow(false)}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}
