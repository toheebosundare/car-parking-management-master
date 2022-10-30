import React from 'react'

// styles & images
import './Home.css'
import Meditation from '../../assets/meditation.svg'
import Location from '../../assets/location.svg'
import File from '../../assets/file.svg'

export default function FlexItems() {
  return (
      
        <div className="flex-items">
            <div>
              <img src={Location} alt="location" />
              <div>
                <h3>Anywhere, Anytime</h3>
                <p>Choose from millions of spaces across the UK. Find your best option for every car journey</p>
              </div>
          </div>
            <div>
              <img src={Meditation} alt="meditation" />
              <div>
                <h3>Peace of Mind</h3>
                <p>View information on availability, price and restrictions. Reserve in advance at over 45,000+ locations</p>
              </div>
          </div>
            <div>
              <img src={File} alt="file" />
              <div>
                <h3>Seamless experience</h3>
                <p>Pay for EasyPark spaces via the app or website. Follow easy directions and access instructions</p>
              </div>
          </div>
        </div>
      
  )
}
