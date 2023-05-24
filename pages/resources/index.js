import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";

const AboutUs = () => {

  return (
    <>
      <CommonLayout parent="home" title="About-us">
        <section className="about-page section-b-space" style={{ height: window.innerHeight / 1.2 }}>
          <Container>
            <Row>
              <Col sm="12">
                <h4>
                  What does Brand Elevator mean?
                </h4>
                <p>
                  A team of experienced specialists who hone their profession to perfection every day. Currently a team of 6 consisting of PPC & SEO specialists, programmers and graphic designers. Through the hundreds of campaigns we've built, we've discovered strategies that work. We execute these strategies daily.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </CommonLayout>
    </>
  );
};

export default AboutUs;
