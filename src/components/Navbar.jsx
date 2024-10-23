import React from 'react'
import './Navbar.css';
import './Form'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav class="navbar">
            <ul class="nav-list">
                <li class="nav-item"><a href="Home"><Link to='/'>Home</Link></a></li>
                <li class="nav-item"><a href="AboutUs"><Link to='about'>About Us</Link></a></li>
                <li class="nav-item"><a href="Contact"><Link to='contact'>Contact Us</Link></a></li>
                <li class="nav-item"><a href="Login"><Link to='login'>Login</Link></a></li>
                <li class="nav-item"><a href="Counter"><Link to='counter'>Counter</Link></a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar