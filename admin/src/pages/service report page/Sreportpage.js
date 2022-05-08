import React,{useRef} from "react";
import { useReactToPrint } from 'react-to-print';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import "./Sreportpage.css"

export default function Sreportpage({search,setSearch}){

    const componentRef = useRef();

    
    const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    });

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
            .get("http://localhost:8070/service/done")
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
          </tr>
        );

      };

    return(
        <div className="home">
            
            <input placeholder="Enter Customer Vehicle Number " className="searchbox" type="search" onChange={(e) => setSearch(e.target.value)}/>
            <div className="downloadpdf">
            <Button color="primary" variant="contained" onClick={handlePrint}>Print Report</Button>
            </div>
            <div ref={componentRef}>
            <h1 className="heading">Service Report</h1>
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
            </div>
        </div>
    )
}