import React from 'react';
import { Link } from 'react-router-dom'
import "./NavigationMenu.css";

function NavigationMenu(props){
    return(
        <div>
            <div className='navigation_menu_logo'>
                AppName
            
            </div>
                <ul className='navigation_menu_list'>
                    <li>
                        <Link 
                            to="/" 
                            className="navigation_menu_item"
                            onClick={props.closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className="navigation_menu_item"
                            onClick={props.closeMenu}
                        >
                            About
                        </Link>
                    </li>
                </ul>
        </div>
    )
}

export default NavigationMenu