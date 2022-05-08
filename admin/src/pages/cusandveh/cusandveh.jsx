import React from "react";
import "./cusandveh.css"
import { Link } from 'react-router-dom';

export default function Cusandveh(){

    return(
        <div className="home">
            <div className="container1">
            <div class="card123">
                <img className="icon" src={require(`./supplier.jpg`).default}/>
                    <h1 className="h3size">Customer Management</h1>
                    <div className="content123">
                    <Link className='link' to={`/viewcustomer`}>
                        <a className="a">Click here</a>
                    </Link>
                    </div>
            </div>
            </div>
            <br/>
            <div className="left">
            <div className="container1">
            <div class="card123">
                <img className="icon123" src={require(`./veh1.JPG`).default}/>
                    <h1 className="h3size">Vehicle Management</h1>
                    <div className="content123">
                    <Link className='link' to={`/viewvehicle`}>
                        <a className="a">Click here</a>
                    </Link>
                    </div>
            </div>
            </div>
            </div>
        </div>
    )
}