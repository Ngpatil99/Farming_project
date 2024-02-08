import React from "react";
import { Pagination, Table } from "react-bootstrap";
import "../../menu-master/MenuMaster.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
export default function ZoneSetup() {
  return (
    <div>
      <div className="container main-container">
        <div className="row">
          <div className="main-addnewzone">
            <div className="master-setup-heading">
              Master Setup's -<span className="zone-text">Zone</span>
            </div>
            <div>
              <button className="Add-branch-btn" fdprocessedid="3gsxuu">
                Add new zone
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
                      <th>ZONE CODE</th>
                      <th>NAME</th>
                      <th>CITY NAME</th>
                      <th>DISTRICT NAME</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>ALL1</td>
                      <td>All franchise</td>
                      <td>Nanded, Hingoli, Raigad...</td>
                      <td>Ardhapur, Hingoli, Kamothe...</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>KAM4</td>
                      <td>Kamothe</td>
                      <td>Raigad,</td>
                      <td>Kamothe</td>
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
                    </select>
                  </span>
                  <p className="my-1">Page 1 of 1</p>
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
