import React from 'react'
import {Card, Button, Row, Col, Modal, Form} from 'react-bootstrap';
import { useState} from 'react';
import "../css/card.scss";
import BeautyStars from "beauty-stars";

export const MovieCard = (props) => {
 const detail = props.movieDetail;
 const [title, setTitle] = useState(detail.storyline)
 const [isOpen, setIsOpne] = useState(false)
 const [editDetail, setEditDetails] = useState({
   "storyline": detail.storyline
 })
 const openModal = () =>{
  setIsOpne(true);
 } 
 const closeModal = () => setIsOpne(false);

 const onChangeField = (e) => {
  let fname = e.target.name;
  let value = e.target.value;
  setEditDetails({...editDetail, [fname]: value})
 }
 const calculateAverage = (array) => {
  var total = 0;
  var count = 0;
  array.forEach(function(item, index){
      total += item;
      count++;
  });
  return (total / count);
}

const handleSubmit = (e) => {
  e.preventDefault()
  fetch('/testAPI/edit/'+detail.id, {
      method: 'POST',
      body: JSON.stringify({"storyline": editDetail.storyline}),
      headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json())
  .then(data => setTitle(data.storyline))
  closeModal()

}
  return( 
    <div>
    <Card>
      <Row>
        <Col xs={4} className="card_left">
          <Card.Img variant="top" src={detail.posterurl} />
        </Col>
        <Col xs={8} className="card_right" >
          <Card.Body className="card_right__details">
            <Card.Title>{detail.title}</Card.Title>
              <ul>
                <li>{detail.year}</li>
                <li>{detail.genres.join(', ')}</li>
              </ul>
            <div className="card-text">
              <div className="actors_des"><span className="actors">Actors:</span> {detail.actors.join(' ')}</div>
              <BeautyStars
                value={calculateAverage(detail.ratings)}
                activeColor={"#fed136"}
                inactiveColor={"#ccc"}
                gap={"4px"}
                size={"16px"}
              />  
              <div className="des" title={title}>{title}</div>
              <Button variant="primary" onClick={openModal}>Edit Movie Details</Button>
            </div>
          </Card.Body>
      </Col>
      </Row>
    </Card>
    <Modal show={isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Movie Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={e => handleSubmit(e)}>
          <Form.Group>
            <Form.Label>Movie Description</Form.Label>
            <Form.Control 
              type="text" 
              name="storyline"
              defaultValue={title} 
              onChange={onChangeField}
            />
          </Form.Group>
          <input type="submit" value="Save"></input>
        </Form>
      </Modal.Body> 
    </Modal>
    </div>
 )
}