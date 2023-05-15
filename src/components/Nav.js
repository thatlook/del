import React from 'react';
// import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Nav() {
    
    return (
        <nav>
            <img id="logo" src="../로고.png" alt="logo"></img>
            <h1>COZ Shopping</h1>
            <MenuRoundedIcon id="menu-icon"></MenuRoundedIcon>
        </nav>
    )

}

export default Nav;