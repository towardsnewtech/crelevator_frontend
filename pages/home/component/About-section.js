import React,{Fragment} from 'react';
import { Row, Col ,Container} from "reactstrap";
import useWindowSize from '../../common';

const AboutSection = () => {
    const size = useWindowSize();

    return (
        <Fragment>
            <section>
                <Container>
                    <Row>
                        <Col lg="2"></Col>
                        <Col lg="8" className="m-auto mb-5">
                            <div className="title3">
                                <h2>CRES CONTROLLERS</h2>
                                <div className="line"></div>
                                {
                                    size.width > 570 ? 
                                    <>
                                        <h3 style={{ color: 'black' }}>RISING ABOVE EXPECTATIONS</h3>
                                        <h3 style={{ color: 'black' }}>CR Elevator - Your Reliable Elevator Partner</h3>
                                    </> : 
                                    <>
                                        <h5 style={{ color: 'black' }}>RISING ABOVE EXPECTATIONS</h5>
                                        <h5 style={{ color: 'black' }}>CR Elevator - Your Reliable Elevator Partner</h5>
                                    </>
                                }
                            </div>
                        </Col>
                        <Col lg="2"></Col>
                        <Col md="1"></Col>
                        <Col md="5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h3 style={size.width > 570 ? { color: 'red', marginBottom: '2rem' } : { color: 'red', marginBottom: '2rem', fontSize: 18 } }>HYDRAULIC CONTROLLER</h3>
                            <img src={'/assets/images/new/Hydra Product Image Medium 400-400 72dpi.png'} width={'40%'} />
                            <p style={{ color: 'black', fontSize: 22, textAlign: 'justify', lineHeight: '1.3', fontSize: '16px' }} className='mt-4'>Introducing Hydro Controller, the next generation in hydraulic elevator technology.
                                <br/><br/>With Adaptive Slowdown, passengers can enjoy smooth and consistent rides, while saving you time and money.
                                <br/><br/>Our advanced controller comes equipped with a range of built-in features that can be easily adjusted to suit your needs. No custom software is required.
                                <br/><br/>Plus, our traveler cables are smaller than previous generations, making installation a breeze. Setting up our system has never been easier. Choose Hydro Controller for an elevated elevator experience.
                            </p>
                        </Col>
                        <Col md="5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h3 style={size.width > 570 ? { color: 'red', marginBottom: '2rem' } : { color: 'red', marginBottom: '2rem', fontSize: 18 }}>TRACTION CONTROLLER</h3>
                            <img src={'/assets/images/new/Controlle Product Image Medium 400-400 72dpi.png'} width={'40%'}/>
                            <p style={{ color: 'black', fontSize: 22, textAlign: 'justify', lineHeight: '1.3', fontSize: '16px' }} className='mt-4'>Experience the future of elevator technology with our state-of-the-art traction controller.
                                <br/><br/>Designed with advanced engineering and a simple user interface, it pushes past conventional non-proprietary controllers to deliver supercharged performance with speeds beyond your expectations.
                                <br/><br/>Our innovative capabilities allow mechanics to easily share parameters within groups, stream inspection testing, and grant easy access to construction mode.
                                <br/><br/>This not only saves you time and effort, but also ensures a smooth and hassle-free experience for both technicians and passengers. Choose our traction controller for unparalleled performance and reliability.
                            </p>
                        </Col>
                        <Col md="1"></Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
}

export default AboutSection;