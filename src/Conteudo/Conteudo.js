import React, { useState } from 'react'
import './styles.css'
import Input from './Input'
import Post from './Post'
import Header from '../Header'
import SideRight from '../SideRight/SideRight'
import { StickyContainer, Sticky } from 'react-sticky';
import Nanda from '../img/nanda.png'
import Yan from '../img/perfil/Yan.jpg'
import Viajante from '../img/fernanda.png'
import Cloroquino from '../img/cloroquino.jpg'


export default function Conteudo () {
    
        return (                  
            <div class="Content">
                <Header></Header>                                                             
                <Input></Input>        
                
                <Post foto={Yan} nome="Yan Vancelis" user="@yanvancelis" post="Como elegeram esse cara presidente?" imagem={Cloroquino}></Post>
                <Post foto={Nanda} nome="Fernanda" user="@fernanda" post="Reclamar que nada, quero é viajar!" imagem={Viajante}></Post>            
            </div>
        )
}
 
    