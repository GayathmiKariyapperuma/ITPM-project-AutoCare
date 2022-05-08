import React,{ useState,useEffect } from "react";
import "./Editpage.css"
import {useParams } from 'react-router';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
      },
    },
  }));


export default function Editpage(){

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
        event.preventDefault();
        const data ={cname,cnic,cemail,vnumber,stype,addinfo}
        
          axios.put(`http://localhost:8070/service/pending/edit/${id}`,data)
          .then(res=>{
            alert("Service Updated Successfully");
           
            // console.log(data);
            history.push(`/workprogress/pendingservices`);
          })
          .catch(err=>{
            alert("Database Error");
          })
      }

    return(
        <div className="home">
            <h1 className="heading">Edit Service </h1>
            <form className={classes.root} autoComplete="false" onSubmit={fromhandler}>
            <TextField InputProps={{readOnly: true,}} id="cname" label="Customer Name" variant="outlined" className='textb' value={cname} onChange={cnvalue} />
            <TextField InputProps={{readOnly: true,}} id="cnic" label="Customer NIC" variant="outlined" className='textb' value={cnic} onChange={cnivalue} />
            <TextField InputProps={{readOnly: true,}} id="cnic" label="Customer Email" variant="outlined" className='textb' value={cemail} onChange={cevalue} />
            <TextField InputProps={{readOnly: true,}} id="vnumber" label="Customer Vehicle Number" variant="outlined" className='textb' value={vnumber} onChange={vnvalue} />
            <div className="dropd">
              <div className="select">
              <select id="etype" value={stype} onChange={stvalue} className='selectn' required>
                  <option>Select the Service Type</option>
                  <option value="Full Service">Full Service</option>
                  <option value="Normal Service">Normal Service</option>
              </select>
              </div>
              </div>
            <TextField id="addinfo" label="Additional Information" multiline rows={4} variant="outlined" className='text' value={addinfo} onChange={ainvalue} /><br></br>
            <div className="but">
                <Button type="submit" variant="contained" color="primary">Update</Button>
            </div>
            </form>
        </div>
    )
}
