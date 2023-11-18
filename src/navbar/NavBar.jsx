import { Link } from "react-router-dom";
import './navbar.css'
const NavBar = () => {
    return ( 
    <div className="navbar1">
        <div className="logo"><Link to="/">logo here</Link></div>
        <div className="nav1">
            <Link to="/">About us</Link>
            <Link to="/">FAQ’S</Link>
            <Link to="/">Our services</Link>
            <Link to="/">Payment</Link>
             <Link to="/">Contact us</Link>
             <Link to="/sign">Sign up</Link>
        </div>

    </div> );
}
 
export default NavBar;