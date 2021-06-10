import React from 'react'
import {CardDeck, Card} from 'react-bootstrap'

function Main() {
    return (
        <div>
            <CardDeck className="cardMain" xs={12} md={4}>
                <Card>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2636/5824/products/S29038_1_1800x1800.jpg?v=1620437558" />
                    <Card.Body>
                        <Card.Title>Ivy Park x adidas Nite Jogger 'Ecru Tint'</Card.Title>
                        <Card.Text>
                            $3,599.00
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2636/5824/products/H09187_1_1800x1800.jpg?v=1620434526" />
                    <Card.Body>
                        <Card.Title>Ivy Park x adidas Belt Bag</Card.Title>
                        <Card.Text>
                            $1,599.00
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2636/5824/products/GT9085_7_1800x1800.jpg?v=1620424578" />
                    <Card.Body>
                        <Card.Title>Ivy Park x adidas 4ALL Unisex Hoddie</Card.Title>
                        <Card.Text>
                            $1,999.00
                        </Card.Text>
                    </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                </Card>
            </CardDeck>


            <CardDeck className="cardMain" xs={12} md={4}>
                <Card>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2636/5824/products/cc452ffe-c9ae-4820-b1ff-9949d6899d37_1800x1800.jpg?v=1616799325" />
                    <Card.Body>
                        <Card.Title>Nike Air Force 1 Low "Rose Pink"</Card.Title>
                        <Card.Text>
                        $ 2,399.00
                        </Card.Text>
                    </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2636/5824/products/DD1500-001_1_1800x1800.jpg?v=1616201273" />
                    <Card.Body>
                        <Card.Title>WMNS Air Max 90 'Evolution of Icons'</Card.Title>
                        <Card.Text>
                        $ 2,599.00
                        </Card.Text>
                    </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2636/5824/products/H57645_7_1800x1800.jpg?v=1619623235" />
                    <Card.Body>
                        <Card.Title>Wales Bonner x adidas Mesh Polo Shirt</Card.Title>
                        <Card.Text>
                        $ 3,299.00
                        </Card.Text>
                    </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                </Card>
            </CardDeck>

            <CardDeck className="cardMain" xs={12} md={4}>
                <Card>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2636/5824/products/578020-02_1_1800x1800.jpg?v=1617978325" />
                    <Card.Body>
                        <Card.Title>Wmns Puma Chase Long Sleeve Top</Card.Title>
                        <Card.Text>
                        $ 718.40
                        </Card.Text>
                    </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2636/5824/products/373308-01_1_1800x1800.jpg?v=1617205353" />
                    <Card.Body>
                        <Card.Title>Puma Rs X³</Card.Title>
                        <Card.Text>
                        $ 2,599.00
                        </Card.Text>
                    </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/2636/5824/products/578039-39_1_1800x1800.jpg?v=1617978553" />
                    <Card.Body>
                        <Card.Title>Wmns Puma Tz Bomber Jacket</Card.Title>
                        <Card.Text>
                        $ 1,078.40
                        </Card.Text>
                    </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}

export default Main
