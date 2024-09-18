import { MDBInput } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';

function Add() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()


    const[name,setName] = useState("")
    const[author,setAuthor] = useState("")
    const[poster,setPoster] = useState("")

    const[book,setBook] = useState({})

    const handleAdd = () =>{
        if(book == "" || author == "" || poster == "" ) {
            alert("fill empty fields")
        }else{
            console.log(book);
            dispatch(addBook(book))
        }
        handleClose()
    }


    useEffect(()=>{
        setBook({name,author,poster})
    },[name,author,poster])

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
            <Form.Control size="lg" className='my-3' type="text" value={name} placeholder="Book Name" onChange={(e)=>setName(e.target.value)}/>
            <Form.Control size="lg" className='my-3' type="text" value={author} placeholder="Author Name" onChange={(e)=>setAuthor(e.target.value)}/>
            <Form.Control size="lg" className='my-3' type="text" value={poster} placeholder="Poster URL" onChange={(e)=>setPoster(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add
