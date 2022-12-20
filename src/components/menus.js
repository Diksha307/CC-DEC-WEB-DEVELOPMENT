import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';
import Accordion from 'react-bootstrap/Accordion';

const Menus=()=>{
   
    return(
      <div>
          <br/>
        <div style={{backgroundColor: "	#333300",padding:"20px" }} >
       
        <Accordion  >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Common Converter</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
        
        <ListGroupItem tag="a" href="/length">Length</ListGroupItem>
        <ListGroupItem tag="a" href="/volume">Volume</ListGroupItem>
        <ListGroupItem tag="a" href="/area">Area</ListGroupItem>
        <ListGroupItem tag="a" href="/time">Time</ListGroupItem>
      
       </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Engineering Converters</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
        
        <ListGroupItem tag="a" href="/speed">Speed</ListGroupItem>
        <ListGroupItem tag="a" href="/density">Density</ListGroupItem>
        <ListGroupItem tag="a" href="/pressure">Pressure</ListGroupItem>
        <ListGroupItem tag="a" href="/Moment">Moment of Force</ListGroupItem>
      
       </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
  
    <Accordion.Item eventKey="2">
        <Accordion.Header>Heat Converters</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
        
        <ListGroupItem tag="a" href="/heatdensity">Heat density</ListGroupItem>
        <ListGroupItem tag="a" href="/sheat">Specific Heat Capacity</ListGroupItem>
      
       </ListGroup>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Fluid Converters</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
        
        <ListGroupItem tag="a" href="/surfacetension">Surface Tension</ListGroupItem>
      
       </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>



        </div> 
        </div> 
    )
    
}


export default Menus