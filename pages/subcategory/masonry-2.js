import React, { useState } from "react";
import { Container, Media, Row, Col } from "reactstrap";
import Masonry from "react-masonry-css";
import { useRouter } from "next/router";
import { SERVER_URL } from "../../config";

const MasonryTwoPage = ({ colClass, grid, fluid, productList, category_name }) => {

  const router = useRouter();

  const handleGotoProductDetail = (productId) => {
    router.push(`/product-details/${productId}`)
  }

  return (
    <>
      <section className="portfolio-section grid-portfolio ratio2_3 portfolio-padding">
        <Container fluid={fluid}>
          {/* <Masonry
            breakpointCols={grid}
            className="isotopeContainer row"
            columnClassName={`isotopeSelector ${colClass}`}
          > */}
          {
            category_name == 'Commercial' &&
            <Row>
              <Col lg="2"></Col>
              <Col lg="8" className="m-auto mb-5">
                <div className="title3">
                  <h2>COMMERCIAL LINE</h2>
                  <div className="line"></div>
                </div>
              </Col>
              <Col lg="2"></Col>
            </Row>
          }
          {
            category_name == 'Commercial' ?
              <Row>
                <Col sm="3"></Col>
                <Col sm="6">
                  <img src={`${SERVER_URL}/images/products/${productList[0]?.image}`} width={'100%'} height={'100%'} />
                </Col>
                <Col sm="3"></Col>
              </Row>
            :
            <Row>
              {productList.length > 0
                ? productList.map((product, index) => (
                  <Col md="6" key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '50px' }}>
                    <h3 style={{ color: 'red' }}>{product.name}</h3>
                    <img onClick={() => handleGotoProductDetail(product.id)} src={`${SERVER_URL}/images/products/${product.image}`} width={'50%'} height={'70%'} />
                  </Col>
                ))
                : "... Not Found"}
            </Row>
          }
          {/* </Masonry> */}
        </Container>
      </section>
    </>
  );
};

export default MasonryTwoPage;
