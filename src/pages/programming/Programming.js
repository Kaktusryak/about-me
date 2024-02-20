import { useEffect } from "react"
import Navbar from "../../components/navbar/Navbar"
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Item from "../../components/item/Item"
import { FaGithub } from "react-icons/fa";



const languagesAndFrameworks = [
    {
        name:'JavaScript',
        level:'Medium',
        color:'#d5bb54'
    },
    {
        name:'HTML',
        level:'Pro )',
        color:'#318f87'
    },
    {
        name:'CSS',
        level:'Medium',
        color:'#b1ca85'
    },
    {
        name:'SCSS',
        level:'Medium',
        color:'#ca8586'
    },
    {
        name:'React',
        level:'Medium',
        color:'#2B70C9'
    },
    {
        name:'NextJS',
        level:'Medium',
        color:'white'
    },
    {
        name:'Vue',
        level:'Medium',
        color:'#39CC82'
    },
    {
        name:'SQL',
        level:'Basic',
        color:'#C08BC4'
    },
    {
        name:'Python',
        level:'Basic',
        color:'#dc9b56'
    },
    {
        name:'C#',
        level:'Basic',
        color:'#9575CD'
    },
    {
        name:'C++',
        level:'Basic',
        color:'#bdbdbd'
    },   
    {
        name:'TypeScript',
        level:'Basic',
        color:'#6d9ad5'
    },
   
    
    
    
    
]
const technologies = [
    {
        name:'Docker',
        level:'Medium',
        color:'#7AA2C7'        
    },
    {
        name:'MS SQL',
        level:'Pro )',
        color:'#7AC7BE'
    },
    {
        name:'Bootstrap',
        level:'Medium',
        color:'#C77A7B'
    },
    {
        name:'Tailwind',
        level:'Medium',
        color:'#929AD1'
    },
    {
        name:'MongoDB',
        level:'Medium',
        color:'#75C87C'
    },
    {
        name:'aiogram',
        level:'Medium',
        color:'#43d8d8'
    },
    {
        name:'WSL',
        level:'Medium',
        color:'#D2A774'
    },
    {
        name:'JQuery',
        level:'Medium',
        color:'#C37374'
    },
    {
        name:'Git',
        level:'Medium',
        color:'#AD67B3'
    },
    

    
    
]

export default function Programming(){

    useEffect(()=>{
        Aos.init()
    },[])


    return(

        <div className="main">
           
           <div className="nav"><Navbar /></div>
           
            <div className="container">
                <section>
                    <h3>Languages and frameworks I know:</h3>
                    <ul data-aos="fade-right">
                        {languagesAndFrameworks.map(item=>{
                            return(<Item name={item.name} level={item.level} color={item.color} key={item.name}/>)
                        })}
                    </ul>
                    <p className="addition">This list is constantly expanding {')'} <br/> The higher the item, the better I know it {'('}from left to right{')'} {')'}</p>
                </section>
                <section>
                    <h3>Technologies I used:</h3>
                    <ul data-aos="fade-left">
                        {technologies.map(item=>{
                            return(<Item name={item.name} level={item.level} color={item.color} key={item.name}/>)
                        })}
                    </ul>
                    <p className="addition">The highness of the item does not depict my experience in it {')'}</p>
                </section> 
                <section className="last">
                    <h3 >My GitHub:</h3>
                    <a data-aos="fade-right" href="https://github.com/Kaktusryak"><FaGithub className="git"/></a>
                    <p className="addition">So you can see I'm not completely worthless</p>                
                </section> 
            </div>
           

           
        </div>
    )
}