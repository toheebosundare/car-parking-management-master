import React from 'react'
import { Link } from 'react-router-dom'

// styles
import './Footer.css'
  
  export default function Footer() {
    return (
      <div className='footer'>
        <div className="row">
          <div className="column">
            <div className="column-1">
              <h4>Information</h4>
              <Link to='/'>About us</Link>
              <Link to='/'>Affiliate</Link>
              <Link to='/'>Blog</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Media coverage</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Site map</Link>
            </div>
          </div>
          <div className="column">
            <div className="column-1">
              <h4>Services</h4>
              <Link to='/'>Business accounts</Link>
              <Link to='/'>Car park management</Link>
              <Link to='/'>Electric vehicle charging</Link>
              <Link to='/'>Rent out your space</Link>
              <Link to='/'>Rent out your EV charger</Link>
              <Link to='/'></Link>
            </div>
          </div>
          <div className="column">
            <div className="column-1">
              <h4>Point of interest</h4>
              <Link to='/'>Airport parking</Link>
              <Link to='/'>City parking</Link>
              <Link to='/'>Stadium parking</Link>
              <Link to='/'>Station parking</Link>
            </div>
          </div>
          <div className="column">
            <div className="column-1">
              <h4>Get in touch</h4>
              <Link to='/'>How Easy park works</Link>
              <Link to='/'>Help center</Link>
            </div>
          </div>

        </div>
         
      </div>
    )
  }
  