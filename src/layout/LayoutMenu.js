import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

export default function LayoutMenu() {
  const location = useLocation();
  const [activeIdx, setActiveIdx] = useState({ m: 0, s: "" });
  const sideMenu = [
    { title: "Dashboard", to: "/app/dashboard", icon: "bx-home-circle" },
    { title: "Applications Management", to: "/app/application", icon: "bx-data"},
    { title: "Service Management", to: "/app/services", icon: "bx-home-circle"},
    { title: "Document Service", to: "/app/document", icon: "bx-file"},
    { title: "Form", to: "/app/form", icon: "bx-home-circle"},
    {
      title: "Master Setup",
      icon: "bx-table",
      sub: [
        { title: "Zone Setup", to: "/app/menu-master/main-menu" },
        { title: "Branch Setup", to: "/app/menu-master/menu-metadata" },
        { title: "City location", to: "/app/menu-master/menu-city" },
        { title: "District location", to: "/app/menu-master/menu-district" },
      ],
    },
    // {
    //   title: "Package Master",
    //   icon: "bx-menu",
    //   sub: [
    //     { title: "Manage Package", to: "/app/package-master/manage-package" },
    //     {
    //       title: "Add Package",
    //       to: "/app/package/add",
    //       childRoute: [
    //         "basic-details",
    //         "itinerary",
    //         "tour-price",
    //         "accommodation-details",
    //         "inclusions",
    //         "exclusions",
    //         "other-details",
    //       ],
    //     },
    //   ],
    // },
  ];
  useEffect(() => {
    let sIdx = "";
    const index = sideMenu.findIndex((item) => {
      if (item.to) {
        return location.pathname === item.to;
      } else if (item.sub) {
        sIdx = item?.sub?.findIndex((sub) => {
          let childCheck = sub?.childRoute?.findIndex((child) => {
            return location.pathname === `${sub.to}/${child}`;
          });
          return sub.to === location.pathname || Math.sign(childCheck) >= 0
            ? true
            : false;
        });
        return Math.sign(sIdx) >= 0 ? true : false;
      }
    });
    setActiveIdx({ m: index, s: sIdx });
  }, [location]);
  return (
    <>
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <a
            href="/"
            className="app-brand-link"
            onClick={(e) => e.preventDefault()}
          >
            <span className="app-brand-text demo menu-text ms-2">
              <img src="/abhita-logo.png" width={150} alt="" />
            </span>
          </a>
          <a
            href="/"
            onClick={(e) => e.preventDefault()}
            className="layout-menu-toggle menu-link text-large ms-auto d-block"
          >
            <i className="bx bx-chevron-left bx-sm align-middle"></i>
          </a>
        </div>
        <div className="menu-inner-shadow"></div>
        <ul className="menu-inner py-1">
          {sideMenu.map((menu, idx) => (
            <MenuItem {...menu} key={idx} idx={idx} activeIdx={activeIdx} />
          ))}
        </ul>
      </aside>
    </>
  );
}
