import React from 'react'
import { Link } from 'react-router-dom'
import { BsTools } from 'react-icons/bs'

// styles
import './FlexColumns.css'
import CarManagement from '../../assets/carManagement.jpg'

function FlexColumns_() {
  return (
    <div className='flex-columns_'>
    <div className="row">
      <div className="column">
      <div className="column-1">
            <img src={CarManagement} alt="woman with car" />
          </div>
        
      </div>
        <div className="column">
        <div className="column-2">
          <BsTools className='icon' size='40px' />
          <h4>EASY SOLUTIONS</h4>
            <h2>Car parking management</h2>
            <p>Maximise yield from underused car parks and vacant land, or transform payments with the UK’s favourite parking app.</p>
            <Link to='/car-parking-management' className='hero-btn'>Learn about our solutions</Link>
        </div>
        </div>
    </div>
  </div>
  )
}

export default FlexColumns_