import React from 'react'
import '../global.css'
import Logo from '../img/ddbook.svg'
import Menu from './Menu'
import { StickyContainer, Sticky } from 'react-sticky';


export default function Sidebar () {
    return (
        <StickyContainer>
            <div className="SideLeft">
                <div className="Logo">
                    <img src={Logo}></img>
                </div>
            <Menu></Menu>            
        </div>
        </StickyContainer>
        
    );
}