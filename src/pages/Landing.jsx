import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>
    <Container className='d-flex justify-content-center align-items-center py-5 px-4'>
    <Row className='mt-5 d-flex justtify-content-center align-items-center'>
      
      <Col md={6}>
      <h2 className='mt-md-5'>Welcome To <span className='text-warning'>Media Player</span></h2>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, modi ipsum laborum corporis non illum repudiandae obcaecati aliquam eum cupiditate accusamus assumenda quia dolore commodi in. Delectus consequatur praesentium laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas minima expedita accusamus! Aliquid sunt ipsum quo, sed ab et autem, optio illum quaerat culpa molestiae suscipit perferendis natus eligendi?</p>
      <Link to="/home" onClick={()=>{console.log('navigate to home');
      }}><button className='btn btn-warning mt-5'>Get Started</button></Link>
      </Col>
      <Col md={1}></Col>
      <Col md={5} className='d-flex justify-content-center mt-5 mt-md-0'>
      <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" className='w-75' />
      </Col>

    </Row>
  </Container>


  <h2 className='text-center'>Features</h2>
  <Container className='d-flex justify-content-center align-item-center py-5 px-4'>
    
    <Row>
      <Col md={4} className='p-3'>
      <Card style={{ width: '18rem' }} className='p-3'>
    <Card.Img variant="top" src="https://ssl-forum-files.fobby.net/forum_attachments/0039/3894/BeamGamma.gif" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card></Col>
      <Col md={4} className='p-3'>
      <Card style={{ width: '18rem' }} className='p-3'>
    <Card.Img variant="top" src="https://24.media.tumblr.com/d36278415ea2632bb223d8e736a93a6b/tumblr_n6akz39WvM1shpedgo1_500.gif" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card></Col>
      <Col md={4} className='p-3'>
      <Card style={{ width: '18rem' }} className='p-3'>
    <Card.Img variant="top" src="https://c.tenor.com/g4ycrZjXFAQAAAAC/flaming-circle.gif" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card></Col>
    </Row>
  </Container>
  
  <div className="container">
    <div className="row p-md-5 p-3">
      <div className="col border border-secondary border-2 rounded p-md-5 p-3">
        <div className="row">
          <div className="col-md-6">
            <h2 className='text-warning'>Simple Fast and Powerfull</h2>
            <p><span className='fs-4'>Play Everything</span> : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo modi aspernatur in vitae, nobis possimus temporibus fugiat ipsam laboriosam incidunt ipsa fuga excepturi quis beatae iusto alias ducimus vero iure!</p>
            <p><span className='fs-4'>Play Everything</span> : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo modi aspernatur in vitae, nobis possimus temporibus fugiat ipsam laboriosam incidunt ipsa fuga excepturi quis beatae iusto alias ducimus vero iure!</p>
            <p><span className='fs-4'>Play Everything</span> : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo modi aspernatur in vitae, nobis possimus temporibus fugiat ipsam laboriosam incidunt ipsa fuga excepturi quis beatae iusto alias ducimus vero iure!</p>
          </div>
          <div className="col-md-6">
          <iframe width="100%" height="523" src="https://www.youtube.com/embed/roz9sXFkTuE" title="Aaj Ki Raat | Stree 2 | Tamannaah Bhatia | Sachin-Jigar | Madhubanti | Divya | Amitabh | 15th August" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>

  </>
  )
}

export default Landing
