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
                    <Link className='link' to={`/viewsupplier`}>
                        <a className="a123">View Supplier Details</a>
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
                    <Link className='link' to={`/viewstock`}>
                        <a className="a">View Stock</a>
                    </Link>
                    </div>
            </div>
            </div>
            </div>
        </div>
    )
}