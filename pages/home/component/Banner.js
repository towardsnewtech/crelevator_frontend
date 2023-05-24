import React, { Fragment } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Media } from "reactstrap";
import HexGrid from '../../../components/hexagon/index';
import tagStyled from 'styled-components';

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
                        {
                          localStorage.getItem("token") ? <a href="/products" className="btn btn-solid">
                            shop now
                          </a>
                          :
                          <NewButton href="/page/account/login" className={"btn btn-solid"} >
                            Call for more Information
                          </NewButton>
                        }
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
                        {
                          localStorage.getItem("token") ? <a href="/products" className="btn btn-solid">
                            shop now
                          </a>
                          :
                          <NewButton href="/page/account/login" className={"btn btn-solid"} >
                            Call for more Information
                          </NewButton>
                        }
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

const NewButton = tagStyled.a`
  background-image: linear-gradient(30deg, var(--theme-deafult) 60%, transparent 50%);
  :hover {
    background-position: 150%;
  }
`

export default Banner;
