import React, {useState } from "react";
import './addemployee.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import LoadingButton from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import axios from'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      display: theme.flex,
    },
  },
}));

export default function Addemployees() {
  const [name,setname] =useState('');
  const [nic,setnic] =useState('');
  const [age,setage] =useState('');
  const [phoneno,setphoneno] =useState('');
  const [address,setaddress] =useState('');
  const [email,setemail] =useState('');
  const [gender,setgender] =useState('');

  const classes = useStyles();

  const submithandler =(event)=>{
    event.preventDefault();
    const data ={name,nic,age,phoneno,address,email,gender}
    axios.post(`http://localhost:8070/employee/addemployee`,data)

      .then(res=>{
        alert("Employee Updated Successfully")
        console.log(data);
      })
      .catch(err=>{
        alert("Database Error");
      })
  }

  return(
    <div className="home">
      <h1 className="heading">Add Employee </h1>
      <form className={classes.root}>
        <TextField id="name" name="name" label="Enter to Employee's Name" className="size" variant="outlined"  value={name} onChange={(e) => {setname(e.target.value);}} required />
        <TextField id="nic" name="nic" label="Enter to Employee's NIC" className="size" variant="outlined"  value={nic} onChange={(e) => {setnic(e.target.value);}} required />
        <TextField id="age" name="age" label="Enter to Employee's Age" className="size" variant="outlined"  value={age} onChange={(e) => {setage(e.target.value);}} required />
        <TextField id="phoneno" name="phoneno" label=" Enter to Employee's Phoneno" className="size" variant="outlined"  value={phoneno} onChange={(e) => {setphoneno(e.target.value);}} required />
        <TextField id="address" name="address" label="Enter to Employee's Address" className="size" variant="outlined"  value={address} onChange={(e) => {setaddress(e.target.value);}} required />
        <TextField id="email" name="email" label="Enter to Employee's Email" className="size" variant="outlined"  value={email} onChange={(e) => {setemail(e.target.value);}} required />
        <TextField id="gender" className="size2" select label="Select to Employee's Gender" value={gender} onChange={(e) => {setgender(e.target.value);}} name="gender" SelectProps={{native: true,}} variant="outlined" required>
          <option value=""></option>
          <option value="Male">Male </option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
          </TextField>
        <div className="add">  
       <LoadingButton  className="addbtn" color="primary" onClick={submithandler} endIcon={<SendIcon />} variant="contained">Submit</LoadingButton>
      </div>
    </form>
    </div>
  )
}
