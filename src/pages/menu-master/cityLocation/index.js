import React from "react";
import { Pagination, Table } from "react-bootstrap";
import "../../menu-master/MenuMaster.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
function CityLocation() {
  return (
    <div>
      <div className="container main-container">
        <div className="row">
          <div className="main-addnewzone">
            <div className="master-setup-heading">
              Master Setup's -<span className="zone-text">City</span>
            </div>
            <div>
              <button className="Add-branch-btn" fdprocessedid="3gsxuu">
                Add new City
              </button>
            </div>
            <div>
              <div className="d-flex align-item-center justify-content-between flex-row-reverse search-here">
                <label className="search-label">
                  <SearchOutlinedIcon className="search-icon" />
                  <input
                    type="text"
                    className="form-control search"
                    placeholder="Search Here..."
                  />
                </label>
              </div>

              <div className="my-3">
                <Table className="main-table" bordered hover responsive>
                  <thead class="table-thead">
                    <tr className="table-heading">
                      <th>#</th>
                      <th>City NAME</th>
                      <th>District NAME</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>224</td>
                      <td>Lanja</td>
                      <td>Ratanagiri</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>375</td>
                      <td>Achalpur </td>
                      <td>Amaravati</td>

                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>367</td>
                      <td>Solapur</td>
                      <td>akola</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>445</td>
                      <td>Wardha</td>
                      <td>Maharashtra</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>543</td>
                      <td>Satara</td>
                      <td>Maharashtra</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>634</td>
                      <td>Wardha</td>
                      <td>Maharashtra</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>74</td>
                      <td>Wardha</td>
                      <td>Maharashtra</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>83</td>
                      <td>Wardha</td>
                      <td>Maharashtra</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>914</td>
                      <td>Wardha</td>
                      <td>Maharashtra</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>104</td>
                      <td>Wardha</td>
                      <td>Maharashtra</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />
                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="main-pagination">
                <div className="page-no">
                  <span className="drop-show">
                    <select name="Show 10" className="show-page">
                      <option value="volvo">Show 5</option>
                      <option value="saab">Show 10</option>
                      <option value="opel">Show 20</option>
                      <option value="opel">Show 100</option>
                    </select>
                  </span>
                  <p className="my-1">Page 1 of 42</p>
                </div>

                <Pagination>
                  <Pagination.First />
                  <Pagination.Prev />

                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityLocation;
