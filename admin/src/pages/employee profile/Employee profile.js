import React from 'react';
import { useEffect,useState } from 'react';
import "./Employee profile.css"
import Button from '@material-ui/core/Button';
import {useParams } from 'react-router';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

export default function Employeeprofile(){
  
  const [worker,setworker]=useState({});
  const {id}=useParams()
  let history = useHistory();

  function drop(){
   axios.delete(`http://localhost:8070/employee/proflie/delete/${id}`)
   .then(res=>{
     alert("Deleted!")
     history.push("/viewemployees")
   })
   .catch(
     
   );
  }
  
 
  useEffect(()=>{
  let mounted = true;
    fetch(`http://localhost:8070/employee/profile/${id}`)
    .then(res=> res.json())
    .then((result)=>{
      if(mounted){
      setworker(result);
      }
    })
    return () => mounted = false;
})
  

  return(
    <div className="newstaff">
    <h1 className='topic'>Employee Profile</h1>
    <div className="allbtn">
    <Link to={`/allowance/${id}`}>
        <Button variant="contained" color="primary">Add Allowance</Button>
      </Link>
      </div>
      <div className="paybtn">
      <Link to={`/paysalary/${id}`}>
        <Button variant="contained" color="primary">Pay Salary</Button> 
      </Link>
      </div>
    <table className="tabled">
      <thead>
        <tr>
          <th className="thd trn">Name</th>
          <th className="thd trn">{worker.name}</th>
        </tr>
        <tr>
          <th className="thd">Age</th>
          <th className="thd">{worker.age}</th>
        </tr>
        <tr>
          <th className="thd trn">Phoneno</th>
          <th className="thd trn">{worker.phoneno}</th>
        </tr>
        <tr>
          <th className="thd">Address</th>
          <th className="thd">{worker.address}</th>
        </tr>
        <tr>
          <th className="thd trn">NIC</th>
          <th className="thd trn">{worker.nic}</th>
        </tr>
        <tr>
          <th className="thd">E-mail</th>
          <th className="thd">{worker.email}</th>
        </tr>
        <tr>
          <th className="thd trn">Gender</th>
          <th className="thd trn">{worker.gender}</th>
        </tr>
      </thead>
    </table>
    <div className="btn1">
    <Link to={`/update/proflie/${worker.nic}`}>
    <Button variant="contained" color="primary" className="btn11">Update User Details</Button>
    </Link>
    </div>
    <div className="btn2">
    <Button variant="contained" color="primary" className="btn11" onClick={drop}>Delete This Proflie</Button>
    </div>
  </div>
  )
}