import React from 'react'
import {useState} from 'react';
import "./Navbar.css";
import { is } from '@babel/types';

export default function Navbar() {

    const [meram_class, setMeramClass]=useState("meram-bar unclicked");
    const [menu_class, setMenüClass]=useState("menu hidden");
    const [IsMenu, setIsMenuClicked]=useState(false);

    const updateMenu= ()=>{
        if(!İsMenuClicked){
            setMeramClass("meram-bar clicked")
            setMenuClass("menu visible")
        }else{
            setMeramClass("meram-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }


  return (
<div style={{width:"100%",heigt:"100vh"}}> 
    <nav>
     <div className='meram-menu' onClick={updateMenu}>
        <div className= {meram_class}></div>
        <div className= {meram_class}></div>
        <div className= {meram_class}></div>

     </div>
    </nav>
    <div className={menu_class}>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
    </div>
 </div>
  )
}
