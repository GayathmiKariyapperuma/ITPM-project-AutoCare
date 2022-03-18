import React, {useState,useRef} from "react";
import './Addservices.css'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search';
import LoadingButton from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';
import SendIcon from '@material-ui/icons/Send';
import emailjs from '@emailjs/browser';
import axios from'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      display: theme.flex,
    },
  },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function Addservices() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  const [open1, setOpen1] = React.useState(false);
  const [options1, setOptions1] = React.useState([]);
  const loading1 = open1 && options1.length === 0;

  const [fname,setfname] =useState('');
  const [nic,setnic] =useState('');
  const [vnumber, setvnumber] = React.useState('');
  const [cemail, setcemail] = React.useState('');
  const [stype, setstype] = React.useState('');
  const [cnumber, setcnumber] = React.useState('');
  const [addinfo, setaddinfo] = React.useState('');

  const [search, setsearch] = React.useState(false)
  const [nosearch, setnosearch] = React.useState(false)
  const [datainsert, setdatainsert] = React.useState(false)

  const [wfname, setwfname] = React.useState(false)
  const [wnic, setwnic] = React.useState(false)
  const [wvnumber, setwvnumber] = React.useState(false)
  const [wcemail, setwcemail] = React.useState(false)
  const [wstype, setwstype] = React.useState(false)
  const [wcnumber, setwcnumber] = React.useState(false)

  const [email, setemail] = React.useState(false)

  const classes = useStyles();
  const form = useRef();

// Fetch the Customer Name
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); 

      if (active) {
      fetch("http://localhost:8070/service/")
      .then((response)=> response.json())
      .then((data)=>{
        setOptions(data);
          })
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
// ------------------------------------------------------------

// Fetch the Customer Mobile Number
React.useEffect(() => {
  let active1 = true;

  if (!loading1) {
    return undefined;
  }

  (async () => {
    await sleep(1e3); 

    if (active1) {
    fetch("http://localhost:8070/service/")
    .then((response)=> response.json())
    .then((data)=>{
      setOptions1(data);
        })
    }
  })();

  return () => {
    active1 = false;
  };
}, [loading1]);

React.useEffect(() => {
  if (!open1) {
    setOptions1([]);
  }
}, [open1]);
// ------------------------------------------------------------

// Send the data to search the textfield

const fromhandler =(event)=>{
    axios.get(`http://localhost:8070/service/addservice/${nic}/${fname}`)
    .then((res)=>{
      setsearch(true);
      setvnumber(res.data.vnumber);
      setcemail(res.data.cemail);
      setcnumber(res.data.cnumber);
      // alert("Service Add Successfully");
      console.log(res.data.vnumber);
      // console.log(nic);
      console.log(fname);
    })
    .catch(err=>{
      setnosearch(true);
      // alert("Database Error");
    })
    event.preventDefault();
}
// Send to the data to store the database
const submithandler =(event)=>{
  event.preventDefault();

  const data ={fname,nic,vnumber,cemail,stype,cnumber,addinfo}
  if(data.fname===''){
    setwfname(true);
  }else if(data.nic===''){
    setwnic(true);
  }else if(data.vnumber===''){
    setwvnumber(true);
  }else if(data.cemail===''){
    setwcemail(true);
  }else if(data.stype===''){
    setwstype(true);
  }else if(data.cnumber===''){
    setwcnumber(true);
  }else{
    emailjs.sendForm('service_vjxyu2u', 'template_zbea81o', form.current, 'SyT4b6zqPbizysgyf')
        .then((result) => {
          console.log(result.text);
          // alert("Email sent");
          setemail(true);
        }, (error) => {
          console.log(error.text);
          alert("Email not sent");
      });

      axios.post(`http://localhost:8070/service/addservice`,data)
      .then(res=>{
        // alert("Employee Updated Successfully");
        setdatainsert(true);
        console.log(fname.name);
      })
      .catch(err=>{
        alert("Database Error");
      })
    }
}
//---------------------------------------
const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setsearch(false);
  setnosearch(false);
  setdatainsert(false);
  setwfname(false);
  setwnic(false);
  setwvnumber(false);
  setwcemail(false);
  setwstype(false);
  setwcnumber(false);
  setemail(false);
};

