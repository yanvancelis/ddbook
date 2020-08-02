import React from 'react'
import '../global.css'
import { FiSearch} from 'react-icons/fi'
import { StickyContainer, Sticky } from 'react-sticky';

export default function SideRight () {
    return (
        <div className="SideRight">
            <div className="Busca">
                <FiSearch size="22"/>
                <input type="search" placeholder="pesquisa"></input>
            </div>
        </div>

    )
}