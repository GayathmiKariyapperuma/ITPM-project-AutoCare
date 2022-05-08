import React,{ useState,useEffect } from "react";
import {useParams } from 'react-router';
import "./updatevehicle.css"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
      },
    },
  }));

export default function updatevehicle(){

    const {id}=useParams();
    
    const classes = useStyles();

    let history = useHistory();

    const [NIC,setNIC] =useState('');
    const [VehicleNo,setVehicleNo] =useState('');
    const [Colour,setColour] =useState('');
    const [Model,setModel] =useState('');
    const [Brand,setBrand] =useState('');
    const [EngineOil,setEngineOil] =useState('');
    const [LastServiceDate,setLastServiceDate] =useState('');

      useEffect(()=>{
        getUsers();
      },[])

      function getUsers(){
        // useEffect(()=>{
        let mounted = true;
        fetch(`http://localhost:8070/employee/profile/${id}`)
        .then(res=> res.json())
        .then((result)=>{
          if(mounted){
            setNIC(result.NIC)
            setVehicleNo(result.setVehicleNo)
            setColour(result.setColour)
            setModel(result.setModel)
            setBrand(result.setBrand)
            setEngineOil(result.setEngineOil)
            setLastServiceDate(result.setLastServiceDate)
          }
        })
         return () => mounted = false;
      }

      const fromhandler =(event)=>{
        //event.preventDefault();
        const data ={NIC,VehicleNo,Colour,Model,Brand,EngineOil,LastServiceDate}
        
        if(data.NIC.length<10){
          alert("Re enter NIC");
          event.preventDefault();
        }
        else{
          axios.put(`http://localhost:8070/staff/update/proflie/updatestaff/${id}`,data)
          .then(res=>{
            alert("Updated Successfully");
            console.log(data);
          })
          .catch(err=>{
            alert("Database Error");
          })
        }
      }
      
      function back(){
        history.push(`/employee/profile/${id}`)
     }

    return(
        <div className="newstaff">  
            <form className={classes.root} autoComplete="false" onSubmit={fromhandler}>
                <h1>UPDATE VEHICLE</h1>
                <TextField InputProps={{readOnly: true,}} id="NIC" name="name" label="NIC" variant="outlined"  value={NIC} onChange={(e) => {setNIC(e.target.value);}} required />
                <TextField InputProps={{readOnly: true,}} id="VehicleNo" name="VehicleNo" label="VehicleNo" variant="outlined"  value={VehicleNo} onChange={(e) => {setVehicleNo(e.target.value);}} required />
                <TextField id="Colour" name="Colour" label="Enter Colour" variant="outlined"  value={Colour} onChange={(e) => {setColour(e.target.value);}} required />
                <TextField id="Model" name="Model" label=" Enter Model"  variant="outlined"  value={Model} onChange={(e) => {setModel(e.target.value);}} required />
                <TextField id="Brand" name="Brand" label="Enter Brand"  variant="outlined"  value={Brand} onChange={(e) => {setBrand(e.target.value);}} required />
                <TextField id="EngineOil" name="EngineOil" label=" Enter EngineOil"  variant="outlined"  value={EngineOil} onChange={(e) => {setEngineOil(e.target.value);}} required />
                <TextField id="LastServiceDate" name="LastServiceDatel" label=" Enter LastServiceDate" variant="outlined"  value={LastServiceDate} onChange={(e) => {LastServiceDate(e.target.value);}} required />
            
                <div className="go">
                <Button type="submit" variant="contained" startIcon={<CloudUploadIcon />} className='btn'color="primary" > Submit </Button><br/><br/>
                <Button variant="contained" color="primary" className='btn' onClick={back}>Back to page</Button>
                </div>
                </form>

                
        </div>
    )
}