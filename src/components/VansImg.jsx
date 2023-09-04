import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function VansImg({imgurl,title,price,type}) {
  return (
    <Card style={{ width: '15.2rem' }} className='card'>
      <Card.Img style={{height :'15rem' ,width:"15rem"}} variant="top" src={`${imgurl}`} />
      <Card.Body>
        <Card.Title className='title'>{title} <span className='price'>{price}$  </span> </Card.Title>
        
       
        <Button variant="primary" className='card-btn'>{type}</Button>
      </Card.Body>
    </Card>
  );
}

export default VansImg;