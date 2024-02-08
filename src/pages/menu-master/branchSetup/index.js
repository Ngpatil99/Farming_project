import React from "react";
import { Pagination, Table } from "react-bootstrap";
import "../../menu-master/MenuMaster.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
function BranchSetup() {
  return (
    <div>
      <div className="container main-container">
        <div className="row">
          <div className="main-addnewzone">
            <div className="master-setup-heading">
              Master Setup's -<span className="zone-text">Branch</span>
            </div>
            <div>
              <button className="Add-branch-btn" fdprocessedid="3gsxuu">
                Add new Branch
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
                      <th colSpan={2}>NAME</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td colSpan={2}>Kharghar office</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td colSpan={2}>
                        Rajarshi Shahu Multistate Co Operative Credit Society
                      </td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan={2}>Jafrabad office</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td colSpan={2}>Svakarma Finance</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td colSpan={2}>Ahmednagar office</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td colSpan={2}>Mandangad office</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td colSpan={2}>Thane office</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td colSpan={2}>Kamothe office</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td colSpan={2}>Malkapur office</td>
                      <td>
                        <ModeEditIcon className="edit-icon" />

                        <DeleteOutlinedIcon className="delete-icon" />
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td colSpan={2}>Dapoli office</td>
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
                  <p className="my-1">Page 1 of 3</p>
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

export default BranchSetup;
