import React from 'react'
import Yan from '../img/perfil/Yan.jpg'
import { FiImage, FiSmile} from 'react-icons/fi'

export default function Input () {
    return (
        <div className="Input">
           <div className="InputBox">
               <div className="PerfilImg">
                    <img src={Yan} width="70"></img>
               </div>
               <textarea placeholder="Faça sua reclamação aqui!" rows="20" cols="4"></textarea>                              
           </div>
           <div className="Input-btns">
                <div className="Input-icons">
                    <FiImage size={26}/>
                    <FiSmile size={26}/>
               </div>
               <button>Reclamar</button>
           </div>
           
        </div>
    )
}