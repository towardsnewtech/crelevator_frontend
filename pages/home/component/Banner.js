import React, { Fragment } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Media } from "reactstrap";
import HexGrid from '../../../components/hexagon/index';

const Banner = () => {
  return (
    <Fragment>
      <section id="tool-bg" className="p-0 height-85 tools_slider">
        <Slider className="slide-1 home-slider">
          <div>
            <div className="home text-center home49">
              <Container>
                <Row>
                  <Col>
                    <div className="slider-contain">
                      <div>
                        <h1>CR Elevator</h1>
                        <h4>Commercial And Residential<br/>Elevator Supplies</h4>
                        <a href="#" className="btn btn-solid">
                          shop now
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col className="hexagonCol">
                    <HexGrid />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div>
            <div className="home text-center tools-bg0 home50">
              <Container>
                <Row>
                  <Col>
                    <div className="slider-contain">
                      <div>
                        <h1>CR Elevator</h1>
                        <h4>Commercial And Residential<br/>Elevator Supplies</h4>
                        <a
                          href="#"
                          className="btn btn-outline btn-classic btn-solid"
                        >
                          shop now
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col className="hexagonCol">
                    <HexGrid />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;
