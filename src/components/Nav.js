import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <Link to="/"><img id="logo" src="../로고.png" alt="logo"></img></Link>
            <h1>COZ Shopping</h1>
            <MenuRoundedIcon id="menu-icon" onClick={() => {
                setIsOpen(!isOpen)
            }}>
            </MenuRoundedIcon>
            {isOpen ? (
                <ul className='menu'>
                    <li className='item'>OOO님, 안녕하세요!</li>
                    <div className='divider'></div>
                    <Link to="/products/list">
                        <li className='item'>상품 리스트 페이지</li>
                    </Link>
                    <div className='divider'></div>
                    <Link to="/bookmark">
                        <li className='item'>북마크 페이지</li>
                    </Link>
                </ul>
            ) : null}
        </nav>
    )
}

export default Nav;