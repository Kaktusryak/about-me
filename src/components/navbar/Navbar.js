import { Link } from "react-router-dom";
import './style.css'

export default function Navbar(){
    return(
       <div className="navbar">
        {/* <p>Navbar</p> */}
        <Link to="/programming">Programming</Link>
        <Link to="/modelling">Modelling</Link>
        <Link to="/contacts">Contacts/About</Link>
       </div>
    )
}