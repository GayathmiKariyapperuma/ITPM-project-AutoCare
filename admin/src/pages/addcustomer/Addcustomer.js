import React, {useState } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import LoadingButton from '@material-ui/core/Button';
import './Addcustomer.css'
//import SendIcon from '@material-ui/icons/Send';
import axios from'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      display: theme.flex,
    },
  },
}));

export default function Addcustomer() {
  const [Firstname,setFirstname] =useState('');
  const [Lastname,setLastname] =useState('');
  const [NIC,setNIC] =useState('');
  const [Address,setAddress] =useState('');
  const [Email,setEmail] =useState('');
  const [Gender,setGender] =useState('');
  const [Phonenumber,setPhonenumber] =useState('');
  const [VehicleNo,setVehicleNo] =useState('');

  const classes = useStyles();

  const submithandler =(event)=>{

    event.preventDefault();

    const data ={Firstname,Lastname,NIC,Address,Email,Gender,Phonenumber,VehicleNo}

    axios.post(`http://localhost:8070/customer/addcustomer`,data)
      .then(res=>{
        alert("Customer Insert Successfully")
        console.log(data);
      })
      .catch(err=>{
        alert("Database Error");
      })
  }

  return(
    <div className="home">
      <h1> ADD CUSTOMER </h1>
      <form className={classes.root}>
        <TextField id="Firstname" name="Firstname" label="Enter Firstname"  variant="outlined"  value={Firstname} onChange={(e) => {setFirstname(e.target.value);}} required />
        <TextField id="Lastname" name="Lastname" label="Enter Lastname" variant="outlined"  value={Lastname} onChange={(e) => {setLastname(e.target.value);}} required />
        <TextField id="NIC" name="NIC" label="Enter NIC" variant="outlined"  value={NIC} onChange={(e) => {setNIC(e.target.value);}} required />
        <TextField id="Address" name="Address" label=" Enter Address" variant="outlined"  value={Address} onChange={(e) => {setAddress(e.target.value);}} required />
        <TextField id="Email" name="Email" label="Enter Email" variant="outlined"  value={Email} onChange={(e) => {setEmail(e.target.value);}} required />
        <TextField id="Gender" name="Gender" label="Enter Gender"  variant="outlined"  value={Gender} onChange={(e) => {setGender(e.target.value);}} required />
        <TextField id="Phonenumber" name="Phonenumber" label="Enter Phonenumber"  variant="outlined"  value={Phonenumber} onChange={(e) => {setPhonenumber(e.target.value);}} required />
        <TextField id="VehicleNo" name="VehicleNo" label="Enter VehicleNo"  variant="outlined"  value={VehicleNo} onChange={(e) => {setVehicleNo(e.target.value);}} required />
        <div className="add">  
       <LoadingButton  className="addbtn" color="primary" onClick={submithandler}  variant="contained">Submit</LoadingButton>
      </div>
    </form>
    </div>
  )
}