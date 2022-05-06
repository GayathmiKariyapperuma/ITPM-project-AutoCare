import React from "react";
import "./Edit or delete page.css"
import {useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function Editordeletepage(){
    
    const {id}=useParams()

    return(
        <div className="home">
            <div className="container123">
            <div class="card123">
                <img className="icon" src={require(`./edit.svg`).default}/>
                    <h1 className="h3size">Edit Service</h1>
                    <div className="content123">
                    <Link className='link' to={`/workprogress/editservice/${id}`}>
                        <a className="a123">Edit</a>
                    </Link>
                </div>
            </div>
            </div>
            <div className="left">
            <div className="container123">
            <div class="card123">
                <img className="icon123" src={require(`./delete.svg`).default}/>
                    <h1 className="h3size">Delete Service</h1>
                    <div className="content123">
                    <Link className='link' to={`/workprogress/deleteservice/${id}`}>
                        <a className="a">Delete</a>
                        </Link>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}
