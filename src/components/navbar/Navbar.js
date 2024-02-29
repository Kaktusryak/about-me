import { Link } from "react-router-dom";
import './style.css'

export default function Navbar(){
    return(
       <div className="navbar">
        {/* <p>Navbar</p> */}
        <Link to="/about-me/programming">Programming</Link>
        <Link to="/about-me/modelling">Modelling</Link>
        <Link to="/about-me/contacts">Contacts/About</Link>
       </div>
    )
}