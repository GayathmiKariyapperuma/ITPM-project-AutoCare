import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import "./viewcustomer.css"


export default function Viewcustomer(){

    const [customerdetails, setcustomerdetails] = useState([
        {
          Firstname: "",
          NIC: "",
          Address: "",
          Email: "",
          Phonenumber: "",
          VehicleNo: "",
        },
      ]);
    
      useEffect(() => {
        function getdetails() {
          axios
            .get("http://localhost:8070/customer/")
            .then((res) => {
            //   console.log(res);
              setcustomerdetails(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        }
    
        getdetails();
      },[]);

      const renderClass = (customerdetails, index) => {
        return (
          <tr key={index}>
            <td className="table-clo1">{customerdetails.Firstname}</td>
            <td className="table-clo3">{customerdetails.NIC}</td>
            <td className="table-clo4">{customerdetails.Address}</td>
            <td className="table-clo5">{customerdetails.Email}</td>
            <td className="table-clo6">{customerdetails.Phonenumber}</td>
            <td className="table-clo6">{customerdetails.VehicleNo}</td>
            
            {/* <td>
              <Buttoninprogress cid={customerdetails._id}/>
            </td> */}
            {/* <td><Link to={`/workprogress/startservice/${servicedetails._id}`}>
                <button  size="small" color="primary" >Start Service</button>
                </Link>
            </td> */}
          </tr>
        );
      };

    return(
        <div className="home">
            <h1 className="heading">Customer Management</h1>
            {/* <div ref={componentRef}> */}
            <table className="table-report">
            <thead>
              <tr className="trn">
                <th>Customer Name</th>
                <th>Customer NIC</th>
                <th>Customer Address</th>
                <th>Vehicle Email</th>
                <th>Customer Phonenumber</th>
                <th>Customer VehicleNo</th>
              </tr>
            </thead>
          </table>
          {/* </div> */}
        </div>
    )
}