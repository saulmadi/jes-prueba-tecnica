import React from "react";
import {Button, Row, Col, Carousel} from "react-bootstrap";
import {useHistory} from 'react-router-dom'

export function Home() {
    const history = useHistory();
    const goToFiscalias = () => {
        history.push("/fiscalias");
    }
    return (
        <Row className="justify-content-center mt-5">
            <Col xs lg="8">

                <h1>Página oficial del Ministerio Público </h1>
                <p>
                    Aqui encontrar toda la información sobre las fiscalías
                </p>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/holder.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/holder.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/holder.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <p className="mt-3">
                    <Button variant="primary" onClick={goToFiscalias}>Ir a Fiscalías</Button>
                </p>

            </Col>

        </Row>

    )
}