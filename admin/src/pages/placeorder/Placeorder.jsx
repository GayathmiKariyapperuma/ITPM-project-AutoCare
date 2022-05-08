import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import "./Placeorder.css"

export default function Placeorder({search,setSearch}){

    const [orderdetails, setorderdetails] = useState([
        {
          orderNo: "",
          supplierNo: "",
          itemCodes: "",
          orderDate: "",
        },
      ]);
    
      useEffect(() => {
        function getdetails() {
          axios
            .get("http://localhost:8070/order")
            .then((res) => {
            //   console.log(res);
              setorderdetails(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        }
    
        getdetails();
      },[]);

      const renderClass = (orderdetails, index) => {
        return (
          <tr key={index}>
            <td className="table-clo1">{orderdetails.orderNo}</td>
            <td className="table-clo3">{orderdetails.supplierNo}</td>
            <td className="table-clo4">{orderdetails.itemCodes}</td>
            <td className="table-clo5">{orderdetails.orderDate}</td>
          </tr>
        );

      };

    return(
        <div className="home">
            <h1 className="heading">Place Order</h1>
            <input placeholder="Enter Item Code " className="searchbox" type="search" onChange={(e) => setSearch(e.target.value)}/>
            <table className="table-report">
            <thead>
              <tr>
                <th>Order No</th>
                <th>Supplier</th>
                <th>Item Codes</th>
                <th>Order Date</th>
              </tr>
            </thead>
            <tbody>{orderdetails ?.reverse()
                .filter((filteredservices) =>
                    filteredservices.vnumber
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ).map(renderClass)}</tbody>
          </table>
        </div>
    )
}