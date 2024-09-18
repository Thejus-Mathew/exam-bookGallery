import { MDBInput } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

function Add() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()

    const[book,setBook] = useState({})



  return (
    <>
    <div className='my-3 d-flex justify-content-center align-items-center position-relative bg-secondary' style={{aspectRatio:"3/1"}}>
        <img src="https://www.shutterstock.com/image-vector/shelves-light-shadow-empty-white-600nw-285178898.jpg" width={"100%"} height={"100%"} alt="" />
        <button className='btn btn-lg btn-primary position-absolute' onClick={handleShow}>Add Book to Collection</button>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Control size="lg" className='my-3' type="text" placeholder="Book Name" />
            <Form.Control size="lg" className='my-3' type="text" placeholder="Author Name" />
            <Form.Control size="lg" className='my-3' type="text" placeholder="Poster URL" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add
