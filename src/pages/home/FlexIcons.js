
// styles and images
import './Home.css'
import CarPark from '../../assets/carPark.svg'
import Recreation from '../../assets/recreation.svg'
import Restaurant from '../../assets/restaurant.svg'
import School from '../../assets/school.svg'
import Hotel from '../../assets/hotel.svg'
import Doctor from '../../assets/doctor.svg'

export default function FlexIcons() {
  return (
    
    <div className="flex-icons">
      <header>
      <h1>WHO WE HELP</h1>
      <p>We are the trusted UK car parking management company for businesses in every sector, including leisure, hospitality, retail parks, restaurants, the NHS, hotels and more.</p>
      </header>
      <div className='row'>
        <div className="column">
          <img src={CarPark} alt="Car Park" />
          <h3>Car Park</h3>
        </div>
        <div className="column">
          <img src={Recreation} alt="Recreation" />
          <h3>Recreation</h3>
        </div>
        <div className="column">
          <img src={Restaurant} alt="Restaurant" />
          <h3>Restaurant</h3>
        </div>
        <div className="column">
          <img src={School} alt="School" />
          <h3>School</h3>
        </div>
        <div className="column">
          <img src={Hotel} alt="Hotel" />
          <h3>Hotel</h3>
        </div>
        <div className="column">
          <img src={Doctor} alt="Doctor" />
          <h3>Doctors & Scientists</h3>
        </div>
      </div>
    </div>

   

  )
}
