import React from "react";
import FormControl from "../../../components/FormControl";
export default function TourPrice() {
  return (
    <>
      <div className="row g-3">
        <FormControl
          wrapperClass="col-12 col-sm-6 col-md-4"
          type="text"
          label="Display Price"
          data-name="packageName"
          placeholder="Enter display price"
        />
        <FormControl
          wrapperClass="col-12 col-sm-6 col-md-4"
          type="text"
          label="Discount price"
          data-name="packageCode"
          placeholder="Enter discount price"
        />
        <div className="col-12 col-md-12">
          <h5 className="mt-3 mb-0">Room type wise price</h5>
        </div>
        <div className="col-12 col-md-12">
          <div className="row g-3">
            <FormControl
              wrapperClass="col-12 col-sm-6 col-md-4"
              type="text"
              label="Single Occupancy"
              data-name="packageCode"
              placeholder="Enter single occupancy price"
            />
            <FormControl
              wrapperClass="col-12 col-sm-6 col-md-4"
              type="text"
              label="Twin Sharing"
              data-name="packageCode"
              placeholder="Enter twin sharing price"
            />
            <FormControl
              wrapperClass="col-12 col-sm-6 col-md-4"
              type="text"
              label="Triple Sharing"
              data-name="packageCode"
              placeholder="Enter tripple sharing price"
            />
            <FormControl
              wrapperClass="col-12 col-sm-6 col-md-4"
              type="text"
              label="Infant"
              data-name="packageCode"
              placeholder="Enter infant price"
            />
            <FormControl
              wrapperClass="col-12 col-sm-6 col-md-4"
              type="text"
              label="Child (5 - 11) With Mattress"
              data-name="packageCode"
              placeholder="Enter price"
            />
            <FormControl
              wrapperClass="col-12 col-sm-6 col-md-4"
              type="text"
              label="Child (2 - 4)"
              data-name="packageCode"
              placeholder="Enter price"
            />
            <FormControl
              wrapperClass="col-12 col-sm-6 col-md-4"
              type="text"
              label="Child (5 - 11) Without Mattress"
              data-name="packageCode"
              placeholder="Enter price"
            />
          </div>
        </div>
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
      </div>
    </>
  );
}
