import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react'
import { Button, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Admin() {

    const url = "http://localhost/Website/public/product";
    const [product, setProduct] = useState([]);
    

    const fetchProduct = () =>{
            axios.get(url)
            .then(response=>{
                setProduct(response.data)
            })
            .catch(e =>{
                console.log(e);
            })
    }

    useEffect(()=>{
        fetchProduct();
    }, [url]);



    
    const renderPost = () =>{


        const handleDeleteItems = (product_id) =>{
            alert("Product has been deleted to your cart");
            axios.delete(`http://localhost/Website/public/productDelete/${product_id}`)
            .then(fetchProduct)
            .catch(e =>{
                console.log(e)
            })
        } 

        return product.map((product)=>(
        <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.sex}</td>
            <td>
            <Link className="btn btn-warning " to={"/Website/public/update/"+ product.id}>Edit</Link>
                <Button variant="danger" onClick={() =>{
                   handleDeleteItems(product.id)
                  
                }}>Delete</Button>
                
            </td>
        </tr>
        ))
        

    }
    



       return (
        <div>
             <Link className="btn btn-primary" to={"/Website/public/create"}>Create New Product</Link>
            <Table>
                <thead xs={12} md={4}>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Sex</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody xs={12} md={4}>
                    {renderPost()}
                </tbody>
            </Table>
        </div>
       )
}

export default Admin
