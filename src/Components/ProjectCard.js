import React, { useState } from 'react';
import { Card } from 'react-bootstrap'
import {animated, useTransition} from 'react-spring'
import "./Projects.css";

function ProjectCard(props){

  const [showCard, setShowCard] = useState(false);
  const title = props.title
  const description = props.description
  const link = props.link;
  const linkDestination = props.linkDestination;

  const transitions = useTransition(showCard, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
    
  return(
    <Card className='card'>
      <Card.Img 
        className="card_img" 
        src="https://picsum.photos/1000/1000"
        onMouseOver={() => setShowCard(true)}
        on
      />
        {
          transitions.map(({ item, key, props }) =>
          item && <animated.div key={key} style={props} className="image_mask">
            <div 
              className="image_mask"
              onMouseLeave={() => setShowCard(false)}
            >
              <Card.Body>
                <Card.Title className="card_title">
                  {title}
                </Card.Title>
                <Card.Text className="card_description">
                  {description}
                </Card.Text>
                <a className="link_button" href={link}>
                  <img className={linkDestination}  src={require(`../Images/${linkDestination}.png`)}  alt={linkDestination}/>
                </a>               
              </Card.Body>
            </div>
        </animated.div>
        )
      }
    </Card>
  )
}

export default ProjectCard;
