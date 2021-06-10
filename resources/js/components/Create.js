import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {useState} from 'react'



function Create() {

    const[name, setName] = useState("")
    const[image, setImage] = useState("")
    const[quantity, setQuantity] = useState(0)
    const[price, setPrice] = useState(0)
    const[sex, setSex] = useState("")
    
    const url = "http://localhost/Website/public/productCreate"
    
    const handleAddProducts = () =>{
        
        axios.post(url, {
            name: name,
            image: image,
            quantity: quantity,
            price: price,
            sex: sex
        })
        .then(response =>{
            console.log(response.data);
            alert("Product has been created");
        })
        .catch(e =>{
            console.log(e);
        });
    }

    return (
        <div>
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Product Name" onChange={(e)=>{setName(e.target.value);}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control placeholder="Product Image" onChange={(e)=>{setImage(e.target.value);}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Quantity</Form.Label>
                <Form.Control placeholder="Product Quantity" onChange={(e)=>{setQuantity(e.target.value);}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control placeholder="Product Price" onChange={(e)=>{setPrice(e.target.value);}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Sex</Form.Label>
                <Form.Control placeholder="Product Sex" onChange={(e)=>{setSex(e.target.value);}}/>
            </Form.Group>
            <Button variant="primary" onClick={handleAddProducts}>
                Submit
            </Button>
        </Form>
        </div>
    )
}

export default Create
