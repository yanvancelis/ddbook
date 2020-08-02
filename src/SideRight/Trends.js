import React from 'react'
import '../global.css'

export default function Trends() {
    
    return(
        <div className="Trends">
            <h5>De que estão reclamando?</h5>
            <div className="trend-item">
                <p>Tipografia</p>
                <h4>Resenha de livro</h4>                                
            </div>
            <div className="trend-item">
                <p>Pandemia</p>
                <h4>Cândido Albuquerque</h4>                                
            </div>
            <div className="trend-item">
                <p>PIW</p>
                <h4>Atividade de Piw</h4>                                
            </div>
            <div className="trend-item">
                <p>Resenhas</p>
                <h4>Resenhas</h4>                                
            </div>
            <div className="trend-item">
                <p>Política</p>
                <h4>Fora Bolsonaro</h4>                                
            </div>

        </div>
    )
}