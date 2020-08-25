import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import {animated, useTransition} from 'react-spring'
import "./Projects.css";

function ProjectCard(props){

  const [showCard, setShowCard] = useState(false);

  const transitions = useTransition(showCard, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    })
    
  const title = <p>{props.title}</p>
  const description = <p>{props.description}</p>

  return(

    <Card className='card'>
      <Card.Img 
        className="card_img" 
        src="https://picsum.photos/600/600"
        onMouseOver={() => setShowCard(true)}
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
              {/* <Button>Read more</Button> */}
            </Card.Body>
          </div>
        </animated.div>
        )
      }

    
    </Card>
  )
}

export default ProjectCard;