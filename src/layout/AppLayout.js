import React from "react";
import { Outlet } from "react-router-dom";
import LayoutMenu from "./LayoutMenu";
import LayoutNavbar from "./LayoutNavbar";

export default function AppLayout() {
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <LayoutMenu />
          <div className="layout-page">
            <LayoutNavbar />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
