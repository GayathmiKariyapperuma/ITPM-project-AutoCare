import React,{ useState,useEffect } from "react";
import {useParams } from 'react-router';
import "./Employeepaysalary.css"
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
      },
    },
  }));

export default function Employeepaysalary(){
    
  let history = useHistory();

    const classes = useStyles();

    const {id}=useParams();

    const [name,setname] = useState('');
    const [age,setage] = useState('');
    const [email,setemail] = useState('');
    const [nic,setnic] = useState('');
    const [allowance,setallowance] = useState(0);
    const [basicsalary,setbasicsalary]=useState(0);
    const [date,setdate]=useState('');

    

    const fvalue=(event)=>{
        setname(event.target.value);
      }
      const svalue=(event)=>{
        setage(event.target.value);
      }
      const evalue =(event) => {
        setemail(event.target.value);
      }
      const allowancevalue=(event)=>{
        setallowance(event.target.value);
      }
      const nicvalue=(event)=>{
        setnic(event.target.value);
      }
      const bvalue=(event)=>{
        setbasicsalary(event.target.value);
      }

      

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
            setage(result.age)
            setemail(result.email)
            setnic(result.nic)


        //   setCfname(result.fname)
          }
        })
         return () => mounted = false;
      }

    const datepicker=(event)=>{
        setdate(event.target.value);
      }
      
      const getUsers2=(event)=>{
        event.preventDefault();
        axios.get(`http://localhost:8070/staffallowance/viewallowance/${nic}/${date}`)
        .then((res)=>{
          if(res.data==null){
            alert("No Allowance Given!!");
            // setpop(true);
              setallowance("");
          }
          else{
            setallowance(res.data.amount)
            alert("Added Allowance");
            // setadd(true)
          }
        })
      }
  
      const fromhandler =(event)=>{
        event.preventDefault();
        const data ={name,age,email,nic,allowance,basicsalary,date}
          axios.post(`http://localhost:8070/staffpaysalary/paysalary`,data)
          .then(res=>{
            alert("Pay Successfully");
            console.log(data);
          })
          .catch(err=>{
            alert("Database Error");
          })
      }

      function back(){
        history.push(`/employee/profile/${id}`)
     }
     

    const b=parseInt(basicsalary)
    
    return(
        <div className="newstaff">
            <form className={classes.root} autoComplete="false" onSubmit={fromhandler}>
                <h1 className='topic'>Empoolye Pay Salary</h1>
                <TextField disabled id="name" label="Employee name" variant="outlined" className='textb' value={name} onChange={fvalue} />
                <TextField disabled id="age" label="Employee Age" variant="outlined" className='textb' value={age} onChange={svalue} required/><br></br>
                <TextField disabled type="email" id="email" label="Employee E-mail Address" variant="outlined" className='textb' value={email} onChange={evalue} required/>
                <TextField disabled id="nic" label="Employee NIC" variant="outlined" className='textb' value={nic} onChange={nicvalue} required/><br/>
                <TextField disabled id="allowance" label="Employee Total Allowance" variant="outlined" className='textb' value={allowance} onChange={allowancevalue} required/>
                <TextField type="month" variant="outlined" label="Enter the allowance given month" className="paydatebox" value={date} onChange={datepicker} required InputLabelProps={{shrink: true,}}/>
                <button onClick={getUsers2} className="checkbtn">Check</button><br/>
                <div className="btestbox">
                <FormControl className="btestboxw" variant="outlined">
                <InputLabel>Amount</InputLabel>
                <OutlinedInput type="number" value={basicsalary} onChange={bvalue} required  startAdornment={<InputAdornment position="start" >Rs.</InputAdornment>} labelWidth={60} />
                </FormControl>
                </div>
                <div className="go">
                <Button type="submit" variant="contained" startIcon={<CloudUploadIcon/>} className='btn'color="primary"> Submit </Button><br/><br/>
                <Button variant="contained" color="primary" className='btn' onClick={back}>Back to page</Button>
                </div>
                {/* <div className="go">
                <Button variant="contained" className='btn' color="primary"> Reset </Button>
                </div> */}
                </form>
                <h2 className="total">Total Employee Salary</h2><br/>
                <h2 className="totalvalue"> Rs.{allowance + b}.00</h2>
        </div>
    )
}