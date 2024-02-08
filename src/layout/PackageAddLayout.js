import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "bs-stepper/dist/css/bs-stepper.min.css";
import BsStepperStyle from "../helper/BsStepperStyle";
import { Link, Outlet } from "react-router-dom";
export default function PackageAdd() {
  const [activeIndex, setActiveIndex] = useState(0);
  let location = useLocation();
  const stepper = [
    {
      route: "/app/listing/add/basic-details",
      title: "Basic Details",
      subTitle: "Package Name/City",
    },
    {
      route: "/app/package/add/itinerary",
      title: "Itinerary",
      subTitle: "Day Wise",
    },
    {
      route: "/app/package/add/tour-price",
      title: "Tour Price",
      subTitle: "Room Type/Basic Price",
    },
    {
      route: "/app/package/add/accommodation-details",
      title: "Accommodation Details",
      subTitle: "Check In/Out",
    },
    {
      route: "/app/package/add/inclusions",
      title: "Inclusions",
      subTitle: "tour inclusions",
    },
    {
      route: "/app/package/add/exclusions",
      title: "Exclusions",
      subTitle: "tour exclusions",
    },
    {
      route: "/app/package/add/other-details",
      title: "Other Details",
      subTitle: "weather, transport, etc...",
    },
  ];
  useEffect(() => {
    const fIdx =
      location.pathname === "/app/package/add"
        ? 0
        : stepper.findIndex((step) => step.route === location.pathname);
    setActiveIndex(fIdx);
  }, [location]);
  return (
    <>
      <BsStepperStyle />
      <h4 className="fw-bold py-0 mb-4">
        <span className="text-muted fw-light">Home/</span> Add Package -{" "}
        <small style={{ fontWeight: 500 }}>{stepper[activeIndex].title}</small>
      </h4>
      <div id="add-package" className="bs-stepper vertical mt-2">
        <div className="bs-stepper-header">
          {stepper.map((step, idx) => (
            <div
              className={"step" + (activeIndex === idx ? " active" : "")}
              key={idx}
            >
              <Link type="button" className="step-trigger" to={step.route}>
                <span className="bs-stepper-circle">{idx + 1}</span>
                <span className="bs-stepper-label">
                  <span className="bs-stepper-title">{step.title}</span>
                  <span className="bs-stepper-subtitle">{step.subTitle}</span>
                </span>
              </Link>
            </div>
          ))}
        </div>
        <div className="bs-stepper-content">
          <div className="content active dstepper-block">
            <Outlet stepper={stepper} />
          </div>
        </div>
      </div>
    </>
  );
}
