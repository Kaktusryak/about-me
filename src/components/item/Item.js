import { HiChevronRight } from "react-icons/hi2";
import './style.css'

export default function Item({name, level, color}){

    const mystyle = {
        color: color,
        borderColor: color,
       
      };


    return(
       <li style={mystyle}><div className="cube"></div><p>{name}</p> <div className="cube1"></div></li>
      //  <li style={mystyle}><div className="cube"></div><p>{name}</p> <HiChevronRight /> <p>{level}</p><div className="cube1"></div></li>
    )
}