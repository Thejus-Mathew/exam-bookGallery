import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';


function View() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const books = useSelector(state=>state.bookSlice)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(books);
    },[books])

  return (
    <>
    <div className="container">
        <div className="row">
            {
                books?.length>0?books.map(item=>(
                    <div className="col my-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61DSwP-o5DL._SY466_.jpg" />
                            <Card.Body>
                                <Card.Title>{item?.name}</Card.Title>
                                <Card.Text className='text-end'>
                                    -{item?.author}
                                </Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <Button variant="primary" onClick={handleShow}>Edit</Button>
                                    <Button variant="danger"><i className="fa-solid fa-trash"></i></Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))
                :<>Empty Books</>
            }
        </div>
    </div> 



    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
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
            Save Book
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default View
