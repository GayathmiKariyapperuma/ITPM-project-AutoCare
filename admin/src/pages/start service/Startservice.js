import React,{useState,useEffect,useRef} from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import SendIcon from '@material-ui/icons/Send';
import LoadingButton from '@material-ui/core/Button';
import {useParams } from 'react-router';
import "./Startservice.css"
import { useHistory } from "react-router-dom";
import axios from'axios';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';
import emailjs from '@emailjs/browser';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '400px',
      },
    },
  }));

  function sleep(delay = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }
export default function Startservice(){

    const {id}=useParams();
    let history = useHistory();
    const form = useRef();
    

    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;

    const [cname,setcname] =useState('');
    const [cnic,setcnic] =useState('');
    const [cemail,setcemail] =useState('');
    const [vnumber,setvnumber] =useState('');
    const [stype,setstype] =useState('');
    const [cnumber,setcnumber] =useState('');
    const [ename,setename] =useState('');

    const [wename, setwename] = React.useState(false)
    
    const classes = useStyles();

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

      useEffect(()=>{
        getUsers();
      },[])

      function getUsers(){
        // useEffect(()=>{
        let mounted = true;
        fetch(`http://localhost:8070/service/inprogress/${id}`)
        .then(res=> res.json())
        .then((result)=>{
          if(mounted){
            setcname(result.name)
            setcnic(result.nic)
            setcemail(result.cemail)
            setvnumber(result.vnumber)
            setstype(result.stype)
            setcnumber(result.cnumber)
          }
        })
         return () => mounted = false;
      }

      const submithandler =(event)=>{
        event.preventDefault();
      
        const data ={cname,cnic,cemail,vnumber,stype,cnumber,ename}
        if(data.ename===''){
          setwename(true);
        }
        else{
          emailjs.sendForm('service_vjxyu2u', 'template_nnwibka', form.current, 'SyT4b6zqPbizysgyf')
                .then((result) => {
            console.log(result.text);
            // alert("Email sent");
            }, (error) => {
            console.log(error.text);
            alert("Email not sent"); 
        });

        axios.post(`http://localhost:8070/service/inprogress/add`,data)
        .then(res=>{
          alert("Service Will Be Started");
        axios.delete(`http://localhost:8070/service/pending/delete/${id}`)
        .then(res=>{
          history.push(`/workprogress/pendingservices`);
        })
      })
      .catch(err=>{
        alert("Database Error");
      })
      
      // axios.delete(`http://localhost:8070/service/pending/delete/${id}`)
      // .then(res=>{
      //   alert("Pending Service Delete Successfully");
      // })
      // .catch(err=>{
      //   alert("Database Error");
      // })
      }
    }
      function TransitionRight(props) {
        return <Slide {...props} direction="left" />;
      }

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setwename(false);
      };
      
    return(
        <div className="home">
            <h1 className="heading">Assign Employee</h1>
            <form ref={form} className={classes.root} autoComplete="off">
            <TextField id="Customer Name" name="cname" value={cname} label="Customer Name" InputProps={{readOnly: true,}} variant="outlined"/>
            <TextField id="Customer NIC" name="cnic" value={cnic} label="Customer NIC" InputProps={{readOnly: true,}} variant="outlined"/>
            <TextField id="Customer Email" name="cemail" value={cemail} label="Customer Email" InputProps={{readOnly: true,}} variant="outlined"/>
            <TextField id="Vehicle Number" name="vnumber" value={vnumber} label="Vehicle Number" InputProps={{readOnly: true,}} variant="outlined"/>
            <div className="feild">
            <Autocomplete open={open} onOpen={() => {setOpen(true); }} onClose={() => {setOpen(false);}} getOptionLabel={(option) => option.name} onChange={(e,value) => {setename(value.name);} } 
                options={options} loading={loading}
                renderInput={(params) => (
                    <TextField {...params}  label="Enter the Employee Name" value={ename} variant="outlined" name="fname"
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
                <TextField id="Service Type" name="stype" value={stype} label="Service Type" InputProps={{readOnly: true,}} variant="outlined"/>
                </div>
                <div className="addbtn">
                    <LoadingButton onClick={submithandler} color="primary" endIcon={<SendIcon />} variant="contained">Start Service</LoadingButton>
                <input type="hidden" value={cnumber}/>
                </div>
            </form>

            <Snackbar open={wename} anchorOrigin={{ vertical:'top', horizontal:'right' }} TransitionComponent={TransitionRight} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>Please Assign Employee</Alert>
            </Snackbar>
        </div>
    )
}