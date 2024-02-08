import { Autocomplete, Button, Icon, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import '../App.css';
import { ERROR, PROFILE_URL, REGISTER_NOT_SAVE_SUCCESS_MSG, REGISTER_SAVE_SUCCESS_MSG, SUCCESS_MSG } from '../utils/constant';
import { axiosInstance } from '../utils/interceptor';

export default function RegistrationForm() {
    const [file, setFile] = useState();
    const [rows, setrows] = useState([]);
    const [existingfiles, setexistingfiles] = useState([])
    const [uploadedfile, setUploadedfile] = useState("")
    const[errorObj,setErrorObj] = useState({
        type:SUCCESS_MSG,
        message:'',
        show: false
      })
    const [profileData, setProfileData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        adharCard: '',
        panNo: '',
        country: '',
        state: '',
        district: '',
        accountNo:'',
        ifscNo:'',
        city: '',
        address: '',
        aggrimentStartDate: '',
        aggrimentEndDate: '',
        file: [],
        AttachmentName: [],
        imgPreview: []
    })

    // const handleChangeProfile = (e) => {
    //     setProfileData(...profileData, [e.target.name] = e.target.value)
    // }

    const handleChangeProfile = useCallback(
        (event) => {
            setProfileData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
          }));
        },
        []
      );
    
    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));

        setProfileData(e.target.value);
    }

    const Country = [
        { label: 'India' },
        { label: 'Bangladesh' },
        { label: 'Iceland' },
        { label: 'Malaysia' },
        { label: 'San Marino' },
    ];

    const State = [
        { label: 'Maharashtra' }
    ];

    function addrow() {
        getrows()
    }

    const getrows = async () => {
        setrows([...rows, { AttachmentName: [] }])
    }

    const validateForm = () => {

    }

    const handleSave = (helpers) => {
        alert('hiii')
        try {
            axiosInstance.post(PROFILE_URL, {
                "ProfileID": 2,
                "Photo": profileData.file,
                "FirstName": profileData.firstName,
                "LastName": profileData.lastName,
                "Mobile": profileData.mobile,
                "EmailID": profileData.email,
                "CountryID": profileData.country,
                "StateID": profileData.state,
                "DistrictID": profileData.district,
                "CityID": profileData.city,
                "Bankaccountno": profileData.accountNo,
                "IFSCNo": profileData.ifscNo,
                "Address": profileData.address,
                "AggrimentStartDate": profileData.aggrimentStartDate,
                "AggrimentEndDate": profileData.aggrimentEndDate,
                "Pdf": profileData.AttachmentName,
                "IsActive": 1,
                "IsDeleted": 0
            }).then(res => {
              console.log(res);
              errorObj.type=SUCCESS_MSG;
              errorObj.message=REGISTER_SAVE_SUCCESS_MSG;
              errorObj.show=true;
              setErrorObj({...errorObj})
              
            //   router.push('/');
            }).catch(err => {
              console.log(err);
              errorObj.type=ERROR;
              errorObj.message=REGISTER_NOT_SAVE_SUCCESS_MSG;
              errorObj.show=true;
              setErrorObj({...errorObj})
            })
            // await auth.signUp(values.email, values.name, values.password);
           
          } catch (err) {
            helpers.setStatus({ success: false });
            helpers.setErrors({ submit: err.message });
            helpers.setSubmitting(false);
          }
    }

    const handleClickDeleteImg = () => {
        // setDeleteId(id)
        // setDeleteOpen(true)
        // setIsDelete(true)
        // setRowId(rowId)
    }

    const AttachmentNamechange = (e, index) => {
        var values = profileData['AttachmentName']

        values[e.target.name] = e.target.value

        setProfileData((formData) => ({
            ...formData,
            values,
        }))
    }

    const filechange = (event, index) => {
        let files = event.target.files
        let reader = new FileReader()
        reader.readAsDataURL(files[0])
        var imgurl = URL.createObjectURL(event.target.files[0])

        var images = profileData.imgPreview
        images['imgPreview_' + index] = imgurl

        setProfileData((formData) => ({
            ...formData,
            imgPreview: images,
        }))

        var selectedFile = ''
        reader.onload = (e) => {
            selectedFile = e.target.result
            var values = profileData['file']

            setUploadedfile(selectedFile)
            values[event.target.name] = selectedFile


            /*var objectUrl = URL.createObjectURL(selectedFile)
             console.log('objectUrl',objectUrl)*/
            //setFile(values[event.target.name])
            setProfileData((formData) => ({
                ...formData,
                values,
            }));
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row flex-lg-nowrap">
                    <div className="col-12 col-lg-auto mb-3">

                    </div>

                    <div className="col">
                        <div className="row">
                            <div className="col mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="e-profile">
                                            <h2 style={{ textAlign: 'center' }}>Profile Information</h2>
                                            <div className="row" style={{paddingLeft: '30px'}}>
                                                <div className="col-12 col-sm-auto mb-3">
                                                    <div className="mx-auto" style={{ width: '150px' }}>
                                                        <div className="d-flex justify-content-center align-items-center rounded" style={{ height: '150px', backgroundColor: 'rgb(233, 236, 239)' }}>
                                                            <img src={file} style={{ width: '160px', height: '150px' }} alt='' />
                                                            {/* <h2>Add Image:</h2> */}

                                                            {/* <span style={{ color: 'rgb(166, 168, 170)', font: 'bold 8pt Arial' }}>140x140</span> */}
                                                        </div>
                                                        <input type="file" value={profileData.file} onChange={handleChange} style={{paddingTop:10}}/>

                                                    </div>
                                                </div>

                                            </div>
                                            <ul className="nav nav-tabs">
                                                {/* <li className="nav-item"><a href="" className="active nav-link">Profile Information</a></li> */}
                                            </ul>
                                            <div className="tab-content pt-3">
                                                <div className="tab-pane active">
                                                    <form className="form" noValidate="">
                                                        <div className="row">
                                                            <div className="col">
                                                                <div className="row" style={{padding:'10px'}}>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label>First Name</label>
                                                                            <input className="form-control" type="text" value={profileData.firstName} onChange={handleChangeProfile} name="firstName" placeholder="Enter First Name" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label>Last Name</label>
                                                                            <input className="form-control" type="text" value={profileData.lastName} onChange={handleChangeProfile} name="lastName" placeholder="Enter Last Name" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="row"  style={{padding:'10px'}}>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label>Mobile No.</label>
                                                                            <input className="form-control" type="text" value={profileData.mobile} onChange={handleChangeProfile} name="mobile" placeholder="Enter Mobile No." />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label>Email</label>
                                                                            <input className="form-control" type="email" value={profileData.email} onChange={handleChangeProfile} name="email" placeholder="Enter Your Email" />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* <div className="row">
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>AdharCard No.</label>
                                                                            <input className="form-control" type="number" name="adharNo" value={profileData.adharCard} onChange={handleChangeProfile} placeholder="Enter AadharCard No." />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>Pan No.</label>
                                                                            <input className="form-control" type="text" value={profileData.panNo} onChange={handleChangeProfile} placeholder="Enter Pan No." />
                                                                        </div>
                                                                    </div>
                                                                </div> */}

                                                                <div className="row"  style={{padding:'10px'}}>
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <Autocomplete
                                                                                disablePortal
                                                                                id="combo-box-demo"
                                                                                options={Country}
                                                                                // sx={{ width: 300 }}
                                                                                value={profileData.country}
                                                                                onChange={handleChangeProfile}
                                                                                renderInput={(params) => <TextField {...params} label="Country" />}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <Autocomplete
                                                                                disablePortal
                                                                                id="combo-box-demo"
                                                                                options={State}
                                                                                value={profileData.state}
                                                                                onChange={handleChangeProfile}
                                                                                // sx={{ width: 300 }}
                                                                                renderInput={(params) => <TextField {...params} label="State" />}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="row"  style={{padding:'10px'}}>
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <Autocomplete
                                                                                disablePortal
                                                                                id="combo-box-demo"
                                                                                options={Country}
                                                                                value={profileData.district}
                                                                                onChange={handleChangeProfile}
                                                                                // sx={{ width: 300 }}
                                                                                renderInput={(params) => <TextField {...params} label="District" />}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <Autocomplete
                                                                                disablePortal
                                                                                id="combo-box-demo"
                                                                                options={State}
                                                                                value={profileData.city}
                                                                                onChange={handleChangeProfile}
                                                                                // sx={{ width: 300 }}
                                                                                renderInput={(params) => <TextField {...params} label="City" />}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="row"  style={{padding:'10px'}}>
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>Account No.</label>
                                                                            <input className="form-control" type="text" value={profileData.accountNo} onChange={handleChangeProfile} name="accountNo" placeholder="Enter Account No." />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="form-group">
                                                                            <label>IFSC No.</label>
                                                                            <input className="form-control" type="text" value={profileData.ifscNo} onChange={handleChangeProfile} name="ifscNo" placeholder="Enter IFSC No." />
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                                <div className="row"  style={{padding:'10px'}}>
                                                                    <div className="col mb-3">
                                                                        <div className="form-group">
                                                                            <label>Address</label>
                                                                            <textarea className="form-control" onChange={handleChangeProfile} name="address" rows="5" value={profileData.address} placeholder="Enter your Address"></textarea>
                                                                        </div>
                                                                    </div>
                                                                    {/* <div className="col">
                                                                        <div className="form-group">
                                                                            <label>Birth Date</label>
                                                                            <input className="form-control" onChange={handleChangeProfile} type="date" value={profileData.aggrimentStartDate} placeholder="Enter Birth Date" />
                                                                        </div>
                                                                    </div> */}
                                                                </div>


                                                            </div>
                                                        </div>

                                                        <div className="row"  style={{padding:'10px'}}>
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <label>Aggriment Start Date</label>
                                                                    <input className="form-control" onChange={handleChangeProfile} type="date" value={profileData.aggrimentStartDate} name="aggrimentStartDate" placeholder="Enter Aggriment Start Date" />
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="form-group">
                                                                    <label>Aggriment End Date</label>
                                                                    <input className="form-control" type="date" onChange={handleChangeProfile} value={profileData.aggrimentEndDate} name="aggrimentEndDate" placeholder="Enter Aggriment End Date" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Button
                                                            className="orderadd"
                                                            variant="outlined"
                                                            color="primary"
                                                            onClick={addrow}
                                                        >
                                                            Add Document
                                                        </Button>

                                                        <br />
                                                        <br />
                                                        <TableContainer component={Paper}>
                                                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <TableCell>Sr No.</TableCell>
                                                                        <TableCell>Attachment Name</TableCell>
                                                                        <TableCell>Image Upload</TableCell>
                                                                        <TableCell>Action</TableCell>
                                                                    </TableRow>
                                                                </TableHead>

                                                                <TableBody>
                                                                    {existingfiles.map((img, i) => {
                                                                        return (
                                                                            <TableRow id={"TableRow" + i}>
                                                                                <TableCell>{i + 1}</TableCell>
                                                                                <TableCell>{img.DocumentName}</TableCell>
                                                                                <TableCell>
                                                                                    <IconButton
                                                                                        onClick={() =>
                                                                                            handleClickDeleteImg(img.id, "tr" + i)
                                                                                        }
                                                                                    >
                                                                                        <Icon color="primary">delete</Icon>
                                                                                    </IconButton>
                                                                                </TableCell>
                                                                            </TableRow>
                                                                        )
                                                                    })}
                                                                    {rows.map((rows, index) => (
                                                                        <TableRow key={index}>
                                                                            <TableCell>{existingfiles.length + index + 1}</TableCell>
                                                                            <TableCell>
                                                                            <TextField
                                                                                    autoComplete="off"
                                                                                    className="required"
                                                                                    id="AttachmentName"
                                                                                    type="text"
                                                                                    fullWidth
                                                                                    name={'AttachmentName_' + index}
                                                                                    // value={
                                                                                    //     profileData.AttachmentName[
                                                                                    //         'AttachmentName_' + index
                                                                                    //     ] !== undefined
                                                                                    //         ? profileData.AttachmentName[
                                                                                    //         'AttachmentName_' + index
                                                                                    //         ]
                                                                                    //         : ''
                                                                                    // }
                                                                                    // onChange={(e) =>
                                                                                    //     AttachmentNamechange(e, index)
                                                                                    // }
                                                                                    validators={['required']}
                                                                                    errorMessages={[
                                                                                        'this field is required',
                                                                                    ]}
                                                                                />
                                                                            </TableCell>
                                                                            <TableCell>
                                                                            <TextField
                                                                                    autoComplete="off"
                                                                                    className="required"
                                                                                    id="file"
                                                                                    type="file"
                                                                                    fullWidth
                                                                                    name={'file_' + index}
                                                                                    onChange={(e) => filechange(e, index)}
                                                                                    errorMessages={[
                                                                                        'this field is required',
                                                                                    ]}
                                                                                />
                                                                            </TableCell>
                                                                            <TableCell>
                                                                            <Button>
                                                                                    <DeleteIcon />
                                                                                </Button>
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    ))}
                                                                </TableBody>
                                                            </Table>
                                                            {/* <table className="table table-hover table-bordered display">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Sr No.</th>
                                                                        <th>Attachment Name</th>
                                                                        <th>Image Upload</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>



                                                                <tbody>
                                                                    {existingfiles.map((img, i) => {
                                                                        return (
                                                                            <tr id={"tr" + i}>
                                                                                <td>{i + 1}</td>
                                                                                <td>{img.DocumentName}</td>
                                                                                <td>
                                                                                    <IconButton
                                                                                        onClick={() =>
                                                                                            handleClickDeleteImg(img.id, "tr" + i)
                                                                                        }
                                                                                    >
                                                                                        <Icon color="primary">delete</Icon>
                                                                                    </IconButton>
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    })}
                                                                    {rows.map((rows, index) => (
                                                                        <tr key={index}>
                                                                            {' '}
                                                                            <td>{existingfiles.length + index + 1}</td>
                                                                            <td>
                                                                                <TextField
                                                                                    autoComplete="off"
                                                                                    className="required"
                                                                                    id="AttachmentName"
                                                                                    type="text"
                                                                                    fullWidth
                                                                                    name={'AttachmentName_' + index}
                                                                                    // value={
                                                                                    //     profileData.AttachmentName[
                                                                                    //         'AttachmentName_' + index
                                                                                    //     ] !== undefined
                                                                                    //         ? profileData.AttachmentName[
                                                                                    //         'AttachmentName_' + index
                                                                                    //         ]
                                                                                    //         : ''
                                                                                    // }
                                                                                    // onChange={(e) =>
                                                                                    //     AttachmentNamechange(e, index)
                                                                                    // }
                                                                                    validators={['required']}
                                                                                    errorMessages={[
                                                                                        'this field is required',
                                                                                    ]}
                                                                                />
                                                                            </td>
                                                                            <td>
                                                                                <TextField
                                                                                    autoComplete="off"
                                                                                    className="required"
                                                                                    id="file"
                                                                                    type="file"
                                                                                    fullWidth
                                                                                    name={'file_' + index}
                                                                                    onChange={(e) => filechange(e, index)}
                                                                                    errorMessages={[
                                                                                        'this field is required',
                                                                                    ]}
                                                                                />
                                                                            </td>
                                                                            <td>
                                                                                <Button>
                                                                                    <DeleteIcon />
                                                                                </Button>
                                                                            </td>
                                                                            {' '}
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table> */}
                                                        </TableContainer>
                                                        <br />
                                                        <br />
                                                        <div className="row">
                                                            <div className="col d-flex justify-content-end">
                                                                <button className="btn btn-primary saveButton" onClick={handleSave} type="submit">Save Profile</button>
                                                            </div>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-3 mb-3">

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
