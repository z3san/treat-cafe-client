import React from 'react';
import { Button, Card } from 'react-bootstrap';


const Chefs = ({singleCard}) => {

    const {picture} = singleCard 


    return (
        <div>
             <Card>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Chefs;