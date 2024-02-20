import Navbar from "../../components/navbar/Navbar"
import './style.css'

export default function NoPage(){
    return(

        <div>
            <div className="nav"><Navbar /></div>
            <div className="container">
                <section>
                    <h1>Click on the buttons above</h1>
                </section>
                
            </div>
        </div>
    )
}