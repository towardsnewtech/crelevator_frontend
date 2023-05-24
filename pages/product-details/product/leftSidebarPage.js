import React, { useState, useEffect, useRef } from "react";
import ProductTab from "../common/product-tab";
import { Container, Row, Col } from "reactstrap";

const LeftSidebarPage = ({ productData }) => {

  return (
    <section className="">
      <div className="collection-wrapper">
        <Container>
          <Row>
            <Col lg="12" sm="12" xs="12">
              <ProductTab 
                data={productData}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default LeftSidebarPage;
