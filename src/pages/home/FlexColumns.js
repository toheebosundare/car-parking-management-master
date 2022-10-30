import React from 'react'
import { Link } from 'react-router-dom'
import { GiTakeMyMoney} from 'react-icons/gi'



// styles and images
import './FlexColumns.css'
import ParkingSpace from '../../assets/parkingSpace.jpg'



export default function FlexColumns() {
  return (
    
      <div className='flex-columns'>
        <div className="row">
          <div className="column">
            <div className="column-1">
              <GiTakeMyMoney className='icon' size='50px' />
              <h4>EASY MONEY</h4>
                <h2>Rent out your car space and EV</h2>
                <p>Make easy tax free money by renting out your parking or EV charging space. It is free to list and only takes a few minutes to get up and running.</p>
              <Link to='/rent-out-your-space' className='hero-btn'>Learn how to earn today</Link>
            </div>
          </div>
            <div className="column">
              <div className="column-2">
                <img src={ParkingSpace} alt="parking space" />
              </div>
            </div>
        </div>
      </div>

      
    

  )
}
