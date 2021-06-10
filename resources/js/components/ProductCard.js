import axios from 'axios';
import {Card, Button} from 'react-bootstrap'
import './StyleCard.css'


function ProductCard(props) {

    const url="http://localhost/Website/public/cartCreate";

    const handleAddItems = () =>{
        alert("Product has been added to your cart");
        axios.post(url, {
            name: props.producto.name,
            image: props.producto.image,
            price: props.producto.price,
        })
        .then(response =>{
            console.log(response);
            console.log(response.data);
            
        })
        .catch(e =>{
            console.log(e);
        });

    }


    

    return (
        <div>
            <Card  className="card-style" border="primary">
             <Card.Img variant="top" src={props.producto.image} />
                <Card.Body>
                    <Card.Title>{props.producto.name}</Card.Title>
                    <Card.Text>Price: ${props.producto.price}, Quantity: {props.producto.quantity}, Sex:{props.producto.sex}
                    </Card.Text>
                    <Button onClick={handleAddItems}>Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard
