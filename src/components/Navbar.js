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
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();
  const [mobile, setMobile] = useState(false)


  return (
    <nav className='navbar'>
      <ul>
        <li className='logo'><Link to='/'>
          <AiOutlineCar alt='car-img' style={{marginRight: "10px"}}/>
          <span>Easy Park</span>
        </Link></li>

        
          <li className={mobile ? 'nav-links-mobile' : 'nav-links'} onClick = {() => setMobile(false)}><Link to='/how'>How it works</Link></li>
          <li className={mobile ? 'nav-links-mobile' : 'nav-links'} onClick = {() => setMobile(false)}><Link to='/rent'>Rent out your space</Link></li>
          <li className={mobile ? 'nav-links-mobile' : 'nav-links'} onClick = {() => setMobile(false)}><Link to='/business'>Business</Link></li>
          <li className={mobile ? 'nav-links-mobile' : 'nav-links'} onClick = {() => setMobile(false)}><Link to='/ev'>EV</Link></li>
          <li className={mobile ? 'nav-links-mobile' : 'nav-links'} onClick = {() => setMobile(false)}><Link to='/company'>Company</Link></li>
          <li className={mobile ? 'nav-links-mobile' : 'nav-links'} onClick = {() => setMobile(false)}><Link to='/help'>Help</Link></li>        
          <li className={mobile ? 'nav-links-mobile' : 'nav-links'} onClick = {() => setMobile(false)}><Link to="/login">Login</Link></li>
          <li className={mobile ? 'nav-links-mobile' : 'nav-links'} onClick = {() => setMobile(false)}><Link to='/signup'><button className='btn-primary'>Signup</button></Link></li>
         
       
          
        {user && (
          <li className={mobile ? 'nav-links-mobile' : 'nav-links'} onClick = {() => setMobile(false)}>
            {!isPending && <button className="btn-primary" onClick={logout}>Logout</button>}
            {isPending && <button className="btn-primary" disabled>Logging out...</button>}
          </li>
        )}
      </ul>
      

      <button className='mobile-icon' onClick={() => setMobile(!mobile)}>
          {mobile ? <ImCross/> : <FaBars /> }
        </button>
       
    </nav>
  )
}
