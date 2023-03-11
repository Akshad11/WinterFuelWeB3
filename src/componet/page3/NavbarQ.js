import React from 'react'
import { BiWallet } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import './nav1.css'

function Navbar() {
    return (
        <div>
            <div className='navbar1'>
                <NavLink to="/MyQuest" className="logo">
                    <h1> WINTERFUEL</h1>
                </NavLink>
                <NavLink>
                    <button><BiWallet /> Connect</button>
                </NavLink>
            </div>

        </div>
    )
}

export default Navbar