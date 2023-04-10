import React from 'react';
import Header_menu from './Header_menu.css'

const Header_Menu = () => {
    return (
        <div className='flex justify-around bg-gray-800 text-white leading-10'>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/order">Order</a></li>
            <li><a href="/review">Review</a></li>
            <li><a href="/manage">Manage</a></li>
            <li><a href="/inventory">Inventory</a></li>
        </div>
    );
};

export default Header_Menu;