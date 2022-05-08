import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import "./Viewsupplier.css"


export default function Vieworder({search,setSearch}){

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
            .get("http://localhost:8070/order/")
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
            <td>
            <Link className='link' to={`/editorder/Editorder`}>
                <Button size="small" color="primary" variant="outlined" >Edit</Button>
                </Link>
            </td>
          </tr>
        );
      };

    return(
        <div className="home">
            <h1 className="heading">Suppliers</h1>
            <input placeholder="Enter Order Number " className="searchbox" type="search" onChange={(e) => setSearch(e.target.value)}/>
            <table className="table-report">
            <thead>
              <tr className="trn">
                <th>Order Number</th>
                <th>Supplier Number</th>
                <th>Item Codes</th>
                <th>Order Date</th>
              </tr>
            </thead>
            <tbody>{orderdetails ?.reverse()
                .filter((filtereddetails) =>
                    filtereddetails.vnumber
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ).map(renderClass)}</tbody>
          </table>
        </div>
    )
}