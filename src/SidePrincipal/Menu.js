import React from 'react'
import '../global.css'
import { FiHash, FiBell, FiUser} from 'react-icons/fi'

export default function Menu () {
    return (
        <div className="Menu">
                <div className="menu-item">
                    <FiHash size={22} />
                    <span>Explorar</span>
                </div>

                <div className="menu-item">
                    <FiBell size={22} />
                    <span>Notificações</span>
                </div>

                <div className="menu-item">
                    <FiUser size={22} />
                    <span>Meu perfil</span>

                </div>
            </div>
    )
}