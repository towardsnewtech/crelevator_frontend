import React from 'react';
import CommonLayout from '../components/shop/common-layout';
import { Container, Row, Col } from 'reactstrap';
import notFound from '../public/assets/images/404.png';

const Page404 = () => {
    return (
        <CommonLayout parent="home" title="404">
            <div
                style={{
                    display:'flex',
                    justifyContent:'center',
                }}
            >
                <img src={notFound.src} width={700} />
            </div>
            <section className="p-0">
                <Container>
                    <Row>
                        <Col sm="12">
                            <div className='error-section'
                            
                                style={{
                                    paddingTop:'0rem',
                                    paddingBottom:'2rem'
                                }}
                            >
                                <a href="/" className="btn btn-solid">back to home</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}
export default Page404;