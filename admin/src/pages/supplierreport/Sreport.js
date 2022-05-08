import React,{useState, useEffect} from "react";
import axios from "axios";
import jspdf from 'jspdf'
import "jspdf-autotable"
import Button from '@material-ui/core/Button';
import './Sreport.css'

export default function Sreport() {

    const [suppliers, setSuppliers] = useState([]); 


    useEffect(() => {
        //fetching all order data from the database
        axios.get("http://localhost:8070/supplier/").then((res) => {
            if (res.data.length > 0) {
                setSuppliers(res.data);
            }
        }).catch((err) => {
            console.log(err.message);
        })

    }, [])


    //generate pdf code

    const generatePDF = tickets => {

        const doc = new jspdf();
        const tableColumn = ["Supplier No.", "Company Name", "Company Address","Company Email","Company Phone","Agent Name","Agent Email","Agent Phone"];
        const tableRows = [];
    
        tickets.map(ticket => {
            const ticketData = [
                ticket.supplierNo,
                ticket.compName,
                ticket.compAddress,
                ticket.compEmail,
                ticket.compPhone,
                ticket.agentName,
                ticket.agentEmail,
                ticket.agentPhone
               
            ];
            tableRows.push(ticketData);
        })
        doc.text("Suppliers Report", 14, 15).setFontSize(12);
        // right down width height
        doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
        doc.save(`Suppliers__report_.pdf`);
      };


    return (
    <div className="home">
    <div className="downloadpdf"><br/>
    <Button color="primary" variant="contained" onClick={() => generatePDF(suppliers)}>Print Report</Button>
    </div>
    <h1 className="heading">Supplier Report</h1>
    <table className="table-report">
    <thead>
    <tr>
                            <th>Supplier No.</th>
                            <th>Company Name</th>
                            <th>Company Address</th>
                            <th>Company Email</th>
                            <th>Company Phone</th>
                            <th>Agent Name</th>
                            <th>Agent Email</th>
                            <th>Agent Phone</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            suppliers.map(function (f) {
                                return <tr>
                                    

                                    <td >{f.supplierNo}</td>
                                    <td >{f.compName} </td>
                                    <td >{f.compAddress} </td>
                                    <td >{f.compEmail} </td>
                                    <td >{f.compPhone} </td>
                                    <td >{f.agentName} </td>
                                    <td >{f.agentEmail} </td>
                                    <td >{f.agentPhone} </td>

                                </tr>

                            })
                        }
                    </tbody>
  </table>
    
</div>

    )    
}        