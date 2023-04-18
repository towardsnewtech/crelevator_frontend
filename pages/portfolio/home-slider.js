import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Media, Row, Col, Card, CardBody } from "reactstrap";
import Slider from "react-slick";

const Data = [
  {
    classes: " p-center text-center",
    img: "home7",
    title: "welcome to fashion",
    desc: "women fashion",
    link: "#",
  },
  {
    classes: " p-center text-center",
    img: "home8",
    title: "welcome to fashion",
    desc: "men fashion",
    link: "#",
  },
];
const HomeSlider = () => {
  return (
    <CommonLayout parent="home" title="elements" subTitle="slider">
      <Container>
        <section className="section-b-space">
          <Slider className="slide-1 home-slider">
            {Data.map((data, index) => {
              return (
                <div>
                </div>
              );
            })}
          </Slider>
        </section>
      </Container>

      <Container className="section-b-space element-detail">
        <Row>
          <Col>
            <Card>
              <h5 className="card-header">Classes</h5>
              <CardBody>
                <h5 className="card-title">For Parallax Image - .parallax</h5>
                <h5>contain-align - .text-start, .text-center, .text-end</h5>
                <h5>contain-position - .p-left, .p-center, .p-right</h5>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </CommonLayout>
  );
};

export default HomeSlider;
