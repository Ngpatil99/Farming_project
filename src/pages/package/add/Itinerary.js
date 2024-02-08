import React, { useState } from "react";
import ItineraryItem from "../../../components/ItineraryItem";

export default function Itinerary() {
  const [currentItinerary, setCurrentItinerary] = React.useState({
    day: 2,
    nights: "",
    title: "",
    locationFrom: "",
    locationTo: "",
    distance: "",
    description: "",
    note: "",
    meals: [],
  });
  const [itinerary, setItinerary] = React.useState([
    {
      day: 1,
      nights: 2,
      title: "Ahmedabad / Surat – Narmada Tent City",
      locationFrom: "Ahmedabad / Surat",
      locationTo: "Narmada Tent City",
      distance: 120,
      description:
        "Tour guests will arrive at Ahmedabad / Surat Airport as per their scheduled flight. Upon arrival they will meet Veena World tour manager at the airport and proceed to Narmada Tent City. We view Sardar Sarovar Dam and then we visit Cactus Garden – unique botanical garden. We then visit the state-of-art zoological park with unique collection of exotic animals and birds from the various biogeographic regions. Here we go for a Jungle Safari – to spot animals, reptiles and birds. In the evening we enjoy cultural show and entertainment at Tent City.",
      note: "For Pune departures flight will be Pune to Surat and Surat to Pune",
      meals: ["Breakfast", "Lunch", "Dinner"],
    },
  ]);
  const handleItiChange = React.useCallback((e, name, idx) => {
    let _obj = [...itinerary];
    _obj[idx][name] = e.target.value;
    setItinerary(_obj);
  });
  return (
    <>
      <ul className="timeline ms-4 w-auto">
        {itinerary.map((item, idx) => (
          <ItineraryItem
            key={idx}
            item={item}
            idx={idx}
            handleItiChange={handleItiChange}
          />
        ))}
        <ItineraryItem
          mode="add"
          item={currentItinerary}
          handleItiChange={handleItiChange}
        />
      </ul>
      <div className="col-12 d-flex justify-content-between mt-5">
        <button
          className="btn btn-label-secondary btn-prev d-flex align-items-center"
          disabled
        >
          <i className="bx bx-chevron-left bx-sm ms-sm-n2"></i>
          <span className="align-middle d-sm-inline-block d-none">
            Previous
          </span>
        </button>
        <button className="btn btn-primary btn-next d-flex align-items-center">
          <span className="align-middle d-sm-inline-block d-none me-sm-1">
            Next
          </span>
          <i className="bx bx-chevron-right bx-sm me-sm-n2"></i>
        </button>
      </div>
    </>
  );
}
