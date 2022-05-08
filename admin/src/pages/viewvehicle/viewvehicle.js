import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
// import Buttondelete from '../../components/Button delete/buttondelete';
// import { Link } from "react-router-dom";
// import "./InprogressPage.css"


export default function Viewvehicle({search,setSearch}){

    const [servicedetails, setservicedetails] = useState([
        {
          VehicleNo: "",
          Colour: "",
          Model: "",
          Brand: "",
          
        },
      ]);
    
      useEffect(() => {
        function getdetails() {
          axios
            .get("http://localhost:8070/customer/vehicle/")
            .then((res) => {
            //   console.log(res);
              setservicedetails(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        }
    
        getdetails();
      },[]);

      const renderClass = (servicedetails, index) => {
        return (
          <tr key={index}>
            <td className="table-clo1">{servicedetails.VehicleNo}</td>
            <td className="table-clo3">{servicedetails.Colour}</td>
            <td className="table-clo4">{servicedetails.Model}</td>
            <td className="table-clo5">{servicedetails.Brand}</td>

            {/* <td>
              <Buttondelete cid={servicedetails._id}/>
            </td>
            <td><Link to={`/workprogress/startservice/${servicedetails._id}`}>
                <button  size="small" color="primary" >Update</button>
                </Link>
            </td> */}
          </tr>
        );
      };

    return(
        <div className="home">
            <h1 className="heading">Vehicle Details</h1>
            <input placeholder="Enter Customer Vehicle Number " className="searchbox" type="search" onChange={(e) => setSearch(e.target.value)}/>
            {/* <div ref={componentRef}> */}
            <table className="table-report">
            <thead>
              <tr className="trn">
                <th>Vehicle No</th>
                <th>Vehicle Colour</th>
                <th>Vehicle Model</th>
                <th>Vehicle Brand</th>
                
              </tr>
            </thead>
            <tbody>{servicedetails ?.reverse()
                .filter((filteredservices) =>
                    filteredservices.NIC
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ).map(renderClass)}</tbody>
          </table>
          {/* </div> */}
        </div>
    )
}