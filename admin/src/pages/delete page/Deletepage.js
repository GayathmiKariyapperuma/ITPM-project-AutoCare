import React,{ useState,useEffect } from "react";
import "./Deletepage.css"
import {useParams } from 'react-router';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
      },
    },
  }));


export default function Deletepage(){

    const {id}=useParams();
    const classes = useStyles();
    let history = useHistory();

    const [cname,setcname] = useState('');
    const [cnic,setcnic] = useState('');
    const [cemail,setcemail] = useState('');
    const [vnumber,setvnumber] = useState('');
    const [stype,setstype] = useState('');
    const [addinfo,setaddinfo] = useState('');

    const cnvalue=(event)=>{
        setcname(event.target.value);
      }
    const cnivalue=(event)=>{
        setcnic(event.target.value);
      }
    const cevalue=(event)=>{
        setcemail(event.target.value);
      }
    const vnvalue=(event)=>{
        setvnumber(event.target.value);
      }
    const stvalue=(event)=>{
        setstype(event.target.value);
      }
    const ainvalue=(event)=>{
        setaddinfo(event.target.value);
      }

    useEffect(()=>{
        getUsers();
      },[])

      function getUsers(){
        // useEffect(()=>{
        let mounted = true;
        fetch(`http://localhost:8070/service/pending/${id}`)
        .then(res=> res.json())
        .then((result)=>{
          if(mounted){
          setcname(result.name)
          setcnic(result.nic)
          setcemail(result.cemail)
          setvnumber(result.vnumber)
          setstype(result.stype)
          setaddinfo(result.addinfo)
          }
        })
         return () => mounted = false;
      }

      const fromhandler =(event)=>{
          
          axios.delete(`http://localhost:8070/service/pending/delete/${id}`)
          .then(res=>{
            history.replace(`/workprogress/pendingservices`);
          })
          .catch(err=>{
            alert("Database Error");
          })
      }

    return(
        <div className="home">
            <h1 className="heading">Delete Service </h1>
            <form className={classes.root} autoComplete="false">
            <TextField InputProps={{readOnly: true,}} id="cname" label="Customer Name" variant="outlined" className='textb' value={cname} onChange={cnvalue} />
            <TextField InputProps={{readOnly: true,}} id="cnic" label="Customer NIC" variant="outlined" className='textb' value={cnic} onChange={cnivalue} />
            <TextField InputProps={{readOnly: true,}} id="cnic" label="Customer Email" variant="outlined" className='textb' value={cemail} onChange={cevalue} />
            <TextField InputProps={{readOnly: true,}} id="vnumber" label="Customer Vehicle Number" variant="outlined" className='textb' value={vnumber} onChange={vnvalue} />
            <TextField InputProps={{readOnly: true,}} id="vnumber" label="Service Type" variant="outlined" className='textb' value={stype} onChange={stvalue} />
            <TextField InputProps={{readOnly: true,}} id="addinfo" label="Additional Information" multiline rows={1} variant="outlined" className='textb' value={addinfo} onChange={ainvalue} /><br></br>
            <div className="but">
                <Button onClick={fromhandler} variant="contained" color="primary">Delete</Button>
            </div>
            </form>
        </div>
    )
}
