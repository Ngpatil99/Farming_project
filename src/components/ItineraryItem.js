import React from "react";

export default function ItineraryItem({ item, idx, handleItiChange, mode }) {
  const [_mode, setMode] = React.useState(mode || "view");
  //const handleItiChange = (e, name) => {};
  return (
    <>
      <li className="timeline-item timeline-item-transparent">
        <span className="timeline-point timeline-point-primary"></span>
        <div className="timeline-event">
          {_mode === "view" ? (
            <>
              <div className="timeline-header border-bottom mb-3">
                <h6 className="mb-0">
                  Day {item.day}. {item.locationFrom} – {item.locationTo} (
                  {item.nights} Nights)
                </h6>
                <button
                  className="timeline-edit-button"
                  onClick={() => setMode("edit")}
                >
                  <i className="bx bxs-edit"></i>
                </button>
              </div>
              <div className="line-clamp-2 mb-2">{item.description}</div>
              <div className="mb-2">
                <strong>Note:</strong> {item.note}
              </div>
              <div className="mb-2">
                <strong>Meals:</strong> {item.meals.join(", ")}
              </div>
            </>
          ) : (
            <>
              <div className="row g-3">
                <div className="col-12 col-sm-2">
                  <div className="input-group input-group-merge">
                    <span className="input-group-text" id="basic-addon34">
                      Day
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={item.day}
                      onChange={(e) => handleItiChange(e, "day", idx)}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-8">
                  <div className="input-group">
                    <input
                      type="text"
                      value={item.locationFrom}
                      className="form-control"
                      placeholder="location from"
                      onChange={(e) => handleItiChange(e, "locationFrom", idx)}
                    />
                    <span className="input-group-text"> - </span>
                    <input
                      type="text"
                      value={item.locationTo}
                      className="form-control"
                      placeholder="location to"
                      onChange={(e) => handleItiChange(e, "locationTo", idx)}
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-2">
                  <div className="input-group input-group-merge">
                    <input
                      type="text"
                      className="form-control text-end"
                      value={item.nights}
                      onChange={(e) => handleItiChange(e, "nights", idx)}
                    />
                    <span className="input-group-text" id="basic-addon34">
                      Nights
                    </span>
                  </div>
                </div>
                <div className="col-12 col-sm-12">
                  <textarea
                    className="form-control"
                    rows="5"
                    value={item.description}
                    onChange={(e) => handleItiChange(e, "description", idx)}
                    placeholder="Enter description here..."
                  ></textarea>
                </div>
                <div className="col-12 col-sm-12">
                  <textarea
                    className="form-control"
                    rows="2"
                    value={item.note}
                    onChange={(e) => handleItiChange(e, "note", idx)}
                    placeholder="Enter note here..."
                  ></textarea>
                </div>
                <div className="col-12 col-sm-12">
                  <button
                    type="button"
                    className="btn btn-primary d-flex align-items-center"
                    onClick={() => setMode("view")}
                  >
                    Add Day
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </li>
    </>
  );
}

ItineraryItem.defaultProps = {
  handleItiChange: () => {},
};
