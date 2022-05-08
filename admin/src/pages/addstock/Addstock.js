import React, { useState } from "react";
import './Addstock.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import LoadingButton from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
//import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
//import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      display: theme.flex,
    },
  },
}));

export default function Addstock() {
  const [itemNo, setitemNo] = useState('');
  const [stockNo, setstockNo] = useState('');
  const [category, setcategory] = useState('');
  const [name, setname] = useState('');
  const [brand, setbrand] = useState('');
  const [quantity, setquantity] = useState('');
  const [agentName, setagentName] = useState('');
  const [unitPrice, setunitPrice] = useState('');
  const [date, setdate] = useState('');
  const [value, setValue] = React.useState(null);
  const classes = useStyles();

  const submithandler = (event) => {
    event.preventDefault();
    const data = {
        itemNo,
        stockNo,
        category,
        name,
        brand,
        quantity,
        agentName,
        unitPrice,
        date
    }
    axios.post(`http://localhost:8070/inventory/addstock`, data)

      .then(res => {
        alert("Stock Added Successfully")
        console.log(data);
      })
      .catch(err => {
        alert("Stock Added Successfully");
      })
  }

  return (
    <div className="home">
      <h1 className="heading">Add Stock </h1>
      <form className={classes.root}>
        <TextField id="itemNo" name="itemNo" label="Item No" className="size" variant="outlined"  value={itemNo} onChange={(e) => {setitemNo(e.target.value);}} required />
        <TextField id="brand" name="brand" label="Brand" className="size" variant="outlined"  value={brand} onChange={(e) => {setbrand(e.target.value);}} required />
        <TextField id="stockNo" name="stockNo" label="Stock No" className="size" variant="outlined"  value={stockNo} onChange={(e) => {setstockNo(e.target.value);}} required />
        <TextField id="quantity" name="quantity" label="Quantity" className="size" variant="outlined"  value={quantity} onChange={(e) => {setquantity(e.target.value);}} required />
        <TextField id="name" name="name" label="Item Name" className="size" variant="outlined"  value={name} onChange={(e) => {setname(e.target.value);}} required />
        <TextField id="agentName" name="agentName" label="Agent's Name" className="size" variant="outlined"  value={agentName} onChange={(e) => {setagentName(e.target.value);}} required />
        <TextField id="category" name="category" label="Category" className="size" variant="outlined"  value={category} onChange={(e) => {setcategory(e.target.value);}} required />
        <TextField id="unitPrice" name="unitPrice" label="Unit Price" className="size" variant="outlined"  value={unitPrice} onChange={(e) => {setunitPrice(e.target.value);}} required />
        <TextField type="date" variant="outlined" label="Date" className="datebox" value={date} onChange={(e) => {setdate(e.target.value);}} required InputLabelProps={{shrink: true,}} />
        {/*<LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="For desktop"
          value={value}
          minDate={new Date('2017-01-01')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>*/}
        <div className="add">  
        <LoadingButton  className="addbtn" color="primary" onClick={submithandler} endIcon={<SendIcon />} variant="contained">Submit</LoadingButton> 
        </div>
      </form>
    </div>
  )
}