import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from "react";
import SwipeableViews from 'react-swipeable-views';
import FormControl from "../components/FormControl";
import Offcanvas from "../components/Offcanvas";
import Table from "../components/table/Index";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


const ServiceManagement = () => {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

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

    const [dataName, setDataName] = useState([
        { locations: "India",id:1 },
        { locations: "Pune",id:2 },
        { locations: "Maharashtra",id:3  },
        { locations: "Mumbai",id:4 },
        { locations: "Lonawala" ,id:5},
        { locations: "khandala",id:6 },
        { locations: "Kamshet" ,id:7},
    ]);

    const columns = useMemo(
        () => [
            {
                Header: "Service Code",
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
                                <i className="bx bx-edit me-1"></i>
                            </button>
                            <button
                                className="border-0 bg-transparent text-success d-flex align-items-center"
                                onClick={() => {
                                    setShow(true);
                                    setMode("view");
                                }}
                            >
                                <i className="bx bx-trash me-1"></i>
                            </button>
                        </div>
                    );
                },
            },
        ],
        []
    );

    const column = useMemo(
        () => [
            {
                Header: "#",
                accessor: "id",
            },
            {
                Header: "Service Name",
                accessor: "locations",
            },

        ],
        []
    );
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <>
            <div style={{ display: 'flex' }}>
                <AppBar position="static" sx={{ width: 500, backgroundColor: 'rgb(223 228 234 / var(--tw-bg-opacity))', color: '#000' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Non Consultancy" {...a11yProps(0)} />
                        <Tab label="Consultancy" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                {value===0?<Button style={{ marginLeft: 25 }} variant="contained"><i className="bx bx-plus me-1"></i>Service</Button>:<Button style={{ marginLeft: 25,backgroundColor:'red' }} variant="contained"><i className="bx bx-plus me-1"></i>Fees Master</Button>}
            </div>
            <Box >
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>

                        <>

                            <div className="card">
                                <div className="card-datatable table-responsive">
                                    <div className="dataTables_wrapper dt-bootstrap5 no-footer">
                                        {data ? <Table columns={column} data={dataName} /> : <></>}
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

                    </TabPanel>
                    
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <>

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
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </>
    )
}
export default ServiceManagement;