function TransitionRight(props) {
  return <Slide {...props} direction="left" />;
}

  return (
    <div className="home">
      <h1 className="heading">Add Service </h1>
    <form ref={form} className={classes.root} >
      <div className="from">
    <Autocomplete id="fname" className="size" sx={{ width: 300 }} open={open} onOpen={() => {setOpen(true); }} onClose={() => {setOpen(false);}} getOptionLabel={(option) => option.name} onChange={(e,value) => {setfname(value.name);} } 
      options={options} loading={loading}
      renderInput={(params) => (
        <TextField {...params}  label="Enter the Customer Name" value={fname} variant="outlined" name="fname"
          InputProps={{...params.InputProps,endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
    <Autocomplete id="nic" name="nic" className="size2" sx={{ width: 300 }} open={open1} onOpen={() => {setOpen1(true); }} onClose={() => {setOpen1(false);}} getOptionLabel={(option1) => option1.nic} onChange={(e,value) => {setnic(value.nic);}}
      options={options1} loading={loading1}
      renderInput={(params) => (
        <TextField {...params} label="Enter the Customer NIC" value={nic} variant="outlined"
          InputProps={{...params.InputProps,endAdornment: (
              <React.Fragment>
                {loading1 ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),  
          }}
        />
      )}
    />
    </div>
    <div className="search">
    <LoadingButton onClick={fromhandler} className="searchbtn" color="primary" endIcon={<SearchIcon />} variant="contained">Search</LoadingButton>
    </div>
    </form>
    <form ref={form} className={classes.root}>
    <TextField id="vnumber" name="vnumber" label="Customer Vehicle Number" className="size" variant="outlined" InputProps={{readOnly: true,}} value={vnumber} onChange={(e) => {setvnumber(e.target.value);}} required />
    <TextField id="cemail" label="Customer Email" className="size" variant="outlined" InputProps={{readOnly: true,}} name="cemail" value={cemail} onChange={(e) => {setcemail(e.target.value);}} required/>
    <TextField id="cnumber" label="Customer Mobile Number" className="size" variant="outlined" InputProps={{readOnly: true,}} name="cnumber" value={cnumber} onChange={(e) => {setcnumber(e.target.value);}} required/>
    <TextField id="stype" className="size2" select label="Service Type" value={stype} onChange={(e) => {setstype(e.target.value);}} name="stype" SelectProps={{native: true,}} variant="outlined" required>
      <option value=""></option>
      <option value="Full Service">Full Service</option>
      <option value="Non-Permanent">Normal Service</option>
      </TextField>
      <TextField id="addinfo" label="Enter the Employee Additional Information"  multiline rows={3} variant="outlined" className='size3' value={addinfo} onChange={(e) => {setaddinfo(e.target.value);}}/>
      </form>
      <div className="add">
      <LoadingButton onClick={submithandler} className="addbtn" color="primary" endIcon={<SendIcon />} variant="contained">Submit</LoadingButton>
      </div>


      <Snackbar open={search} anchorOrigin={{ vertical:'top', horizontal:'right' }} TransitionComponent={TransitionRight} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>Customer Data Added</Alert>
      </Snackbar>
      <Snackbar open={nosearch} anchorOrigin={{ vertical:'top', horizontal:'right' }} TransitionComponent={TransitionRight} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>No Customer Data Added</Alert>
      </Snackbar>
      <Snackbar open={datainsert} anchorOrigin={{ vertical:'top', horizontal:'right' }} TransitionComponent={TransitionRight} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>Service Added Successfully</Alert>
      </Snackbar>

      <Snackbar open={wfname} anchorOrigin={{ vertical:'top', horizontal:'right' }} TransitionComponent={TransitionRight} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>Please Enter the Customer Name</Alert>
      </Snackbar>
      <Snackbar open={wnic} anchorOrigin={{ vertical:'top', horizontal:'right' }} TransitionComponent={TransitionRight} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>Please Enter the Customer NIC</Alert>
      </Snackbar>
      <Snackbar open={wvnumber} anchorOrigin={{ vertical:'top', horizontal:'right' }} TransitionComponent={TransitionRight} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>Please Enter the Customer Vehicle Number</Alert>
      </Snackbar>
      <Snackbar open={wcemail} anchorOrigin={{ vertical:'top', horizontal:'right' }} TransitionComponent={TransitionRight} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>Please Enter the Customer Email</Alert>
      </Snackbar>
      <Snackbar open={wstype} anchorOrigin={{ vertical:'top', horizontal:'right' }} TransitionComponent={TransitionRight} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>Please Select the Service Type</Alert>
      </Snackbar>
      <Snackbar open={wcnumber} anchorOrigin={{ vertical:'top', horizontal:'right' }} TransitionComponent={TransitionRight} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>Please Enter the Customer Customer Mobile Number</Alert>
      </Snackbar>

      <Snackbar open={email} anchorOrigin={{ vertical:'top', horizontal:'right' }} TransitionComponent={TransitionRight} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>Email has been successfully sent to the customer.</Alert>
      </Snackbar>
    </div>
  );
}