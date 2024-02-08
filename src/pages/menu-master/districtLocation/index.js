import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import "../../menu-master/MenuMaster.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Divider, Grid, Paper } from "@mui/material";
import styled from "@emotion/styled";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { userdata } from "../districtLocation/UserData";
import { data } from "../districtLocation/Data";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DistrictLocation = () => {
  // State variable to keep track of all the expanded rows
  // By default, nothing expanded. Hence initialized with empty array.
  const [expandedRows, setExpandedRows] = useState([]);

  // State variable to keep track which row is currently expanded.
  const [expandState, setExpandState] = useState({});

  /**
   * This function gets called when show/hide link is clicked.
   */
  const handleEpandRow = (event, userId) => {
    const currentExpandedRows = expandedRows;
    const isRowExpanded = currentExpandedRows.includes(userId);

    let obj = {};
    isRowExpanded ? (obj[userId] = false) : (obj[userId] = true);
    setExpandState(obj);

    // If the row is expanded, we are here to hide it. Hence remove
    // it from the state variable. Otherwise add to it.
    const newExpandedRows = isRowExpanded
      ? currentExpandedRows.filter((id) => id !== userId)
      : currentExpandedRows.concat(userId);

    setExpandedRows(newExpandedRows);
  };
  return (
    <div>
      <Row>
        <h4 className="heading">Application Report's</h4>
        <Grid container>
          <Grid item xs={2}>
            <Button className="back-btn">Back</Button>
          </Grid>
        </Grid>
        <div class="tab-content" style={{ padding: 20 }}>
          <div id="home" class="tab-pane  in active">
            <Row>
              <Col sm={12}>
                <Table
                  className="main-table"
                  responsive
                  variant=""
                  bordered
                  hover
                >
                  <thead class="bg-success  text-light ">
                    <tr style={{ fontSize: 12 }}>
                      <th style={{ paddingLeft: 36 }}>#</th>
                      <th>APPLICATION</th>
                      <th>CUSTOMER NAME</th>
                      <th>CONTACT</th>
                      <th>TOTAL AMOUNT</th>
                      <th>STATUS</th>
                      <th>PAY. STATUS</th>
                      <th>ACTION</th>
                    </tr>
                    <Divider />
                  </thead>
                  <tbody>
                    {data.map((user) => (
                      <>
                        <tr key={user.id}>
                          <td>
                            <Button
                              variant="link"
                              onClick={(event) =>
                                handleEpandRow(event, user.id)
                              }
                            >
                              {expandState[user.id] ? (
                                <KeyboardArrowDownOutlinedIcon />
                              ) : (
                                <KeyboardArrowRightOutlinedIcon />
                              )}
                            </Button>
                          </td>

                          <td className="text-primary">
                            {user["appli_name"]}{" "}
                          </td>
                          <td>{user["customer_name"]}</td>
                          <td>{user["contact"]}</td>
                          <td style={{ paddingLeft: 38 }}>
                            {user["total_amount"]}
                          </td>
                          <td>
                            <Button className="pending-btn">Pending</Button>
                          </td>
                          <td>
                            <Button className="unpaid-btn">Unpaid</Button>
                          </td>
                          <td>
                            <VisibilityOutlinedIcon
                              style={{ color: "green" }}
                            />
                            &nbsp;
                            <DeleteOutlinedIcon style={{ color: "#f44336 " }} />
                            &nbsp;
                            <DownloadOutlinedIcon style={{ color: "blue" }} />
                          </td>
                        </tr>
                        <>
                          {expandedRows.includes(user.id) ? (
                            <tr>
                              <td colspan="6">
                                <div
                                  style={{
                                    padding: "10px",
                                  }}
                                >
                                  {userdata.map((user) => (
                                    <div>
                                      <Grid container spacing={2}>
                                        <Grid item xs={3}>
                                          <h6>District Name</h6>
                                          <p>{user.DistrictName}</p>
                                        </Grid>
                                        <Grid item xs={3}>
                                          <h6>City Name</h6>
                                          <p>{user.CityName}</p>
                                        </Grid>
                                        <Grid item xs={3}>
                                          <h6>Created Date</h6>
                                          <p>{user.Created_Date}</p>
                                        </Grid>
                                        <Grid item xs={3}>
                                          <h6>Submited Name</h6>
                                          <p>{user.Submited_Name}</p>
                                        </Grid>
                                      </Grid>
                                      <Grid container spacing={2}>
                                        <Grid item xs={3}>
                                          <h6>Employee Name</h6>
                                          <p>{user.Employee_Name}</p>
                                        </Grid>
                                        <Grid item xs={3}>
                                          <h6>Remark</h6>
                                          <p>{user.Remark}</p>
                                        </Grid>
                                      </Grid>
                                    </div>
                                  ))}
                                </div>
                              </td>
                            </tr>
                          ) : null}
                        </>
                      </>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
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
                <p className="my-1">Page 1 of 149</p>
              </div>

              <Pagination>
                <Pagination.First />
                <Pagination.Prev />

                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </div>
          <div id="menu1" class="tab-pane ">
            <Row>
              <Col sm={12}>
                <Table responsive variant="" className="appli-report-table">
                  <thead class="table-secondary">
                    <tr style={{ backgroundColor: "#e2e3e5", fontSize: 12 }}>
                      <th style={{ paddingLeft: 36 }}>#</th>
                      <th>APPLICATION</th>
                      <th>CUSTOMER NAME</th>
                      <th>CONTACT</th>
                      <th>TOTAL AMOUNT</th>
                      <th>STATUS</th>
                      <th>PAY. STATUS</th>
                      <th>ACTION</th>
                    </tr>
                    <Divider />
                  </thead>
                  <tbody>
                    {data.map((user) => (
                      <>
                        <tr key={user.id}>
                          <td>
                            <Button
                              variant="link"
                              onClick={(event) =>
                                handleEpandRow(event, user.id)
                              }
                            >
                              {expandState[user.id] ? (
                                <KeyboardArrowDownOutlinedIcon />
                              ) : (
                                <KeyboardArrowRightOutlinedIcon />
                              )}
                            </Button>
                          </td>

                          <td className="text-primary">
                            {user["appli_name"]}{" "}
                          </td>
                          <td>{user["customer_name"]}</td>
                          <td>{user["contact"]}</td>
                          <td style={{ paddingLeft: 38 }}>
                            {user["total_amount"]}
                          </td>
                          <td>
                            <Button className="pending-btn">Pending</Button>
                          </td>
                          <td>
                            <Button className="unpaid-btn">Unpaid</Button>
                          </td>
                          <td>
                            <VisibilityOutlinedIcon
                              style={{ color: "green" }}
                            />
                            &nbsp;
                            <DeleteOutlinedIcon style={{ color: "#f44336 " }} />
                            &nbsp;
                            <DownloadOutlinedIcon style={{ color: "blue" }} />
                          </td>
                        </tr>
                        <>
                          {expandedRows.includes(user.id) ? (
                            <tr>
                              <td colspan="6">
                                <div
                                  style={{
                                    padding: "10px",
                                  }}
                                >
                                  {userdata.map((user) => (
                                    <div>
                                      <Grid container spacing={2}>
                                        <Grid item xs={3}>
                                          <h6>District Name</h6>
                                          <p>{user.DistrictName}</p>
                                        </Grid>
                                        <Grid item xs={3}>
                                          <h6>City Name</h6>
                                          <p>{user.CityName}</p>
                                        </Grid>
                                        <Grid item xs={3}>
                                          <h6>Created Date</h6>
                                          <p>{user.Created_Date}</p>
                                        </Grid>
                                        <Grid item xs={3}>
                                          <h6>Submited Name</h6>
                                          <p>{user.Submited_Name}</p>
                                        </Grid>
                                      </Grid>
                                      <Grid container spacing={2}>
                                        <Grid item xs={3}>
                                          <h6>Employee Name</h6>
                                          <p>{user.Employee_Name}</p>
                                        </Grid>
                                        <Grid item xs={3}>
                                          <h6>Remark</h6>
                                          <p>{user.Remark}</p>
                                        </Grid>
                                      </Grid>
                                    </div>
                                  ))}
                                </div>
                              </td>
                            </tr>
                          ) : null}
                        </>
                      </>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
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
                <p className="my-1">Page 1 of 149</p>
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
      </Row>
    </div>
  );
};

export default DistrictLocation;
