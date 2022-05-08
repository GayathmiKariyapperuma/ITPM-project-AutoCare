import React,{useState,useRef} from "react";
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';


export default function Buttoninprogress(props){

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
        const data ={cname,cnic,cemail,vnumber,stype,cnumber}

        axios.get(`http://localhost:8070/service/finish/${id}`)
        .then(res=>{
            setcname(res.data.name)
            setcnic(res.data.nic)
            setcemail(res.data.cemail)
            setvnumber(res.data.vnumber)
            setstype(res.data.stype)
            setcnumber(res.data.cnumber)
            console.log("Data Get it")
            
        })
            axios.post(`http://localhost:8070/service/finish/add`,data)
            .then(res=>{
            // alert("Employee added Successfully");

            emailjs.sendForm('service_vjxyu2u', 'template_zbea81o', form.current, 'SyT4b6zqPbizysgyf')
                .then((result) => {
            console.log(result.text);
            // alert("Email sent");
            }, (error) => {
            console.log(error.text);
            alert("Email not sent");
        });

            axios.delete(`http://localhost:8070/service/finish/delete/${id}`)
            .then(res=>{
                alert("Finish The Service and Email Sent Successfully")
                history.push(`/workprogress`);
            })
        })
        
      .catch(err=>{
        alert("Database Error");
      })
    }
    return(
        <div>
            <Button onClick={testid} variant="contained" color="primary">Finish Service</Button>
            <form ref={form}>
            <input type="hidden" value={cname} name="cname"/>
            <input type="hidden" value={cnic}/>
            <input type="hidden" value={cemail} name="cemail"/>
            <input type="hidden" value={vnumber} name="vnumber"/>
            <input type="hidden" value={stype}/>
            <input type="hidden" value={cnumber}/>
            </form>
        </div>
    )
}