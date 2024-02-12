import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'

function Pic(prop) {
  return (
    <Card className={`p-2 border-0 ${prop.class}`} >
      <Card.Img variant="top" src={prop.image} className='image'/>
      <Card.Body style={{textAlign:'center'}}>
        <Card.Title>{prop.named}</Card.Title>
        <Card.Text>
          {prop.field}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Pic;