import React from 'react'
import {Carousel} from 'react-bootstrap'
import './Style.css'


function CarouselItem() {
    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    <img 
                    className="d-block w-100 ImgCarousel"
                    src="https://cdn.shopify.com/s/files/1/2636/5824/articles/GZ9177_6_900x.jpg?v=1618929861"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>South Park x adidas Campus 80 "Towelie"</h3>
                    <p>Compra ahora</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100 ImgCarousel"
                    src="https://libra.25gramos.com/wp-content/uploads/sites/3/2020/11/25_Gramos-4.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Ivy Park x adidas</h3>
                    <p>Compra ahora</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100 ImgCarousel"
                    src="https://media.gq.com.mx/photos/5f7f334642587331b04fd9db/master/pass/Colecci%C3%B3n%20de%20D%C3%ADa%20de%20Muertos%20.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Colección Día de Muertos</h3>
                    <p>Nike celebra la cultura mexicana</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )   
}

export default CarouselItem