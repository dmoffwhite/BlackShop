import React from 'react'
import {Table, Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import './StyleCard.css'
import axios from 'axios'




function Cart() {
 
    const url = "http://localhost/Website/public/cart"
    const [cart, setCart] = useState([]);
    

    const fetchProduct = () =>{
            axios.get(url)
            .then(response=>{
                setCart(response.data)
            })
            .catch(e =>{
                console.log(e);
            })
    }

    useEffect(()=>{
        fetchProduct();
    }, [url]);



    console.log(cart);
    
    const renderPost = () =>{


        if(cart.length === 0){
            return(
                <tr>
                    <td colSpan="4">
                        There is not products yet, Add one.
                    </td>
                </tr>
            );
        }

        const handleDeleteItems = (cart_id) =>{
            
            axios.delete(`http://localhost/Website/public/cartDelete/${cart_id}`)
            .then(fetchProduct 
                , alert("Product has been deleted to your cart"))
            .catch(e =>{
                console.log(e)
            })
        } 

        return cart.map((cart)=>(
        <tr key={cart.id}>
            <td>{cart.name}</td>
            <td>{cart.price}</td>
            <td>
                <Button variant="danger" onClick={() =>{
                   handleDeleteItems(cart.id)
                  
                }}>Delete</Button>
            </td>
        </tr>
        ))
        

    }
    



       return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderPost()}
                </tbody>
            </Table>
        </div>
       )
}

export default Cart
