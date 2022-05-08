import React,{ useState,useEffect } from "react";
import {useParams } from 'react-router';
import "./Editsupplier.css"
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

export default function Editsupplier(){

    const {id}=useParams();
    
    const classes = useStyles();

    let history = useHistory();

    

    const [supplierNo,setsupplierNo] =useState('');
    const [compName,setcompName] =useState('');
    const [compAddress,setcompAddress] =useState('');
    const [compEmail,setcompEmail] =useState('');
    const [compPhone,setcompPhone] =useState('');
    const [agentName,setagentName] =useState('');
    const [agentEmail,setagentEmail] =useState('');
    const [agentPhone,setagentPhone] =useState('');
    const [agreementDate,setagreemetDate] =useState('');
    const [validTime,setvalidTime] =useState('');

      useEffect(()=>{
        getUsers();
      },[])

      function getUsers(){
        // useEffect(()=>{
        let mounted = true;
        fetch(`http://localhost:8070/supplier/${supplierNo}`)
        .then(res=> res.json())
        .then((result)=>{
          if(mounted){
            setsupplierNo(result.supplierNo)
            setcompName(result.compName)
            setcompAddress(result.compAddress)
            setcompEmail(result.compEmail)
            setcompPhone(result.compPhone)
            setagentName(result.agentName)
            setagentEmail(result.agentEmail)
            setagentPhone(result.agentPhone)
            setagreemetDate(result.agreementDate)
            setvalidTime(result.validTime)

        //   setCfname(result.fname)
          }
        })
         return () => mounted = false;
      }

      const fromhandler =(event)=>{
        //event.preventDefault();
        const data ={supplierNo,compName,compAddress,compEmail,compPhone,agentName,agentEmail,agentPhone,agreementDate,validTime}
        
        if(data.Pnumber.length<10){
          alert("Enter the correct phone number");
          event.preventDefault();
        }
        else{
          axios.put(`http://localhost:8070/supplier/update/${supplierNo}`,data)
          .then(res=>{
            alert("Supplier Updated Successfully");
            console.log(data);
          })
          .catch(err=>{
            alert("Database Error");
          })
        }
      }
      
      function back(){
        history.push(`/supplier/${supplierNo}`)
     }

    return(
        <div className="newstaff">  
            <form className={classes.root} autoComplete="false" onSubmit={fromhandler}>
                <h1 className='topic'>Supplier Update</h1>
                <TextField InputProps={{readOnly: true,}} id="supplierNo" name="supplierNo" label="Enter Supplier's Number" className="size" variant="outlined"  value={supplierNo} onChange={(e) => {setsupplierNo(e.target.value);}} required />
                <TextField InputProps={{readOnly: true,}} id="compName" name="compName" label="Enter Company Name" className="size" variant="outlined"  value={compName} onChange={(e) => {setcompName(e.target.value);}} required />
                <TextField id="compAddress" name="compAddress" label="Enter Comapny Address" className="size" variant="outlined"  value={compAddress} onChange={(e) => {setcompAddress(e.target.value);}} required />
                <TextField id="compEmail" name="compEmail" label=" Enter Company Email" className="size" variant="outlined"  value={compEmail} onChange={(e) => {setcompEmail(e.target.value);}} required />
                <TextField InputProps={{readOnly: true,}} id="compPhone" name="compPhone" label="Enter Company Phone No" className="size" variant="outlined"  value={compPhone} onChange={(e) => {setcompPhone(e.target.value);}} required />
                <TextField id="agentName" name="agentName" label="Enter Agent NAme" className="size" variant="outlined"  value={agentName} onChange={(e) => {setagentName(e.target.value);}} required />
                <TextField InputProps={{readOnly: true,}} id="agentEmail" className="size2" label="Enter Agent Email" value={agentEmail} onChange={(e) => {setagentEmail(e.target.value);}} name="agentEmail" variant="outlined" required/>
                <TextField id="agentPhone" name="agentPhone" label="Enter Agent Phone no" className="size" variant="outlined"  value={agentPhone} onChange={(e) => {setagentPhone(e.target.value);}} required />
                <TextField id="agreementDate" name="agreementDate" label="Enter Agreement Date" className="size" variant="outlined"  value={agreementDate} onChange={(e) => {setagreementDate(e.target.value);}} required />
                <TextField id="validTime" name="validTime" label="Enter Valid Time" className="size" variant="outlined"  value={validTime} onChange={(e) => {setvalidTime(e.target.value);}} required />
                <div className="go">
                <Button type="submit" variant="contained" startIcon={<CloudUploadIcon />} className='btn'color="primary" > Submit </Button><br/><br/>
                <Button variant="contained" color="primary" className='btn' onClick={back}>Back to page</Button>
                </div>
                </form>

                
        </div>
    )
}