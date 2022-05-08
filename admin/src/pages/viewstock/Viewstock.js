import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import "./Viewstock.css"


export default function Viewstock({search,setSearch}){

    const [stockdetails, setstockdetails] = useState([
        {
          itemNo: "",
          stockNo: "",
          category: "",
          itemName: "",
          brand: "",
          quantity: "",
          agentName: "",
          unitPrice: "",
          date: "",
        },
      ]);
    
      useEffect(() => {
        function getdetails() {
          axios
            .get("http://localhost:8070/stock/")
            .then((res) => {
            //   console.log(res);
              setstockdetails(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        }
    
        getdetails();
      },[]);

      const renderClass = (stockdetails, index) => {
        return (
          <tr key={index}>
            <td className="table-clo1">{stockdetails.itemNo}</td>
            <td className="table-clo3">{stockdetails.stockNo}</td>
            <td className="table-clo4">{stockdetails.category}</td>
            <td className="table-clo5">{stockdetails.itemName}</td>
            <td className="table-clo6">{stockdetails.brand}</td>
            <td className="table-clo6">{stockdetails.quantity}</td>
            <td className="table-clo6">{stockdetails.agentName}</td>
            <td className="table-clo6">{stockdetails.unitPrice}</td>
            <td className="table-clo6">{stockdetails.date}</td>
            <td>
            <Link className='link' to={`/editstock/Editstock`}>
                <Button size="small" color="primary" variant="outlined" >Edit</Button>
                </Link>
            </td>
          </tr>
        );
      };

    return(
        <div className="home">
            <h1 className="heading">Suppliers</h1>
            <input placeholder="Enter Stock Number " className="searchbox" type="search" onChange={(e) => setSearch(e.target.value)}/>
            <table className="table-report">
            <thead>
              <tr className="trn">
                <th>Item Number</th>
                <th>Stock Number</th>
                <th>Category</th>
                <th>Item Name</th>
                <th>Brand</th>
                <th>Quantity</th>
                <th>Agent Name</th>
                <th>Unit Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>{stockdetails ?.reverse()
                .filter((filtereddetails) =>
                    filtereddetails.vnumber
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ).map(renderClass)}</tbody>
          </table>
        </div>
    )
}