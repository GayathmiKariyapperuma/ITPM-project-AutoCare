import React, {useState } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import LoadingButton from '@material-ui/core/Button';
import './Addvehicle.css'
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

export default function Addvehicle() {
  const [NIC,setNIC] =useState('');
  const [VehicleNo,setVehicleNo] =useState('');
  const [Colour,setColour] =useState('');
  const [Model,setModel] =useState('');
  const [Brand,setBrand] =useState('');
  const [EngineOil,setEngineOil] =useState('');
  const [LastServiceDate,setLastServiceDate] =useState('');

  const classes = useStyles();

  const submithandler =(event)=>{

    event.preventDefault();

    const data ={NIC,VehicleNo,Colour,Model,Brand,EngineOil,LastServiceDate}

    axios.post(`http://localhost:8070/customer/addvehicle`,data)
      .then(res=>{
        alert("Vehicle Insert Successfully")
        console.log(data);
      })
      .catch(err=>{
        alert("Database Error");
      })
  }

  return(
    <div className="home">
      <h1> ADD VEHICLE </h1>
      <form className={classes.root}>
      <TextField id="NIC" name="NIC" label="Enter NIC"  variant="outlined"  value={NIC} onChange={(e) => {setNIC(e.target.value);}} required />
        <TextField id="VehicleNo" name="VehicleNo" label="Enter VehicleNo"  variant="outlined"  value={VehicleNo} onChange={(e) => {setVehicleNo(e.target.value);}} required />
        <TextField id="Colour" name="Colour" label=" Enter Colour"  variant="outlined"  value={Colour} onChange={(e) => {setColour(e.target.value);}} required />
        <TextField id="Model" name="Model" label="Enter Model"  variant="outlined"  value={Model} onChange={(e) => {setModel(e.target.value);}} required />
        <TextField id="Brand" name="Brand" label="Enter Brand" variant="outlined"  value={Brand} onChange={(e) => {setBrand(e.target.value);}} required />
        <TextField id="EngineOil" name="EngineOil" label="Enter EngineOil" variant="outlined"  value={EngineOil} onChange={(e) => {setEngineOil(e.target.value);}} required />
        <TextField id="LastServiceDate" name="LastServiceDate" label="Enter LastServiceDate" variant="outlined"  value={LastServiceDate} onChange={(e) => {setLastServiceDate(e.target.value);}} required />
        <div className="add">  
       <LoadingButton  className="addbtn" color="primary" onClick={submithandler}  variant="contained">Submit</LoadingButton>
      </div>
    </form>
    </div>
  )
}