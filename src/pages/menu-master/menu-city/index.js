import React, { useMemo, useState } from "react";
import FormControl from "../../../components/FormControl";
import Table from "../../../components/table/Index";
import TagsInput from "../../../components/TagsInput";

export default function Maincity() {
  const [data, setData] = useState([
    {
      main_menu: "India",
      state: "Maharashtra",
      cities: ["Pune", "Mumbai", "Lonawala", "khandala", "Kamshet"],
    },
  ]);

  const columns = useMemo(
    () => [
      {
        Header: "Master",
        accessor: "main_menu",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Cities",
        accessor: "cities",
        Cell: (row) => {
          return row.cell.row.allCells[2].value?.join(", ");
        },
      },
    ],
    []
  );
  return (
    <>
      <h4 className="fw-bold py-0 mb-4">
        <span className="text-muted fw-light">Home/</span> Master -{" "}
        <small style={{ fontWeight: 500 }}>Main Menu76576576576</small>
      </h4>
      <div className="card mb-4">
        <div className="card-body py-4">
          <div className="row g-3">
            <FormControl
              wrapperClass="col-sm-4"
              label="Main Menu"
              type="select"
              data-name="main"
              options={[
                { value: "india", text: "India" },
                { value: "international", text: "International" },
              ]}
            />
            <FormControl
              wrapperClass="col-sm-4"
              label="State"
              type="text"
              data-name="state"
            />
            <TagsInput
              wrapperClass="col-auto"
              label="Cities"
              onTag={(tags) => console.log(tags)}
            />
            <div className="col-12">
              <div className="text-center">
                <button className="btn btn-warning me-3">reset</button>
                <button className="btn btn-primary">submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-datatable table-responsive">
          <div className="dataTables_wrapper dt-bootstrap5 no-footer">
            {data ? <Table columns={columns} data={data} /> : <></>}
          </div>
        </div>
      </div>
    </>
  );
}
