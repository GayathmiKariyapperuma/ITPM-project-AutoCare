import React,{useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
/*import "./Editorder.css";*/

export default function Editorder(){

    const [vNo, setVNum] = useState("");
    const [entryDate, setEDate] = useState("");
    const [lsMileage, setLSMile] = useState("");
    const [lsDate, setLSDate] = useState("");

    useEffect(() =>{
        
        setVNum(localStorage.getItem('Vehicle Number'));
        setEDate(localStorage.getItem('Entry Date'));
        setLSMile(localStorage.getItem('Last Service Mileage'));
        setLSDate(localStorage.getItem('Last Service Date'));

    }, [] );

    const update = (e) => {
        axios.put(`http://localhost:8070/order/update/${vNo}`, {
       
            vNo,
            entryDate,
            lsMileage,
            lsDate

        })
        //window.location.reload(false);
        window.location="/";
    }

    const search = (d) => {
        axios.put(`http://localhost:8070/order/get/${vNo}`, {
       
            vNo,
            entryDate,
            lsMileage,
            lsDate

        })
        //window.location.reload(false);
        window.location="/";
    }
    
      
    return(
    <>
    <div className="home">
    <h1 className="heading">Stock Report</h1>
    <form>
        <div>
            <form className="d-flex">
                <input className="form-control me-1" type="text" id="vNo"minLength={12} maxLength={12} value={vNo}  placeholder="Enter Vehicle No" required 
                onChange={(e)=>{setVNum(e.target.value);}}/>
                <button class="btn1" type="submit" onClick={search}>Search</button>&nbsp;
            </form>
        </div>
        <br/><br/>
        <div class="mb-3">
                <label for="ls mileage" class="form-label">Last Service Mileage</label>
                <input type="text" class="form-control" id="lsMile" value={lsMileage}
                onChange={(e)=> {
      
                    setLSMile(e.target.value);
      
                }}/>
            </div>
       
            <div class="mb-3">
                <label for="ls date" class="form-label">Last Service Date</label>
                <input type="text" class="form-control" id="lsDate" value={lsDate} 
                onChange={(e)=> {
      
                    setLSDate(e.target.value);
                }}/>
            </div>
            <center> 
            <Link to={"/"}><button type="submit" class="btn" onClick={(d)=>{update(d);}}>UPDATE</button></Link>&nbsp;&nbsp;&nbsp;
        </center>
        </form>    
    
       </div>
     
     </>
    )
}