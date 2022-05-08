import React from "react";
import "./SDetails.css"
import { Link } from 'react-router-dom';

export default function SDetails(){

    return(
        <div className="home">
            <div className="container1">
            <div class="card123">
                <img className="icon" src={require(`./supplier.jpg`).default}/>
                    <h1 className="h3size">Supplier Management</h1>
                    <div className="content123">
                    <Link className='link' to={`/editsupplier/Editsupplier`}>
                        <a className="a123">View and Update Supplier Details</a>
                    </Link>
                    </div>
                    <div className="content123">
                    <Link className='link' to={`/editsupplier/Editsupplier`}>
                        <a className="a123">Delete Supplier Details</a>
                    </Link>
                    </div>
                    <div className="content123">
                    <Link className='link' to={`/editorder/Editorder`}>
                        <a className="a">View and Update Orders</a>
                    </Link>
                    </div>
                    <div className="content123">
                    <Link className='link' to={`/editorder/Editorder`}>
                        <a className="a">Delete Orders</a>
                    </Link>
                    </div>
            </div>
            </div>
            <br/>
            <div className="left">
            <div className="container1">
            <div class="card123">
                <img className="icon123" src={require(`./inventory.png`).default}/>
                    <h1 className="h3size">Inventory Management</h1>
                    <div className="content123">
                    <Link className='link' to={`/editstock/Editstock`}>
                        <a className="a">View and Update Stock</a>
                    </Link>
                    </div>
                    <div className="content123">
                    <Link className='link' to={`/editstock/Editstock`}>
                        <a className="a">Delete Stock</a>
                    </Link>
                    </div>
            </div>
            </div>
            </div>
        </div>
    )
}