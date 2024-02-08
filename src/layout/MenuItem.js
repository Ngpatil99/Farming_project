import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ title, icon, to, sub, idx, activeIdx }) {
  const menuItem = React.useRef();
  return (
    <>
      <li
        className={
          "menu-item" +
          (idx === activeIdx?.m ? " active" : "") +
          (sub && activeIdx.s !== "" && idx === activeIdx?.m ? " open" : "")
        }
        ref={menuItem}
        data-active={JSON.stringify(activeIdx)}
      >
        <Link
          to={!sub ? to : "/app"}
          className="menu-link menu-toggle"
          onClick={(e) => {
            if (sub) {
              e.preventDefault();
              if (e.currentTarget.parentElement.classList.contains("open")) {
                e.currentTarget.parentElement.classList.remove("open");
              } else {
                const items = document.querySelectorAll(
                  ".menu-vertical .menu-inner > .menu-item"
                );
                for (var item of items) {
                  item.classList.remove("open");
                }
                e.currentTarget.parentElement.classList.add("open");
              }
            }
          }}
        >
          <i className={"menu-icon tf-icons bx " + icon}></i>
          <div data-i18n="Layouts">{title}</div>
        </Link>

        {sub ? (
          <ul className="menu-sub">
            {sub.map((s, i) => (
              <li
                className={
                  "menu-item" +
                  (i === activeIdx.s && idx === activeIdx.m ? " active" : "")
                }
                key={i}
              >
                <a href={s.to} className="menu-link">
                  <div>{s.title}</div>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </li>
    </>
  );
}
