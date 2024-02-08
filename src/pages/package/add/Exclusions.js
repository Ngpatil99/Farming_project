import React from "react";

export default function Exclusions() {
  return (
    <>
      <ol className="list-group list-group-numbered">
        {[1, 2, 3, 4, 5].map((i) => (
          <li className="list-group-item d-flex align-items-center" key={i}>
            <div
              contentEditable={true}
              className="px-2 flex-grow-1"
              style={{ outline: "none" }}
              onInput={(e) => console.log(e.currentTarget.textContent)}
              suppressContentEditableWarning={true}
            ></div>
          </li>
        ))}
      </ol>
      <div className="d-flex pt-2 ps-2">
        <a href="/" onClick={(e) => e.preventDefault()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          add Inclusions
        </a>
      </div>
    </>
  );
}
