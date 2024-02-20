import Navbar from "../../components/navbar/Navbar"
import './style.css'

export default function NoPage(){
    return(

        <div>
            <div className="nav"><Navbar /></div>
            <h1>Nothing here, this page does not exist</h1>
        </div>
    )
}