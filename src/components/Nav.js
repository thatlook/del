import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Menu from './Menu';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <img id="logo" src="../로고.png" alt="logo"></img>
            <h1>COZ Shopping</h1>
            <MenuRoundedIcon id="menu-icon" onClick={() => {
                setIsOpen(!isOpen)
            }}>
            </MenuRoundedIcon>
            {isOpen ? <Menu /> : null}
        </nav>
    )
}

export default Nav;