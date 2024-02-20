import Navbar from "../../components/navbar/Navbar"
import { useEffect } from "react"
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { IoIosArrowDown } from "react-icons/io";

export default function Contacts(){
    useEffect(()=>{
        Aos.init()
    },[])
    return(

        <div>
            <div className="nav"><Navbar /></div>
            
            <section>
                <h3>My contacts:</h3>
                <ul className="contacts" data-aos="fade-right">
                    <li>Mail: denis1243qwerty@gmail.com</li>
                    <li>Telegram: @kaktusryak</li>
                    <li>Phone: +38-096-238-68-23 {"(Calls/Telegram/Viber/WhatsApp"}</li>
                </ul>
                <IoIosArrowDown className="down" />
            </section>
            <section>
                <h3>About me:</h3>
                <div className="info" data-aos="fade-right">
                    <p>My name is Denys Shulman. I live in Kyiv, Ukraine and I'm programmer.<br/> {'(I think so)'}</p>
                    <p>Bachelor's degree of the Kyiv Polytechnic Institute<br/>of the Faculty of Informatics and Computer Engineering<br/>of the study program "Information management systems and technologies"</p>
                    <p>Currently receive a master's degree at the same faculty</p>
                    <p>Attended STEP academy Front-end courses</p>
                    <p>And a lot of courses on YouTube and Coursera <br/> {'(you can find certificates on the programming tab)'}</p>

                </div>
                
                
            </section>
        </div>
    )
}