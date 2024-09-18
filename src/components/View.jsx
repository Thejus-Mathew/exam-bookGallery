import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addBook, deleteBook } from '../redux/bookSlice';


function View() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const books = useSelector(state=>state.bookSlice)
    const dispatch = useDispatch()

    const[name,setName] = useState("")
    const[author,setAuthor] = useState("")
    const[poster,setPoster] = useState("")
    const[id,setId] = useState(0)
    const[book,setBook] = useState({})

    useEffect(()=>{
        setBook({name,poster,author,id})
    },[name,poster,author,id])

    useEffect(()=>{
        // console.log(books);
    },[books])



    const handleDelete = (item) =>{
        dispatch(deleteBook(item))
    }

    const handleEditStart = (item) =>{
        setId(item.id)
        handleShow()
    }

    const handleEdit =async () =>{
        if(book == "" || author == "" || poster == "" ) {
            alert("fill empty fields")
        }else{
            dispatch(deleteBook(book))
            dispatch(addBook(book))
            setAuthor("")
            setName("")
            setPoster("")
        }
        handleClose()
    }

  return (
    <>
    <div className="container">
        <div className="row">
            {
                books?.length>0?books.map(item=>(
                    <div className="col my-3" key={item?.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item?.poster} />
                            <Card.Body>
                                <Card.Title>{item?.name}</Card.Title>
                                <Card.Text className='text-end'>
                                    -{item?.author}
                                </Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <Button variant="primary" onClick={()=>handleEditStart(item)}>Edit</Button>
                                    <Button variant="danger" onClick={()=>handleDelete(item)}><i className="fa-solid fa-trash"></i></Button>
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
        <Form.Control size="lg" className='my-3' type="text" value={name} placeholder="Book Name" onChange={(e)=>setName(e.target.value)}/>
            <Form.Control size="lg" className='my-3' type="text" value={author} placeholder="Author Name" onChange={(e)=>setAuthor(e.target.value)}/>
            <Form.Control size="lg" className='my-3' type="text" value={poster} placeholder="Poster URL" onChange={(e)=>setPoster(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Book
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default View
