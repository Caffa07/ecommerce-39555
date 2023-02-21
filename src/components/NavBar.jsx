import React from 'react'
import { Link } from "react-router-dom";
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
  <>
  <div>
    <nav class="navbar navbar-dark">
       <Link to={"/"}>W4 Store</Link>
       
        <Link to={"/catalogue"}>catalogue</Link>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="#">Productos</a>
          <ul>
            <li><Link to="/category/HI"/>HI</li>
            <li><Link to="/category/MID"/>MID</li>
            <li><Link to="/category/SUB"/>SUB</li>
          </ul>
        </li>

        

        
              
              

    </nav>
    <CartWidget/>
  </div>  
  </>
  )
}

export default NavBar
