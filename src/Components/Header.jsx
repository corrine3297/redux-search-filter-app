import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/allProductSlice'

function Header() {
    const dispatch = useDispatch()

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <Link className='fw-bolder'
                            to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Products
                        </Link>
                    </Navbar.Brand>
                    <div className="d-flex ms-auto align-items-center">
                        <input onChange={(e) => dispatch(searchProduct(e.target.value))}
                            type="text" className='form-control' placeholder='Search Restaurant' />
                        <i className='fa-solid fa-search' style={{ marginLeft: '-30px' }}></i>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Header