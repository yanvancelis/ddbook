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
import George from '../img/george.jpg'
import Bora from '../img/bora.png'

export default function Conteudo (props) {
    
    const [posts, setPosts] = useState([
        {
            nome: 'Yan Vancelis',
            user: "@yanvancelis",
            foto: Yan,
            post: "Como elegeram isso presidente?",
            imagem: Cloroquino,
        },
        {
            nome: "Fernanda Gadêlha",
            user: "@fegadelha",
            foto: Nanda,
            post: "Eu quero é viajar!",
            imagem: Viajante,
        },
        {
            nome: "George Moreno",
            user: "@gemoreno",
            foto: George,
            post: "Saudade das grandes produções!",
            imagem: Bora,
        }
    ])

    // Adicionei a contagem de likes no próprio estado do componente do post

    return (                  
        <div class="Content">
            <Header></Header>                                                             
            <Input></Input>            
            {posts.map (                        
                (postagem) => (
                    <Post nome={postagem.nome} user={postagem.user} foto={postagem.foto} post={postagem.post} imagem={postagem.imagem}></Post>
                )                                                                              
            )}                           
        </div>
    )       
}
 
    