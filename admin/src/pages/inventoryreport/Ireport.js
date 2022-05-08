import React,{useState, useEffect} from "react";
import axios from "axios";
import jspdf from 'jspdf'
import "jspdf-autotable"
import Button from '@material-ui/core/Button';
import './Ireport.css'

export default function Ireport() {

    const [stock, setStock] = useState([]); 


    useEffect(() => {
        //fetching all stock data from the database
        axios.get("http://localhost:8070/stock/").then((res) => {
            if (res.data.length > 0) {
                setStock(res.data);
            }
        }).catch((err) => {
            console.log(err.message);
        })

    }, [])


    //generate pdf code

    const generatePDF = tickets => {

        const doc = new jspdf();
        const tableColumn = ["Stock No", "Item No", "Item Name","Category","Brand","Quantity","Agent Name","Unit Price","Date"];
        const tableRows = [];
    
        tickets.map(ticket => {
            const ticketData = [
                ticket.itemNo,
                ticket.stockNo,
                ticket.itemName,
                ticket.category,
                ticket.brand,
                ticket.quantity,
                ticket.agentName,
                ticket.unitPrice,
                ticket.date
            ];
            tableRows.push(ticketData);
        })
        doc.text("Stock Report", 14, 15).setFontSize(12);
        // right down width height
        doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
        doc.save(`Stock.pdf`);
      };


    return (
    <div className="home">
    <div className="downloadpdf"><br/>
    <Button color="primary" variant="contained" className="btn" onClick={() => generatePDF(stock)}>Print Report</Button>
    </div>
    <h1 className="heading">Stock Report</h1>
    <table className="table-report">
    <thead>
    <tr>
                            <th>Stock No</th>
                            <th>Item No</th>
                            <th>Item Name</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Quantity</th>
                            <th>Agent Name</th>
                            <th>Unit Price</th>
                            <th>Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            stock.map(function (f) {
                                return <tr>
                                    

                                    <td >{f.stockNo}</td>
                                    <td >{f.itemNo} </td>
                                    <td >{f.itemName} </td>
                                    <td >{f.category} </td>
                                    <td >{f.brand} </td>
                                    <td >{f.quantity} </td>
                                    <td >{f.agentName} </td>
                                    <td >{f.unitPrice} </td>
                                    <td >{f.date} </td>

                                </tr>

                            })
                        }
                    </tbody>
  </table>
    
</div>

    )    
}        