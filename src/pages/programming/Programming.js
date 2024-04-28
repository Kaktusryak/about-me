import { useEffect } from "react"
import Navbar from "../../components/navbar/Navbar"
import './style.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Item from "../../components/item/Item"
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";



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
    {
        name:'NodeJS',
        level:'Basic',
        color:'#6dfa65'
    },
    {
        name:'Express',
        level:'Basic',
        color:'#7d95d5'
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
                    <IoIosArrowDown className="down" />
                </section>
                <section>
                    <h3>Technologies I used:</h3>
                    <ul data-aos="fade-left">
                        {technologies.map(item=>{
                            return(<Item name={item.name} level={item.level} color={item.color} key={item.name}/>)
                        })}
                    </ul>
                    <p className="addition">The highness of the item does not depict my experience in it {')'}</p>
                    <IoIosArrowDown className="down" />
                </section> 
                <section className="last">
                    <h3 >My GitHub:</h3>
                    <a data-aos="fade-right" href="https://github.com/Kaktusryak"><FaGithub className="git"/></a>
                    <p className="addition">So you can see I'm not completely worthless</p>    
                    <IoIosArrowDown className="down"/>            
                </section> 
                <section className="last">
                    <h3 >My Certificates and courses I attended:</h3>
                    <ul className="certificates" data-aos="fade-top">
                        <li><a target="_blank" data-aos="fade-right" href="https://coursera.org/share/073aea26f95f9ec5a02521705175514d">Advanced React (Coursera)</a></li>
                        <li><a target="_blank" data-aos="fade-right" href="https://coursera.org/share/e89cfa951eb71e264c1914265a8d5f32">TypeScript Tutorial (Coursera)</a></li>
                        <li><a target="_blank" data-aos="fade-right" href="https://coursera.org/share/852210b21bc086631b3ed1e80a7e0768">Introduction to VueJS Framework (Coursera)</a></li>
                        <li><a target="_blank" data-aos="fade-right" href="https://coursera.org/share/97987d053a34a9c575b38be6314e43c8">Foundations of Project Management (Coursera)</a></li>
                        <li><a target="_blank" data-aos="fade-right" href="https://www.udemy.com/share/101WCC3@xcQp0mV2gTNnNr0kwxNyrJ1pSd_H884iiPVHkvKtD0ejHIPXzIg0j0DHYSh8DLb7WQ==/">Javascript + React (Udemy)</a></li>
                        <li><a target="_blank" data-aos="fade-right" href="https://coursera.org/share/a8f731a39c1a609d14d631159f1dd058">AWS Cloud Technical Essentials (Coursera)</a></li>
                        <li><a target="_blank" data-aos="fade-right" href="https://coursera.org/share/8969c0876cf3bf35d1cf4fb17fc10377">Introduction to Microsoft Azure Cloud Services (Coursera)</a></li>
                        <li><a target="_blank" data-aos="fade-right" href="https://coursera.org/share/aadcb0450a0175cb0bec621976a7044c">Frontend development using React (Coursera)</a></li>
                        
                    </ul>
                    <p className="addition">Important and not so much</p>                
                </section> 
            </div>
           

           
        </div>
    )
}