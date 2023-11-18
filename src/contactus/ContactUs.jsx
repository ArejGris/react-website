import './connect.css'
import img3 from '../assets/rowan-heuvel-sAB4BWrQ4Y4-unsplash 1.png'
import icon1 from '../assets/icons/phone.svg'
import icon2 from '../assets/icons/email.svg'
import icon3 from '../assets/icons/map-marker.svg'
import icon4 from '../assets/icons/instagram.svg'
const ContactUs = () => {
    return ( 
    <div className="container">
        <div className="row">
            <div className="col-6">
                <div className="main">
                    
                <img src={img3}  alt="" />

                </div>
            </div>
            <div className="col-6">
                <div className="card">
                    <h1>Contact Us</h1>
                    <ul>
                        <li><img src={icon1} className='icon' alt="" /></li>
                        <li><img src={icon2} className='icon' alt="" /></li>
                        <li><img src={icon3} className='icon' alt="" /></li>
                        <li><img src={icon4} className='icon' alt="" /></li>

                    </ul>
                </div>

            </div>
        </div>
    </div>
);
}
 
export default ContactUs;