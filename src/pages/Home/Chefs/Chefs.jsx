import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';


const Chefs = ({singleCard}) => {

    const {picture} = singleCard 


    return (
      <Col>
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Chefs;