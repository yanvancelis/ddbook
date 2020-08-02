import React from 'react';
import Conteudo from './Conteudo/Conteudo'
import Sidebar from './SidePrincipal/Sidebar'
import SideRight from './SideRight/SideRight'

import './App.css'

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Conteudo></Conteudo>
      <SideRight></SideRight>
    </div>
  );
}

export default App;
