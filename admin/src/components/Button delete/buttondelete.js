import React,{useState,useRef} from "react";
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';


export default function Buttondelete(props){

    let id=props.cid;
    let history = useHistory();

    
    const form = useRef();

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
        

            axios.delete(`http://localhost:8070/customer/delete/${id}`)
            .then(res=>{
                alert("Customer Deleted")
                history.push(`/workprogress`);
            })
            .catch(err=>{
                alert("Database Error");
              })
        }

    return(
        <div>
            <Button onClick={testid} variant="contained" color="primary">Delete</Button>
            
        </div>
    )
}