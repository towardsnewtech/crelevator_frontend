import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  svgFreeShipping,
  svgservice,
  svgoffer,
  svgpayment,
} from "../../../services/script";
import MasterServiceContent from "./MasterServiceConternt";

const Data = [
  {
    link: svgFreeShipping,
    title: "fast shipping",
    service: "shipping nationwide",
  },
  {
    link: svgservice,
    title: "processing time",
    service: "online request",
  },
  {
    link: svgoffer,
    title: "best offer",
    service: "one stop shopping",
  },
  {
    link: svgpayment,
    title: "payment",
    service: "flexible payments options",
  },
];

const Service = ({ layoutClass, hrLine }) => {
  return (
    <Fragment>
      <section className={layoutClass}>
        <Container className="absolute-bg">
          <div className="service p-0 ">
            <Row>
              {Data.map((data, i) => {
                return (
                  <Col
                    key={i}
                    lg="3"
                    sm="6"
                    className={` ${
                      hrLine ? "service-block1" : "service-block"
                    }`}
                  >
                    <MasterServiceContent
                      link={data.link}
                      title={data.title}
                      service={data.service}
                      hrLine={hrLine}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default Service;
