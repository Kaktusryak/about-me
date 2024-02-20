import Item from "../../components/item/Item"
import Navbar from "../../components/navbar/Navbar"
import Aos from 'aos'
import { useEffect } from "react"
import 'aos/dist/aos.css'
import './style.css'
import { IoIosArrowDown } from "react-icons/io";

export default function Modelling() {
    useEffect(()=>{
        Aos.init()
    },[])
    return (

        <div>
            <div className="nav"><Navbar /></div>
            <section>
                <h3>This is my hobby and I like it. Some of that I created:</h3>
                <div className="gallery" data-aos="fade-right">
                    <img src="https://cdna.artstation.com/p/assets/images/images/068/344/292/large/kaktusryak-luaz-1.jpg?1697575616" alt="LuAZ"/>
                    <img src="https://cdnb.artstation.com/p/assets/images/images/072/136/481/large/kaktusryak-ml300-1.jpg?1706704677" alt="L300"/>
                    <img src="https://cdna.artstation.com/p/assets/images/images/069/476/464/large/kaktusryak-thompson-12.jpg?1700225677" alt="Thompson"/>
                    <img src="https://cdna.artstation.com/p/assets/images/images/062/643/856/large/kaktusryak-droid-21.jpg?1683632602" alt="Droid"/>
                </div>
                <p className="softTitle">Software I used to create it:</p>
                <ul className="software">
                    <Item name={"Blender 3D"} color={"#C6A55E"}/>
                    <Item name={"Substance 3D Painter"} color={"#81C65E"}/>
                </ul>
                <a className="artstation" href="https://www.artstation.com/kaktusryak" target="_blank">My Artstation with a lot more artworks</a>
            </section>
        </div>
    )
}
