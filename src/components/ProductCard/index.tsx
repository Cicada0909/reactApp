import { IProduct } from "../../interfaces/product"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css'

interface ProductCardProps {
    product: IProduct
}

const ProductCard = ({product}: ProductCardProps) => {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img height={300} variant="top" src={product.image} />
            <Card.Body style={{display: 'flex', flexDirection: 'column'}}>
                <Card.Title className="card-title">{product.title}</Card.Title>
                <Card.Text>
                {product.description}
                </Card.Text>
                <Button style={{marginTop: 'auto'}} variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    )
}

export default ProductCard