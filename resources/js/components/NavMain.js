import React from 'react'
import {  Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Route, Link, Switch} from 'react-router-dom'
import Home from './Home'
import ProductList from './ProductList'
import Cart from './Cart'
import Admin from './Admin'
import Update from './Update'
import Create from './Create'
import './Style.css'


function NavMain() {

 
      

    return (
        <div>
                          
            <div className="m-banner" style={{background:'black', display:'block', textAlign:'center', color:'white'}}>
                <span>ENVÍOS A TODO MÉXICO</span>
            </div>

            <Navbar className="nav" bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand ><img  src="https://img.icons8.com/color/48/000000/nike.png"/>Black-Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/Website/public/home"><img src="https://img.icons8.com/material-rounded/24/000000/home.png"/>Home</Nav.Link>
                        <Nav.Link as={Link} to="/Website/public/productos"><img src="https://img.icons8.com/material/24/000000/moleskine--v1.png"/>Products</Nav.Link>
                        <Nav.Link as={Link} to="/Website/public/admin"><img src="https://img.icons8.com/material-rounded/24/000000/admin-settings-male.png"/>Admin</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/Website/public/cart"><img src="https://img.icons8.com/material-sharp/24/000000/shopping-cart.png"/>Cart</Nav.Link>
                        <Nav.Link href="#login"><img src="https://img.icons8.com/metro/26/000000/gender-neutral-user.png"/></Nav.Link>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Sign Up</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Sign In</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>


            <Switch>
                <Route exact path='/Website/public/home' component={Home}/>
                <Route exact path='/Website/public/productos' component={ProductList}/>
                <Route exact path='/Website/public/cart' component={Cart}/>
                <Route exact path='/Website/public/admin' component={Admin}/>
                <Route exact path='/Website/public/update/:id' component={Update}/>
                <Route exact path='/Website/public/create' component={Create}/>
            </Switch>
 
        </div>
    )
}

export default NavMain
