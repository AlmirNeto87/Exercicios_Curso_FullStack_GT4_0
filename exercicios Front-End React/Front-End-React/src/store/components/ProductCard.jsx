
import { Card } from '@primereact/ui/card';
import { Button } from '@primereact/ui/button';

const ProductCard = ({ product }) => {

    
    return (
        
       <Card.Root>
            <Card.Header>
                <img src={product.image} alt={product.title} />
            </Card.Header>

            <Card.Body>
                <Card.Caption>
                    <Card.Title>{product.title}</Card.Title>
                </Card.Caption>

                <Card.Content>
                    <p>{product.description}</p>
                </Card.Content>

                <Card.Footer>
                    <strong>$ {product.price.toFixed(2)}</strong>

                    <Button>
                        Detalhes
                    </Button>
                </Card.Footer>
            </Card.Body>
        </Card.Root>
    );
};

export default ProductCard;
