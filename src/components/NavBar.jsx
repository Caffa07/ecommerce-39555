import React from 'react'
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';
import {
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
<>
  <Container>
    <Heading>
      <Link to={"/"}>
      W4 Store
      </Link>
    </Heading>
    <Menu>
      <Link to={"/catalogue"}>
        <MenuButton
          as={Button}>
            Catalogue
        </MenuButton>  
      </Link>   
    </Menu>
    <Menu>
    <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon/>}>
            Category
        </MenuButton>
        <MenuList>
          <Link to={`/category/${"HI"}`}>
            <MenuItem>HI</MenuItem>
          </Link>
          <Link to={`/category/${"MID"}`}>
            <MenuItem>MID</MenuItem>
          </Link>
          <Link to={`/category/${"SUB"}`}>
            <MenuItem>SUB</MenuItem>
          </Link>
        </MenuList>  
    </Menu>
    <CartWidget/>
  </Container>
</>
  )
}

export default NavBar
