import React from 'react'
import { Container, Navbar } from 'react-bootstrap'


function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://static.vecteezy.com/system/resources/previews/022/242/738/non_2x/smart-learning-education-book-shop-store-logo-design-template-free-vector.jpg"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            <span className='fs-1 ms-2'>Book gallery</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
