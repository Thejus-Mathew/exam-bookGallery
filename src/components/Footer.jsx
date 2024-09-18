import { MDBCol, MDBContainer, MDBFooter, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

function Footer() {
  return (
    <div>
        <MDBFooter style={{backgroundColor:"rgb(230,230,230)"}} className=' text-black text-center'>
            <MDBContainer className='p-4'>
            <MDBRow>
                <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Footer Content</h5>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                    Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                    est atque cumque eum delectus sint!
                </p>
                </MDBCol>

                <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Links</h5>

                <ul className='list-unstyled mb-0'>
                    <li>
                    <a href='#!' className='text-dark'>
                        Link 1
                    </a>
                    </li>
                    <li>
                    <a href='#!' className='text-dark'>
                        Link 2
                    </a>
                    </li>
                    <li>
                    <a href='#!' className='text-dark'>
                        Link 3
                    </a>
                    </li>
                    <li>
                    <a href='#!' className='text-dark'>
                        Link 4
                    </a>
                    </li>
                </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
                <h5 className='text-uppercase mb-0'>Links</h5>

                <ul className='list-unstyled'>
                    <li>
                    <a href='#!' className='text-dark'>
                        Link 1
                    </a>
                    </li>
                    <li>
                    <a href='#!' className='text-dark'>
                        Link 2
                    </a>
                    </li>
                    <li>
                    <a href='#!' className='text-dark'>
                        Link 3
                    </a>
                    </li>
                    <li>
                    <a href='#!' className='text-dark'>
                        Link 4
                    </a>
                    </li>
                </ul>
                </MDBCol>
            </MDBRow>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className='text-dark' href='https://mdbootstrap.com/'>
                BookGallery.com
            </a>
            </div>
        </MDBFooter>
    </div>
  )
}

export default Footer
