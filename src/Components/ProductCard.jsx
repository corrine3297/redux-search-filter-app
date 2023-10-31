import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function ProductCard({ product }) {
    return (
        <>
            <Link to={`/view/${product?.id}`}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{height:'250px'}} variant="top" src={product?.thumbnail} />
                    <Card.Body>
                        <Card.Title>{product?.name}</Card.Title>
                        <Card.Text>
                           {product?.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default ProductCard