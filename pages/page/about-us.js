import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";
import Category from "../home/component/Category";

const AboutUs = () => {

  return (
    <>
      <CommonLayout parent="home" title="About-us">
        <section className="about-page section-b-space">
          <Container>
            <Row>
              <Col lg="2"></Col>
              <Col lg="8" className="m-auto">
                <div className="title3">
                  <h2>WELCOME TO CRELEVATOR</h2>
                  <div className="line"></div>
                </div>
              </Col>
              <Col lg="2"></Col>
              <Col lg="2"></Col>
              <Col lg="8" className="mb-5">
                <p style={{ textAlign: 'center', color: 'black', fontSize: '16px', wordSpacing: 2 }}>
                  Welcome to CR Elevator Supply, your one-stop destination for all your residential and commercial elevator needs. We are a leading supplier of high-quality elevator parts and accessories that cater to the needs of both commercial and residential properties. <br/>
                  At CR Elevator Supply, we pride ourselves on offering a vast selection of elevator components, from elevator buttons and fixtures to hydraulic cylinders and electrical equipment. We understand that every elevator is unique, and that's why we carry a wide range of products to ensure that we can meet all of your elevator supply needs.<br/>
                  Our team consists of experienced professionals who are knowledgeable about the elevator industry and are dedicated to providing the best service possible. We understand that elevator downtime can be costly, which is why we offer fast and reliable shipping on all of our products, so you can get your elevator up and running as quickly as possible.
                  <br/>We value our customers and strive to provide exceptional service, whether you're a contractor, building owner, or elevator maintenance technician. Our team is always available to answer any questions you may have and help you find the right parts for your elevator.
                  <br/>Thank you for choosing CR Elevator Supply as your elevator parts supplier. We look forward to serving you and helping you keep your elevators running smoothly.
                </p>
              </Col>
              <Col lg="2"></Col>
            </Row>
            <Category />
          </Container>
        </section>
      </CommonLayout>
    </>
  );
};

export default AboutUs;
