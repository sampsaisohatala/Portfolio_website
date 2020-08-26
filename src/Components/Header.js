import React from 'react';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Header.css";


function Header(){
    return(
        <header className='header_container'>
            <span className='app_name'>
                Sampsa Isohätälä
            </span>
            {/* <Navigation/> */}
        </header>
    )
}

export default Header;