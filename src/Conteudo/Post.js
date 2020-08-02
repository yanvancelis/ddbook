import React, {useState} from 'react'
import Perfil from './Perfil'
import { FiHeart, FiMessageCircle, FiSave} from 'react-icons/fi'
import './styles.css'

export default function (props) {
    const [like, setLike] = useState(0);
    
    function adcLike () {
        setLike(like + 1)
    }

    return (
        <div className="Post">
            <Perfil img={props.foto}></Perfil>
            <div className="post-content">
                <div className="user-name">
                    <h5>{props.nome}</h5><span>{props.user}</span>                
                </div>
                <div>
                    <p>{props.post}</p>
                </div>
                <img src={props.imagem}></img>
                <div className="social-icons">
                    <div className="social-item">
                        <FiHeart size={26} onClick={adcLike}/>
                        <span>{like}</span>
                    </div>
                    <div className="social-item">
                        <FiMessageCircle size={26} />
                        <span>0</span>
                    </div>
                    <div className="social-item">
                        <FiSave size={26} />
                        <span>0</span>
                    </div>                
            </div>
            </div>
            
        </div>
    )
}
