import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav class="navbar navbar-dark">
      <div>
        <ul>
          <li class="nav-item"><a class="nav-link" href="">Presupuesto 1</a></li>
          <li class="nav-item"><a class="nav-link" href="">Presupuesto 2</a></li>
          <li class="nav-item"><a class="nav-link" href="">Presupuesto 3</a></li>
        </ul>
      </div>
      <h1>W4 Music</h1>
        <CartWidget/>
    </nav>
  )
}

export default NavBar
