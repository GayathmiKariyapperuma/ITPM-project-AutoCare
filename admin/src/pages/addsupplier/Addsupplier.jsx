import React, { useState } from "react";
import './Addsupplier.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import LoadingButton from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      display: theme.flex,
    },
  },
}));

export default function Addsupplier() {
  const [supplierNo, setsupplierNo] = useState('');
  const [compName, setcompName] = useState('');
  const [compAddress, setcompAddress] = useState('');
  const [compEmail, setcompEmail] = useState('');
  const [compPhone, setcompPhone] = useState('');
  const [agentName, setagentName] = useState('');
  const [agentEmail, setagentEmail] = useState('');
  const [agentPhone, setagentPhone] = useState('');
  const [agreementDate, setagreementDate] = useState('');
  const [validTime, setvalidTime] = useState('');
  const classes = useStyles();

  const submithandler = (event) => {
    event.preventDefault();
    const data = {
      supplierNo,
      compName,
      compAddress,
      compEmail,
      compPhone,
      agentName,
      agentEmail,
      agentPhone,
      agreementDate,
      validTime
    }
    axios.post(`http://localhost:8070/supplier/add`, data)

      .then(res => {
        alert("Supplier Added Successfully")
        console.log(data);
      })
      .catch(err => {
        alert("Error in Supplier submission");
      })
  }

  return (
    <div className="home">
      <h1 className="heading">Add Supplier </h1>
      <form className={classes.root}>
        <TextField id="supplierNo" name="supplierNo" label="Supplier's Name" className="size" variant="outlined"  value={supplierNo} onChange={(e) => {setsupplierNo(e.target.value);}} required />
        <TextField id="agentName" name="agentName" label="Agent Name" className="size" variant="outlined"  value={agentName} onChange={(e) => {setagentName(e.target.value);}} required />
        <TextField id="compName" name="compName" label="Company Name" className="size" variant="outlined"  value={compName} onChange={(e) => {setcompName(e.target.value);}} required />
        <TextField id="agentEmail" name="agentEmail" label="Agent Email" className="size" variant="outlined"  value={agentEmail} onChange={(e) => {setagentEmail(e.target.value);}} required />
        <TextField id="compAddress" name="compAddress" label="Company Address" className="size" variant="outlined"  value={compAddress} onChange={(e) => {setcompAddress(e.target.value);}} required />
        <TextField id="agentPhone" name="agentPhone" label="Agent Phone No" className="size" variant="outlined"  value={agentPhone} onChange={(e) => {setagentPhone(e.target.value);}} required />
        <TextField id="compEmail" name="compEmail" label="Company Email" className="size" variant="outlined"  value={compEmail} onChange={(e) => {setcompEmail(e.target.value);}} required />
        <TextField id="compPhone" name="compPhone" label="Company Phone No" className="size" variant="outlined"  value={compPhone} onChange={(e) => {setcompPhone(e.target.value);}} required />
        <TextField id="validTime" name="validTime" label="Valid Time Period" className="size" variant="outlined"  value={validTime} onChange={(e) => {setvalidTime(e.target.value);}} required />
        <TextField type="date" variant="outlined" label="Agreement Date" className="datebox" value={agreementDate} onChange={(e) => {setagreementDate(e.target.value);}} required InputLabelProps={{shrink: true,}} />
        <div className="add">  
        <LoadingButton  className="addbtn" color="primary" onClick={submithandler} endIcon={<SendIcon />} variant="contained">Submit</LoadingButton> 
        </div>
      </form>
    </div>
  )
}