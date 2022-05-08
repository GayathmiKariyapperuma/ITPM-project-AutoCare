import React,{ useState,useEffect } from "react";
import "./Editorder.css"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
      },
    },
  }));

export default function Editorder(){
    
    const classes = useStyles();

    const [orderNo,setorderNo] =useState('');
    const [supplierNo,setsupplierNo] =useState('');
    const [itemCodes,setitemCodes] =useState('');
    const [orderDate,setorderDate] =useState('');

      useEffect(()=>{
        getUsers();
      },[])

      function getUsers(){
        let mounted = true;
        fetch(`http://localhost:8070/order/${orderNo}`)
        .then(res=> res.json())
        .then((result)=>{
          if(mounted){
            setorderNo(result.orderNo)
            setsupplierNo(result.supplierNo)
            setitemCodes(result.itemCodes)
            setorderDate(result.orderDate)

          }
        })
         return () => mounted = false;
      }

      const fromhandler =(event)=>{
        const data ={orderNo,supplierNo,itemCodes,orderDate}
        
        axios.put(`http://localhost:8070/supplier/update/${orderNo}`,data)
          .then(res=>{
            alert("Supplier Updated Successfully");
            console.log(data);
          })
          .catch(err=>{
            alert("Database Error");
          })
        }

    return(
        <div className="newstaff">  
            <form className={classes.root} autoComplete="false" onSubmit={fromhandler}>
                <h1 className='topic'>Order Update</h1>
                <TextField InputProps={{readOnly: true,}} id="orderNo" name="orderNo" label="Enter Supplier's Number" className="size" variant="outlined"  value={orderNo} onChange={(e) => {setorderNo(e.target.value);}} required />
                <TextField InputProps={{readOnly: true,}} id="supplierNo" name="supplierNo" label="Enter Company Name" className="size" variant="outlined"  value={supplierNo} onChange={(e) => {setsupplierNo(e.target.value);}} required />
                <TextField id="itemCodes" name="itemCodes" label="Enter Comapny Address" className="size" variant="outlined"  value={itemCodes} onChange={(e) => {setitemCodes(e.target.value);}} required />
                <TextField id="orderDate" name="orderDate" label=" Enter Company Email" className="size" variant="outlined"  value={orderDate} onChange={(e) => {setorderDate(e.target.value);}} required />
                <div className="go">
                <Button type="submit" variant="contained" startIcon={<CloudUploadIcon />} className='btn'color="primary" > Submit </Button><br/><br/>
                </div>
                </form>

                
        </div>
    )
}