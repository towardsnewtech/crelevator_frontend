import React,{Fragment} from 'react';
import { Row, Col ,Container} from "reactstrap";

const AboutSection = () => {
    return (
        <Fragment>
            <section>
                <Container>
                    <Row>
                        <Col lg="8" className="m-auto">
                            <div className="title3">
                                <h2 className="title-inner3">welcome to crelevator</h2>
                                <div className="line"></div>
                            </div>
                            <div className="about-text">
                                <p>
                                Welcome to CR Elevator Supply, your one-stop destination for all your residential and commercial elevator needs. We are a leading supplier of high-quality elevator parts and accessories that cater to the needs of both commercial and residential properties.
                                <br/>
                                At CR Elevator Supply, we pride ourselves on offering a vast selection of elevator components, from elevator buttons and fixtures to hydraulic cylinders and electrical equipment. We understand that every elevator is unique, and that's why we carry a wide range of products to ensure that we can meet all of your elevator supply needs.
                                <br/>
                                Our team consists of experienced professionals who are knowledgeable about the elevator industry and are dedicated to providing the best service possible. We understand that elevator downtime can be costly, which is why we offer fast and reliable shipping on all of our products, so you can get your elevator up and running as quickly as possible.
                                <br/>
                                We value our customers and strive to provide exceptional service, whether you're a contractor, building owner, or elevator maintenance technician. Our team is always available to answer any questions you may have and help you find the right parts for your elevator.
                                <br/>
                                Thank you for choosing CR Elevator Supply as your elevator parts supplier. We look forward to serving you and helping you keep your elevators running smoothly.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
}

export default AboutSection;