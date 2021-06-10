import React from 'react'
import {Navbar} from 'react-bootstrap'
import './Style.css'

function Footer() {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark" className="justify-content-center">
                    <Navbar.Brand href="#home"><img  src="https://img.icons8.com/color/48/000000/nike.png"/>Black-Shop</Navbar.Brand>
                    <p style={{color:'white'}} className="text-center mt-4 mb-4">&copy; {(new Date().getFullYear())} Copyright: Diego Machado</p>
                    <div className="redes-sociales">
                        <a href="#">
                            <img width="24" height="24" src="https://img.icons8.com/material/24/000000/instagram-new--v1.png"/>
                        </a>
                        <a href="#">
                            <img width="24" height="24" src="https://img.icons8.com/material/26/000000/facebook--v1.png"/>
                        </a>
                        <a href="#">
                            <img width="24" height="24" src="https://img.icons8.com/material/24/000000/twitter--v1.png"/>
                        </a>

                    </div>

                </Navbar>
        
            </>
        </div>
    )
}

export default Footer
