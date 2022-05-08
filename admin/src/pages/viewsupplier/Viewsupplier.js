import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import "./Viewsupplier.css"


export default function Viewsupplier({search,setSearch}){

    const [supplierdetails, setsupplierdetails] = useState([
        {
          supplierNo: "",
          compName: "",
          compAddress: "",
          compEmail: "",
          compPhone: "",
          agentName: "",
          agentEmail: "",
          agentPhone: "",
          agreementDate: "",
          validTime: "",
        },
      ]);
    
      useEffect(() => {
        function getdetails() {
          axios
            .get("http://localhost:8070/supplier/get/${supplierNo}")
            .then((res) => {
            //   console.log(res);
              setsupplierdetails(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        }
    
        getdetails();
      },[]);

      const renderClass = (supplierdetails, index) => {
        return (
          <tr key={index}>
            <td className="table-clo1">{supplierdetails.supplierNo}</td>
            <td className="table-clo3">{supplierdetails.compName}</td>
            <td className="table-clo4">{supplierdetails.compAddress}</td>
            <td className="table-clo5">{supplierdetails.compEmail}</td>
            <td className="table-clo6">{supplierdetails.compPhone}</td>
            <td className="table-clo6">{supplierdetails.agentName}</td>
            <td className="table-clo6">{supplierdetails.agentEmail}</td>
            <td className="table-clo6">{supplierdetails.agentPhone}</td>
            <td className="table-clo6">{supplierdetails.agreementDate}</td>
            <td className="table-clo6">{supplierdetails.validTime}</td>
            <td>
              
            </td>
          </tr>
        );
      };

    return(
        <div className="home">
            <h1 className="heading">Suppliers</h1>
            <input placeholder="Enter Supplier Number " className="searchbox" type="search" onChange={(e) => setSearch(e.target.value)}/>
            <table className="table-report">
            <thead>
              <tr className="trn">
                <th>Supplier Number</th>
                <th>Company Name</th>
                <th>Company Adrress</th>
                <th>Company Email</th>
                <th>Company Phone Number</th>
                <th>Agent Name</th>
                <th>Agent Email</th>
                <th>Agent Phone Number</th>
                <th>Agreement Date</th>
                <th>Valid Time</th>
              </tr>
            </thead>
            <tbody>{supplierdetails ?.reverse()
                .filter((filtereddetails) =>
                    filtereddetails.vnumber
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ).map(renderClass)}</tbody>
          </table>
        </div>
    )
}