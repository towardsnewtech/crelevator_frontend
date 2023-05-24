import React, { useState } from "react";
import { Container, Media, Row, Col, Card, CardBody, CardFooter, Label } from "reactstrap";
import Masonry from "react-masonry-css";
import { useRouter } from "next/router";
import { SERVER_URL } from "../../../config";
import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "@mui/material";

const useStyles = makeStyles({
  imagestyle: {
    transition: '1s',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.5)'
    }
  }
})

const MasonryTwoPage = ({ productList, category_name }) => {

  const router = useRouter();

  const handleGotoProductDetail = (productId) => {
    router.push(`/product-details/${productId}`)
  }

  const classes = useStyles() ;
  const match580 = useMediaQuery('(min-width: 580px)') ;
  const match1400 = useMediaQuery('(min-width: 1400px)') ;
  const match1200 = useMediaQuery('(min-width: 1200px)') ;

  console.log(productList);

  return (
    <>
      <section className="portfolio-section grid-portfolio ratio2_3 portfolio-padding">
        <Container>
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
                  <h2>COMMERCIAL LINEE</h2>
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
                    {/* <h3 style={{ color: 'rgb(199, 32, 24)' }}>{product.name}</h3>
                    <img onClick={() => handleGotoProductDetail(product.id)} src={`${SERVER_URL}/images/products/${product.image}`} width={'50%'} height={'70%'} className={classes.imagestyle} /> */}
                    <Card style={{ width: match580 ? '50%' : match1400 ? '70%' : match1200 ? '100%' : '80%' }}>
                      <CardBody style={{ overflow: 'hidden' }}>
                        <img onClick={() => handleGotoProductDetail(product.id)} src={`${SERVER_URL}/images/products/${product.image}`} width={'100%'} className={classes.imagestyle} />
                      </CardBody>
                      <CardFooter style={{ display: 'flex', justifyContent: 'center' }} >
                        <Label style={{ color: 'rgb(199, 32, 24)' }}>{product.name}</Label>
                      </CardFooter>
                    </Card>
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
