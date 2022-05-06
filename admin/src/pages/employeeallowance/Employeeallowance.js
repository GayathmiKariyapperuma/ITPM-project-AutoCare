import { useState,useEffect } from "react";
import "./Employeeallowance.css"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {useParams } from 'react-router';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
    margin: {
      margin: theme.spacing(1),
    },
  },
}));

export default function Employeeallowance(){
  
  let history = useHistory();

  const classes = useStyles();
  const {id}=useParams()

  const [name,setname]=useState('');
  const [age,setage]=useState('');
  const [nic,setnic]=useState('');
  const [email,setemail]=useState('');
  const [pnumber,setpnumber]=useState('');
  const [date,setdate]=useState('');
  const [amount,setamount]=useState('');

  const datepicker=(event)=>{
    setdate(event.target.value);
  }

  const price=(event)=>{
    setamount(event.target.value);
  }

  useEffect(()=>{
    let mounted = true;
      fetch(`http://localhost:8070/employee/profile/${id}`)
      .then(res=> res.json())
      .then((result)=>{
        if(mounted){
            setname(result.name);
            setage(result.age);
            setnic(result.nic);
            setemail(result.email)
            setpnumber(result.phoneno)
        
        }
      })
      return () => mounted = false;
  })

  const submitandler =(event)=>{
    
    
    const data ={name,age,nic,email,amount,date}
    
      axios.post(`http://localhost:8070/staffallowance/addallowance`,data)
      .then(res=>{
        alert("Allowance Added Successfully");
        console.log(data);
      })
      .catch(err=>{
        alert("Database Error");
      })
  }

  function back(){
      history.push(`/employee/profile/${id}`)
   }

  return(
    <div className="newstaff">
      <form className={classes.root} autoComplete="false" onSubmit={submitandler}>
        <h1 className="topic">Empoolye Allowance</h1>
      <TextField disabled label="Empoolye Frist Name" value={name} variant="outlined" className="textbox"/>
      <TextField disabled label="Empoolye Second Name" value={age} variant="outlined" className="textbox"/><br/>
      <TextField disabled label="Empoolye NIC" value={nic} variant="outlined" className="textbox"/>
      <TextField disabled label="Empoolye Email" value={email} variant="outlined" className="textbox"/><br/>
      <TextField disabled label="Empoolye Phone Number" value={pnumber} variant="outlined" className="textbox"/><br/>
      <TextField type="month" variant="outlined" label="Enter the allowance given month" className="datebox" value={date} onChange={datepicker} required InputLabelProps={{shrink: true,}}/>
      <div className="textboxamount">
      <FormControl className="amount" variant="outlined">
          <InputLabel>Amount</InputLabel>
          <OutlinedInput type="number" value={amount} onChange={price} required startAdornment={<InputAdornment position="start" >Rs.</InputAdornment>} labelWidth={60}/>
        </FormControl>
        </div>
        <div className="add">
        <Button type="submit" variant="contained" color="primary" >Submit the Allowance</Button>
        </div>
        <div className="back">
        <Button variant="contained" color="primary" onClick={back}>Back to page</Button>
        </div>
      </form>
    </div>
  )
}