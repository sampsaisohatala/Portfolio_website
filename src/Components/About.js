import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring'
import "./About.css";

const items = ['Web development', 'AR/VR', 'Game development']
const config = { mass: 20, tension: 2000, friction: 2000 }

function About(){

    const [toggle] = useState(true)
    const trail = useTrail(items.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    
    return (
        <div className="about_panel">
            <div className="trails-main" >
                <div>
                    {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index]}
                        className="trails-text"
                        style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                        <animated.div style={{ height }}>{items[index]}</animated.div>
                    </animated.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About;