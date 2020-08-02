import React from 'react'
import './styles.css'

export default function Perfil(props) {
    return (
        <div className="Perfil">
             <div className="PerfilImg">
                    <img src={props.img} width="70"></img>
            </div>                
        </div>
    )
}