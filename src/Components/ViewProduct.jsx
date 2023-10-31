import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
function ViewProduct() {
    const { id } = useParams()
    const { loading, allProducts, error } = useSelector((state) => state.allProductSlice)
    const [product, setProduct] = useState({})

    useEffect(() => {
        setProduct(allProducts.find(item => item.id == id))
    }, [])
    return (
        <div>
            <Row>
                <Col className='my-5 ms-5' sm={12} md={4} lg={4} xl={4}>
                    <img height={'600px'} width={'450px'} src={product.thumbnail} alt="" />
                </Col>

                <Col className='my-5' sm={12} md={6} lg={6} xl={6}>
                    <div>
                        <h3 style={{ color: 'black' }}>{product?.name}</h3>
                        <p style={{ color: 'black' }} className='fw-bold fs-6' >{product?.title}</p>
                        <p style={{ color: 'black' }} className='fw-bold fs-6 mt-4' >{product?.description}</p>
                        <p style={{ color: 'black' }} className='fw-bold fs-6 mt-4' > {product?.price}</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ViewProduct