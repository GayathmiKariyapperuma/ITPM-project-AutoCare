import React,{useState} from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default function Buttondone(props){

    let id=props.cid;
    let history = useHistory();

    const [cname,setcname] =useState('');
    const [cnic,setcnic] =useState('');
    const [cemail,setcemail] =useState('');
    const [vnumber,setvnumber] =useState('');
    const [stype,setstype] =useState('');
    const [cnumber,setcnumber] =useState('');

    // useEffect(()=>{
    //     getUsers();
    //   },[])

    //   function getUsers(){
          
    //     // useEffect(()=>{
    //     let mounted = true;
    //     fetch(`http://localhost:8070/service/finish/${id}`)
    //     .then(res=> res.json())
    //     .then((result)=>{
    //       if(mounted){
    //         setcname(result.name)
    //         setcnic(result.nic)
    //         setcemail(result.cemail)
    //         setvnumber(result.vnumber)
    //         setstype(result.stype)
    //         setcnumber(result.cnumber)
    //       }
    //     })
    //      return () => mounted = false;
    //   }

    function testid(){
        const data ={cname,cnic,cemail,vnumber,stype,cnumber}

        axios.get(`http://localhost:8070/service/done/${id}`)
        .then(res=>{
            setcname(res.data.name)
            setcnic(res.data.nic)
            setcemail(res.data.cemail)
            setvnumber(res.data.vnumber)
            setstype(res.data.stype)
            setcnumber(res.data.cnumber)
            console.log("Data Get it")
            
        })
            axios.post(`http://localhost:8070/service/done/add`,data)
            .then(res=>{
            // alert("Employee added Successfully");
            axios.delete(`http://localhost:8070/service/done/delete/${id}`)
            .then(res=>{
                alert("Customer Took the Vehicle")
                history.push(`/workprogress`);
            })
        })
        
      .catch(err=>{
        alert("Database Error");
      })
    }
    return(
        <div>
            <Button onClick={testid} variant="contained" color="primary">Done</Button>
            <input type="hidden" value={cname}/>
            <input type="hidden" value={cnic}/>
            <input type="hidden" value={cemail}/>
            <input type="hidden" value={vnumber}/>
            <input type="hidden" value={stype}/>
            <input type="hidden" value={cnumber}/>
            
        </div>
    )
}