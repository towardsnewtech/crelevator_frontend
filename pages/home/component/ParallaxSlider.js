import React, { Fragment, useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { tools_product_4 } from "../../../services/script";
import { useQuery } from "@apollo/client";
import { gql } from '@apollo/client';
import CartContext from "../../../helpers/cart";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import { Container, Row, Col } from "reactstrap";
import ProductItem from "../../../components/common/product-box/ProductBox12";
import { GetAllProduct } from "../../../action/products";

const ParallaxSlider = () => {
  const context = useContext(CartContext);
  const compareContext = useContext(CompareContext);
  const curContext = useContext(CurrencyContext);
  const wishListContext = useContext(WishlistContext);
  const [products, setProducts] = useState([]) ;

  useEffect(() => {
    GetAllProduct().then(res => {
      setProducts(res.products)
    }).catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <Fragment>
      <section className="full-banner parallax small-slider tools-parallax-product">
        <Container>
          <Row>
            <Col lg="4">
              <div className="tools-description">
                <div>
                  <h3>Select your elevator</h3>
                  <div className="tools-form">
                    <div className="search-box">
                      <select className="form-control">
                        <option value="">Select</option>
                        <option value="1">Commercial</option>
                        <option value="2">Residential</option>
                      </select>
                    </div>
                    <div className="search-box">
                      <select name="model" className="form-control">
                        <option value="">Select</option>
                        <option value="1">Shaft Components</option>
                        <option value="2">Hydraulic</option>
                        <option value="3">Doors</option>
                        <option value="4">Safety</option>
                        <option value="5">Electric</option>
                      </select>
                    </div>
                    <div className="search-button">
                      <a href="#" className="btn btn-solid btn-find">
                        find my part
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="8" className="tools-grey ratio_square">
              <Slider
                {...tools_product_4}
                className="tools-product-4 product-m"
              >
                {products &&
                  products.slice(0, 8).map((data, i) => {
                    return (
                      <ProductItem
                        product={data}
                        key={i}
                        spanClass={true}
                        addToCompare={() => compareContext.addToCompare(data)}
                        addCart={() => context.addToCart(data)}
                        addWishlist={() => wishListContext.addToWish(data)}
                      />
                    );
                  })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ParallaxSlider;
