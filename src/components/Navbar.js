import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { AiOutlineCar } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

// styles & images
import './Navbar.css'
// import Car from '../assets/logo.svg'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  // const { logout, isPending } = useLogout();
  // const { user } = useAuthContext();
  


  return (
    <div className='navbar'>
        <span className='nav-logo'>Easy Park</span>

        <div className={`nav-items ${isOpen && 'open'}`}>
          <a href='/how'>How it works</a>
          <a href='/rent'>Rent out your space</a>
          <a href='/business'>Business</a>
          <a href='/ev'>EV</a>
          <a href='/company'>Company</a>
          <a href='/help'>Help</a>        
          <a href="/login">Login</a>
          <a href='/signup'><button className='btn-primary'>Signup</button></a>
  
          
      {/* {user && (
          
            {!isPending && <button className="btn-primary" onClick={logout}>Logout</button>}
            {isPending && <button className="btn-primary" disabled>Logging out...</button>}
          
        )} */}
      </div>
      <div
        className={`nav-toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  )
}
