import React from "react";
import FormControl from "../../components/FormControl";
import FormSwitch from "../../components/FormSwitch";

export default function BasicDetails() {
  const formElements = [
    {
      label: "Country",
      dataName: "country",
      type: "select",
    },
    {
      label: "State",
      dataName: "state",
      type: "select",
    },
    {
      label: "Package name",
      dataName: "packageName",
      type: "text",
      placeholder: "Enter package name",
    },
    {
      label: "Package code",
      dataName: "packageCode",
      type: "text",
      placeholder: "Enter package code",
    },
    {
      label: "Package Type",
      dataName: "packageType",
      type: "text",
    },
    {
      label: "No of Days",
      dataName: "days",
      type: "text",
    },
    {
      label: "No of Nights",
      dataName: "nights",
      type: "text",
    },
    {
      label: "Package Includes",
      dataName: "packageIncludes",
      type: "text",
    },
  ];
  return (
    <>
      <div className="row g-3">
        <FormControl
          wrapperClass="col-sm-6"
          label="Country"
          type="select"
          data-name="country"
        />
        <FormControl
          wrapperClass="col-sm-6"
          label="State"
          type="select"
          data-name="state"
        />
        <FormControl
          wrapperClass="col-sm-6"
          type="text"
          label="Package name"
          data-name="packageName"
          placeholder="Enter package name"
        />
        <FormControl
          wrapperClass="col-sm-6"
          type="text"
          label="Package Code"
          data-name="packageCode"
          placeholder="Ex. STSN"
        />
        <FormControl
          wrapperClass="col-sm-6"
          type="text"
          label="Package Type"
          data-name="packageType"
          placeholder="Ex. GROUP TOUR"
        />
        <FormControl
          wrapperClass="col-sm-3"
          type="text"
          label="No of Days"
          data-name="days"
          group={{ text: "Days", pos: "right", type: "merge" }}
        />
        <FormControl
          wrapperClass="col-sm-3"
          type="text"
          label="No of Nights"
          data-name="nights"
          group={{ text: "Nights", pos: "right", type: "merge" }}
        />
        <FormSwitch
          wrapperClass="col-sm-12"
          type="checkbox"
          label="Package Includes"
          switches={[
            { title: "Hotels" },
            { title: "Flights" },
            { title: "Transport" },
            { title: "All Meals" },
            { title: "Sightseeing" },
          ]}
        />
      </div>
    </>
  );
}
