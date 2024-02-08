import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Tabs,Tab, TextField, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
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
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const ApplicationManagement = () => {

    const Data = [
        {
            title: 'Mortgage Deed',
            titleCode: 'PSC1855',
            customerName: 'abc',
            customerPhone: '11111111',
            submiited: 'Kharghar Franchise office',
            registration: '2023-01-30 05:54:03',
            paymentStatus: 'unpaid',
            applicationStatus: 'pending'
        },
        {
            title: 'Mortgage Deed',
            titleCode: 'PMN1853',
            customerName: 'abc',
            customerPhone: '11111111',
            submiited: 'Kharghar Franchise office',
            registration: '2023-01-30 05:54:03',
            paymentStatus: 'unpaid',
            applicationStatus: 'pending'
        },
        {
            title: 'Search Report',
            titleCode: 'PMN1854',
            customerName: 'abc',
            customerPhone: '11111111',
            submiited: 'Kharghar Franchise office',
            registration: '2023-01-29 05:10:06',
            paymentStatus: 'paid',
            applicationStatus: 'pending'
        },
        {
            title: 'Property Valuation',
            titleCode: 'PMN1856',
            customerName: 'abc',
            customerPhone: '11111111',
            submiited: 'Kharghar Franchise office',
            registration: '2023-01-30 05:54:03',
            paymentStatus: 'unpaid',
            applicationStatus: 'pending'
        },
        {
            title: 'Mortgage Deed',
            titleCode: 'PMN1857',
            customerName: 'abc',
            customerPhone: '11111111',
            submiited: 'Kharghar Franchise office',
            registration: '2023-01-29 05:10:06',
            paymentStatus: 'paid',
            applicationStatus: 'pending'
        },
        {
            title: 'Property Valuation',
            titleCode: 'PMN1858',
            customerName: 'abc',
            customerPhone: '11111111',
            submiited: 'Kharghar Franchise office',
            registration: '2023-01-30 05:54:03',
            paymentStatus: 'unpaid',
            applicationStatus: 'pending'
        }
    ]

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <>
            <h4><b>Application's</b></h4>
            <div style={{
                margin: 'auto',
                display: 'block'
            }}>
                {/* <TextField
                    id="date"
                    label="Select date range"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                /> */}
            </div>
            <br />
            <div className="card">
                <div className="card-body">
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="All Application" style={{ color: 'orange' }} {...a11yProps(0)} />
                                <Tab label="Complete" style={{ color: 'green' }} {...a11yProps(1)} />
                                <Tab label="Inprogress" style={{ color: 'red' }} {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            Item One
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                    </Box>
                </div>
            </div>
            {/* <div className="row">
                {Data.map(ele => (
                    <div className="col-sm-6" style={{ padding: 25 }}>

                        <div className="card">
                            <div className='row card-header' style={{ marginRight: '0px', marginLeft: '0px' }}>
                                <div className="col-sm-6"><p ><b>{ele.title}</b></p></div>
                                <div className="col-sm-6"><p style={{ textAlign: 'end' }}><b>{ele.titleCode}</b></p></div>
                            </div>

                            <div className='row' style={{ marginRight: '0px', marginLeft: '0px' }}>
                                <div className="col-sm-6"><p><b>Customer Name</b></p>
                                    <p style={{ marginTop: '-15px' }}>{ele.customerName}</p></div>
                                <div className="col-sm-6"><p ><b>Customer Phone</b></p>
                                    <p style={{ marginTop: '-15px' }}>{ele.customerPhone}</p>
                                </div>
                            </div>

                            <div className='row' style={{ marginRight: '0px', marginLeft: '0px' }}>
                                <div className="col-sm-6"><p><b>Submitted By</b></p>
                                    <p style={{ marginTop: '-15px' }}>{ele.submiited}</p></div>
                                <div className="col-sm-6"><p ><b>Registration Date / Time</b></p>
                                    <p style={{ marginTop: '-15px' }}>{ele.registration}</p>
                                </div>
                            </div>

                            <div className='row' style={{ marginRight: '0px', marginLeft: '0px' }}>
                                <div className="col-sm-6"><p><b>Payment Status</b></p>
                                    <p style={{ marginTop: '-15px' }}>
                                        <Button className='rounded-pill' variant="outlined" color="error">
                                            {ele.paymentStatus}
                                        </Button>
                                    </p></div>
                                <div className="col-sm-6"><p ><b>Application Status</b></p>
                                    <p style={{ marginTop: '-15px' }}>
                                        <Button className='rounded-pill' variant="outlined">
                                            {ele.applicationStatus}
                                        </Button>
                                    </p>
                                </div>
                            </div>

                            <div className='row' style={{ marginRight: '0px', marginLeft: '0px' }}>
                                <div className="col-sm-6"><p >
                                    <Button variant="outlined">
                                        View More
                                    </Button>
                                </p></div>
                                <div className="col-sm-6"><p style={{ textAlign: 'end' }}>
                                    <Button className='text-danger' startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                </p></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
        </>
    );
}

export default ApplicationManagement;