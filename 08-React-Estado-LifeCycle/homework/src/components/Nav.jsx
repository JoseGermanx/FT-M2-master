import React from 'react'
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx'
import estilos from'./Nav.module.css'

function Nav({onSearch}) {
  return (
      <nav className={"navbar navbar-light bg-light"}>
        <div className={"container"}>        
        <a className={"navbar-brand"} href="/">
        <img src={Logo} alt="Saraza" className={estilos.Logo} />  
        </a>      
        {/* <h1 className={"blockquote"}>Henry-weather App</h1>         */}
        <SearchBar onSearch={onSearch}/>        
        </div>
     </nav>   
  )
}

export default Nav;