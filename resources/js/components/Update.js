import axios from 'axios'
import React from 'react'
import {Form, Button} from 'react-bootstrap'
import{useState} from 'react'

function Update(props) {

    const[price, setPrice] = useState(0)
    const[quantity, setQuantity] = useState(0)

 

    const updateProducts = (e) =>{
        alert("Product has been updated");
        axios.put("http://localhost/Website/public/productUpdate/" + props.match.params.id,{
            price: price,
            quantity: quantity
        })
    }

    return (
        <div>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control placeholder="Product Price" onChange={(e)=>{setPrice(e.target.value);}}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Quantity</Form.Label>
                <Form.Control placeholder="Product Quantity" onChange={(e)=>{setQuantity(e.target.value);}}/>
            </Form.Group>
            <Button variant="primary" onClick={updateProducts}>
                Submit
            </Button>
        </Form>
        </div>
    )
}

export default Update
