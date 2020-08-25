import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {animated, useTransition} from 'react-spring'
import NavigationMenu from './NavigationMenu'
import "./Navigation.css";


function Navigation(){

    const [showMenu, setShowMenu] = useState(false);

    const maskTransitions = useTransition(showMenu, null, {
        from: {position: 'absolute', opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
    })

    const menuTransitions = useTransition(showMenu, null, {
        from: { transform: 'translateX(-100%)'},
        enter: { transform: 'translateX(0%)'},
        leave: { transform: 'translateX(-100%)'}
    })

    return(
        <nav>
            <span>
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                    className='navigation_button'
                />
            </span>

            {
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="navigation_mask"
                        onClick={() => setShowMenu(false)}                    
                    />
                )
            }

            {
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className='navigation_menu'
                    >
                        <NavigationMenu
                            closeMenu={() => setShowMenu(!showMenu)}
                        />
                    </animated.div>
                )
            }

        </nav>       
    )
}

export default Navigation;