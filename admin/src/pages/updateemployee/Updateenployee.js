import React,{ useState,useEffect } from "react";
import {useParams } from 'react-router';
import "./Updateemployee.css"
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

export default function Updateemployee(){

    const {id}=useParams();
    
    const classes = useStyles();

    let history = useHistory();

    

    const [name,setname] =useState('');
    const [nic,setnic] =useState('');
    const [age,setage] =useState('');
    const [phoneno,setphoneno] =useState('');
    const [address,setaddress] =useState('');
    const [email,setemail] =useState('');
    const [gender,setgender] =useState('');

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
            setname(result.name)
            setnic(result.nic)
            setage(result.age)
            setphoneno(result.phoneno)
            setaddress(result.address)
            setemail(result.email)
            setgender(result.gender)

        //   setCfname(result.fname)
          }
        })
         return () => mounted = false;
      }

      const fromhandler =(event)=>{
        //event.preventDefault();
        const data ={name,nic,age,phoneno,address,email,gender}
        
        if(data.Pnumber.length<10){
          alert("Enter the cooetc phone number");
          event.preventDefault();
        }
        else{
          axios.put(`http://localhost:8070/staff/update/proflie/updatestaff/${id}`,data)
          .then(res=>{
            alert("Employee Updated Successfully");
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
                <h1 className='topic'>Profile Update</h1>
                <TextField InputProps={{readOnly: true,}} id="name" name="name" label="Enter to Employee's Name" className="size" variant="outlined"  value={name} onChange={(e) => {setname(e.target.value);}} required />
                <TextField InputProps={{readOnly: true,}} id="nic" name="nic" label="Enter to Employee's NIC" className="size" variant="outlined"  value={nic} onChange={(e) => {setnic(e.target.value);}} required />
                <TextField id="age" name="age" label="Enter to Employee's Age" className="size" variant="outlined"  value={age} onChange={(e) => {setage(e.target.value);}} required />
                <TextField id="phoneno" name="phoneno" label=" Enter to Employee's Phoneno" className="size" variant="outlined"  value={phoneno} onChange={(e) => {setphoneno(e.target.value);}} required />
                <TextField InputProps={{readOnly: true,}} id="address" name="address" label="Enter to Employee's Address" className="size" variant="outlined"  value={address} onChange={(e) => {setaddress(e.target.value);}} required />
                <TextField id="email" name="email" label="Enter to Employee's Email" className="size" variant="outlined"  value={email} onChange={(e) => {setemail(e.target.value);}} required />
                <TextField InputProps={{readOnly: true,}} id="gender" className="size2" label="Select to Employee's Gender" value={gender} onChange={(e) => {setgender(e.target.value);}} name="gender" variant="outlined" required/>
                <div className="go">
                <Button type="submit" variant="contained" startIcon={<CloudUploadIcon />} className='btn'color="primary" > Submit </Button><br/><br/>
                <Button variant="contained" color="primary" className='btn' onClick={back}>Back to page</Button>
                </div>
                </form>

                
        </div>
    )
}