import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

const ImageCard = ({ image }) => {
  return (
    <Container className="mt-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image.urls.small} />
        <Card.Body>
          <Card.Title>{image.title.toUpperCase()}</Card.Title>
          <Card.Text>{image.descriotion || image.alt_description}</Card.Text>
          <Button variant="primary">Delete</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ImageCard;
