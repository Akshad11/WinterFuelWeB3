import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
import { BsDiscord, BsTwitter } from "react-icons/bs";


class Nav extends Component {

    state = { clicked: false };
    handleclick = () => {
        this.setState({
            clicked:
                !this.state.clicked
        })
    }
    render() {

        return (
            <div className='startdivNav'>
                <ul id='list' className={this.state.clicked ?
                    "#list active" : "#list"}>
                    <li>
                        <NavLink to="/about" className="navbar">
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/MyQuest" className="navbar">
                            Set Up Quest
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/explore" className="navbar">
                            Explore Quest
                        </NavLink>
                    </li>
                    <li className='non'>
                        <NavLink to="https://discord.com/login" className="navbaricon">
                            <BsDiscord />
                        </NavLink>
                    </li>
                    <li className='non'>
                        <NavLink to="https://twitter.com/i/flow/login" className="navbaricon">
                            <BsTwitter />

                        </NavLink> </li>
                    <li>
                        <NavLink to="/login" className="navbarBtn">
                            <button>Start Questing</button>
                        </NavLink>
                    </li>


                </ul>
                <div className="icon" onClick={this.handleclick} >
                    <i id="bar" className={this.state.clicked ?
                        "fas fa-times" : "fas fa-bars"
                    }>

                    </i>

                </div>



            </div>
        )
    }
}

export default Nav