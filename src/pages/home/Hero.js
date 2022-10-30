import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiChevronRight} from 'react-icons/bi';
import { BiRightArrowAlt} from 'react-icons/bi';

// styles and video
import './Home.css'
import ParkingLot from '../../assets/parkingLot.mp4'

export default function Hero() {
  const [hover, setHover] = useState(false)

  const handleHover = () => {
    setHover(!hover)
  }

  return (
    <div className='hero'>
      <div className='hero-background'>
       
          <video src={ParkingLot} type='video/mp4' autoPlay loop muted></video>
      </div>
        
        <div className="hero-content">
          <h1>Car Parking Made Easy</h1>
          <p>Choose from millions of available spaces, or reserve your space in advance. Join over 5.5 million drivers enjoying easy parking.</p>
          <Link to='/signup'
           className='hero-btn'
           onMouseEnter={handleHover}
           onMouseLeave={handleHover}
           
           >Get Started {hover ? <BiRightArrowAlt /> : <BiChevronRight/>}</Link>
        </div>
      </div>
    
  )
}
