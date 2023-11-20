import { Link } from 'react-router-dom';
import './mobileNav.css'
import { useContext} from 'react';
import { myContext } from '../MyProvider';
const MobileNav = () => {
    const {isHome,page}=useContext(myContext)
    console.log("this is the page",page,isHome)
    
    return (
        <div className="myNav">
        <div className="logo"><Link to="/">logo</Link></div>
        <ul className="nav1">
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/">FAQ’S</Link></li>
            <li><Link to="/">Our services</Link></li>
            <li><Link to="/pay">Payment</Link></li>
             <li><Link to="/contact">Contact us</Link></li>
        </ul>

    </div> );
}
 
export default MobileNav;