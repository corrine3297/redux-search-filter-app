import React, { useEffect } from 'react'
import allProductSlice, { fetchAllProducts } from '../redux/slices/allProductSlice'
import ProductCard from '../Components/ProductCard'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
    const { loading, allProducts, error } = useSelector((state) => state.allProductSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [])
    return (

        <>

            <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
                {
                    loading && <div>
                        <Spinner animation="border" variant="info" />
                        <span className="ms-2">Loading...</span>

                    </div>
                }
            </div>

            <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
                {
                    !loading && error ? <div>
                        <span className="fw-bolder text-danger">{error}</span>
                    </div> : null
                }
            </div>
            <Row className='mt-5' >
                {
                    !loading && allProducts?.length > 0 ? allProducts?.map(product => (
                        <Col className='py-3 px-5' sm={12} md={6} lg={4} xl={3}>
                            <ProductCard product={product} />
                        </Col>
                    ))

                        : <p className='text-danger mx-5'>No Restaurants to display</p>
                }
            </Row>
        </>
    )
}

export default Home