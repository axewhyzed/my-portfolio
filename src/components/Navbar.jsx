import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import logo from '../assets/logo.svg'
import logo1 from '../logo1.svg'


const Navbar = () => {
    return (
        <>
            <BrowserRouter>
                <nav className='navbar'>
                        <img src={logo} width="90px" alt='logo'/>
                    <ul className='navbar-items'>
                        <li>
                            <NavLink to='/' className="nav-links">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects' className="nav-links">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className="nav-links">About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className="nav-links">Contact</NavLink>
                        </li>
                    </ul>
                    <div>
                        <img src={logo1} width="60px" />
                        <img src={logo1} width="60px" />
                        <img src={logo1} width="60px" />
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Navbar