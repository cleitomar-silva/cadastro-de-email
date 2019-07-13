import './Logo.css'
import React from 'react'
/* import logo from '../../assets/img/origin-logo.png' */
import { Link } from 'react-router-dom'

export default props=>
    <aside className='logo'>
        <Link to="/" className="logo">
            {/* <img src={logo} alt="logo"/> */}
            <h1>SW</h1>
        </Link>
    </aside>