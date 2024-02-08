import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import FormControl from "../../../components/FormControl";
import Offcanvas from "../../../components/Offcanvas";
import Table from "../../../components/table/Index";

export default function MenuMetadata() {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("add");
  const [data, setData] = useState([
    { locations: "India" },
    { locations: "Pune" },
    { locations: "Maharashtra" },
    { locations: "Mumbai" },
    { locations: "Lonawala" },
    { locations: "khandala" },
    { locations: "Kamshet" },
  ]);

  const columns = useMemo(
    () => [
      {
        Header: "Locations",
        accessor: "locations",
      },
      {
        Header: "action",
        Cell: () => {
          return (
            <div className="d-flex">
              <button
                className="border-0 bg-transparent text-primary d-flex align-items-center me-3"
                onClick={() => {
                  setShow(true);
                  setMode("add");
                }}
              >
                <i className="bx bx-plus me-1"></i> add
              </button>
              <button
                className="border-0 bg-transparent text-success d-flex align-items-center"
                onClick={() => {
                  setShow(true);
                  setMode("view");
                }}
              >
                <i className="bx bx-show me-1"></i> view
              </button>
            </div>
          );
        },
      },
    ],
    []
  );
  return (
    <>
      <h4 className="fw-bold py-0 mb-4">
        <span className="text-muted fw-light">Home/</span> Master -{" "}
        <small style={{ fontWeight: 500 }}>
          Menu Metadata326546517265dcnhgvghdc Susmita
        </small>
      </h4>
      <div className="card">
        <div className="card-datatable table-responsive">
          <div className="dataTables_wrapper dt-bootstrap5 no-footer">
            {data ? <Table columns={columns} data={data} /> : <></>}
          </div>
        </div>
      </div>
      <Offcanvas show={show} setShow={setShow} title="Add Metadata">
        <div className="row g-3">
          <FormControl
            wrapperClass="col-12"
            label="Sub Title"
            type="text"
            data-name="sub_title"
            disabled={mode === "view" ? true : false}
          />
          <FormControl
            wrapperClass="col-12"
            label="Description"
            type="textarea"
            data-name="sub_title"
            rows={13}
            disabled={mode === "view" ? true : false}
          />
          <FormControl
            wrapperClass="col-12"
            label="Cover Image"
            type="file"
            data-name="cover_image"
            disabled={mode === "view" ? true : false}
          />
          <div className="col-12">
            <div className="text-end pt-2">
              <button className="btn btn-warning me-3">reset</button>
              <button className="btn btn-primary">submit</button>
            </div>
          </div>
        </div>
      </Offcanvas>
    </>
  );
}
