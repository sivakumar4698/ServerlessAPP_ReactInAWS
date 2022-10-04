import React from 'react'
import {Card, Button, Row, Col, Image} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CardText from '../../data/CardText.json'

const Cards = () => {

  const navigate = useNavigate();

  const businesspage = () => {
   
    navigate('/businessnotes')

  }
  return (
    < >
    <Row div className="cards">
        <Col>
        <Card.Body>
        <Card.Title>Peace of Mind</Card.Title>
        <Card.Text>
          Inner peace builds, inner strength
        </Card.Text>
        <Button  onClick={businesspage} variant="secondary"style={{color:"#ffffff", backgroundColor:"#99C7AF"}}>Explore...</Button>
      </Card.Body>
        </Col>
        <Col>
        <Card.Body>
        <Card.Title>Plan your day</Card.Title>
        <Card.Text>
          Dont get lost, keep yourself occupied.
        </Card.Text>
        <Button  variant="secondary"style={{color:"#ffffff", backgroundColor:"#99C7AF"}}>Explore...</Button>
      </Card.Body>
        </Col>
    </Row>
    <Row className="cards">
        <Col>
        <Card.Body>
        <Card.Title>Adventure</Card.Title>
        <Card.Text>
          Explore the world. 
        </Card.Text>
        <Button  variant="secondary" style={{color:"#ffffff", backgroundColor:"#99C7AF"}}>Explore...</Button>
      </Card.Body>
        </Col>
        <Col>
        <Card.Body>
        <Card.Title>Things I learned from a business book</Card.Title>
        <Card.Text>
          Im sharing the insights.
        </Card.Text>
        <Button  variant="secondary" style={{color:"#ffffff", backgroundColor:"#99C7AF"}}>Explore...</Button>
      </Card.Body>
        </Col>
    </Row>
    </>
  )
}

export default Cards;
