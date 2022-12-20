import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col  from 'react-bootstrap/Col';

function Info() {
  return (
    <div>
<Col className="d-flex">

    <Card style={{ width: '18rem' }}>
      
      <Card.Body className="card bg-info text-white">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="light"> <Card.Link href="/common">Card Link</Card.Link></Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    
    <Card.Body className="card bg-info text-white">
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
  
  <Card.Body className="card bg-info text-white">
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
 
  <Card.Body className="card bg-info text-white">
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="light">Go somewhere</Button>
  </Card.Body>
</Card>


</Col>
</div>
  );
}

export default Info;