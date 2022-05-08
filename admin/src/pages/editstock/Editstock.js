import React, { useState } from "react";
import './Addsupplier.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import LoadingButton from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      display: theme.flex,
    },
  },
}));

export default function Addsupplier() {
  const [itemNo, setitemNo] = useState('');
  const [stockNo, setstockNo] = useState('');
  const [itemName, setitemName] = useState('');
  const [category, setcategory] = useState('');
  const [brand, setbrand] = useState('');
  const [quantity, setquantity] = useState('');
  const [agentName, setagentName] = useState('');
  const [unitPrice, setunitPrice] = useState('');
  const [date, setdate] = useState('');

  useEffect(()=>{
    getUsers();
  },[])

  function getUsers(){
    let mounted = true;
    fetch(`http://localhost:8070/stock/${stockNo}`)
    .then(res=> res.json())
    .then((result)=>{
      if(mounted){
        setitemNo(result.itemNo)
        setstockNo(result.stockNo)
        setitemName(result.itemName)
        setcategory(result.category)
        setbrand(result.brand)
        setquantity(result.quantity)
        setagentName(result.agentName)
        setunitPrice(result.unitPrice)
        setdate(result.date)
        

      }
    })
     return () => mounted = false;
  }

  const fromhandler =(event)=>{
    const data ={itemNo,stockNo,itemName,category}
    
    axios.put(`http://localhost:8070/stock/update/${itemNo}`,data)
      .then(res=>{
        alert("Stock Updated Successfully");
        console.log(data);
      })
      .catch(err=>{
        alert("Database Error");
      })
    }

return(
    <div className="newstaff">  
        <form className={classes.root} autoComplete="false" onSubmit={fromhandler}>
            <h1 className='topic'>Stock Update</h1>
            <TextField InputProps={{readOnly: true,}} id="itemNo" name="itemNo" label="Enter Supplier's Number" className="size" variant="outlined"  value={itemNo} onChange={(e) => {setitemNo(e.target.value);}} required />
            <TextField InputProps={{readOnly: true,}} id="stockNo" name="stockNo" label="Enter Company Name" className="size" variant="outlined"  value={stockNo} onChange={(e) => {setstockNo(e.target.value);}} required />
            <TextField id="itemName" name="itemName" label="Enter Comapny Address" className="size" variant="outlined"  value={itemName} onChange={(e) => {setitemName(e.target.value);}} required />
            <TextField id="category" name="category" label=" Enter Company Email" className="size" variant="outlined"  value={category} onChange={(e) => {setcategory(e.target.value);}} required />
            <TextField id="brand" name="brand" label=" Enter Brand" className="size" variant="outlined"  value={brand} onChange={(e) => {setbrand(e.target.value);}} required />
            <TextField id="quantity" name="quantity" label=" Enter quantity" className="size" variant="outlined"  value={quantity} onChange={(e) => {setquantity(e.target.value);}} required />
            <TextField id="agentName" name="agentName" label=" Enter Agent Name" className="size" variant="outlined"  value={agentName} onChange={(e) => {setagentName(e.target.value);}} required />
            <TextField id="unitPrice" name="unitPrice" label=" Enter Unit Price" className="size" variant="outlined"  value={unitPrice} onChange={(e) => {setunitPrice(e.target.value);}} required />
            <TextField id="date" name="date" label=" Enter Date" className="size" variant="outlined"  value={date} onChange={(e) => {setdate(e.target.value);}} required />
            <div className="go">
            <Button type="submit" variant="contained" startIcon={<CloudUploadIcon />} className='btn'color="primary" > Submit </Button><br/><br/>
            </div>
            </form>

            
    </div>
)
}