import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react'
import {CardDeck} from 'react-bootstrap'
import ProductCard from './ProductCard'

function ProductList() {

    const url = "http://localhost/Website/public/product"; //Guardamos la ruta en una variable constante
    const [producto, setProducto] = useState({  //Creamos un usestate para poder guardar un array
        loading: false, 
        data: null,
        error: false
    });

    useEffect(() => {
        setProducto({
            loading:true,
            data: null,
            error:false
        })
        axios.get(url) 
        .then(response=>{
            setProducto({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(()=>{
            setProducto({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url])

    console.log(producto);

    let content = null

    if(producto.data){
        content = producto.data.map((producto, key) =>
        <div key={producto.id}>
            <ProductCard producto={producto}/>
        </div>
        )
    }

    

    return (
        <CardDeck xs={12} md={4} style={{justifyContent: 'center'}}>
            {content}
        </CardDeck>
    )
}

export default ProductList
