import React from 'react'
import {Card, Button, Row, Col, Image} from 'react-bootstrap'
import NavBar from './Components/NavBar'
import Cards from './Components/Cards'
import getout from './assets/getout.jpg'
import HomeImage2 from './assets/tiered.png'
import HomeImage1 from './assets/homepage1.png'

 const Home = () => {


  return (
    <>
    <div>
    <Card>
    <Card.Img src= {HomeImage1} alt="Card image"/>
    <Card.ImgOverlay>
    <h2 className= 'font'>Welcome to my thoughts</h2>
      <h2 className= 'fontsub'>Human brain is superior than computer machines</h2>
    </Card.ImgOverlay>
  </Card>
      <NavBar />
    </div>
    <Row className="text">
      <Col >
      An average of 13% of adults worldwide rated their lives poorly enough to be considered "suffering," according to Gallup surveys in 146 countries in 2011
      <br>
      </br>
      <br>
      </br>
       - "suffering is a punishment"
      </Col>
      <Col>
      <Image className="image" src= {HomeImage2} alt="Card image"/>
      </Col>  
    </Row>      
      <div  className="text" style={{backgroundColor:"#99C7AF"}}>
      Be fearless in the pursuit of what sets your soul on fire
      <br></br>
      <br></br>
      – "Jeniffer Lee"
      </div>
    <br></br>
    <Row className="text">
    <Col>
      <Image className="image" src= {getout} alt="Card image"/>
      </Col>  
      <Col >
      An average of 13% of adults worldwide rated their lives poorly enough to be considered "suffering," according to Gallup surveys in 146 countries in 2011
      <br>
      </br>
      <br>
      </br>
       - "suffering is a punishment"
      </Col>
    </Row> 
    <Cards />
    </>

  )
}

export default Home;


