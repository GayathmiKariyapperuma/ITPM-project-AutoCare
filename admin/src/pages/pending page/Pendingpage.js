import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Pendingpage.css"
import Button from '@material-ui/core/Button';

export default function Pendingpage({search,setSearch}){

    const [servicedetails, setservicedetails] = useState([
        {
          name: "",
          nic: "",
          vnumber: "",
          cemail: "",
          stype: "",
          cnumber: "",
        },
      ]);
    
      useEffect(() => {
        function getdetails() {
          axios
            .get("http://localhost:8070/service/pending")
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
            <td className="table-clo1">{servicedetails.name}</td>
            <td className="table-clo3">{servicedetails.vnumber}</td>
            <td className="table-clo4">{servicedetails.cemail}</td>
            <td className="table-clo5">{servicedetails.stype}</td>
            <td className="table-clo6">{servicedetails.cnumber}</td>
            <td className="table-clo7">
              <Link className='link' to={`/workprogress/editordeleteservice/${servicedetails._id}`}>
                <Button size="small" color="primary" variant="outlined" >Edit / Delete</Button>
                </Link>
            </td>
            {/* <td>
              <Buttonid cid={servicedetails._id}/>
            </td> */}
            <td className="table-clo8"><Link className='link' to={`/workprogress/startservice/${servicedetails._id}`}>
                <Button  size="small" color="primary" variant="contained">Start Service</Button>
                </Link>
            </td>
          </tr>
        );

      };

    return(
        <div className="home">
            <h1 className="heading">Pending Services</h1>
            <input placeholder="Enter Customer Vehicle Number " className="searchbox" type="search" onChange={(e) => setSearch(e.target.value)}/>
            {/* <div ref={componentRef}> */}
            <table className="table-report">
            <thead>
              <tr className="trn">
                <th>Customer Name</th>
                <th>Customer Vehicle Number</th>
                <th>Customer Email</th>
                <th>Vehicle Service Type</th>
                <th>Customer Mobile Number</th>
              </tr>
            </thead>
            <tbody>{servicedetails ?.reverse()
                .filter((filteredservices) =>
                    filteredservices.vnumber
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ).map(renderClass)}</tbody>
          </table>
          {/* </div> */}
        </div>
    )
}