import React from 'react'
import { Modal, Button } from "react-bootstrap";
import { useState } from 'react'


export const EditMovie = (props) => {
  console.log("==edit", props)

  return(
    <Modal show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal>
  )
}