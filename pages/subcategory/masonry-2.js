import React, { useState } from "react";
import { Container, Media } from "reactstrap";
import Masonry from "react-masonry-css";
import { useRouter } from "next/router";
import { SERVER_URL } from "../../config";

const MasonryTwoPage = ({ colClass, grid, fluid, productList }) => {
  
  const router = useRouter();

  const handleGotoProductDetail = (productId) => {
    console.log(productId)
    router.push(`/product-details/${productId}`)
  }

  return (
    <>
      <section className="portfolio-section grid-portfolio ratio2_3 portfolio-padding">
        <Container fluid={fluid}>
          <Masonry
            breakpointCols={grid}
            className="isotopeContainer row"
            columnClassName={`isotopeSelector ${colClass}`}
          >
            {productList.length > 0
              ? productList.map((product, index) => (
                  <div className="overlay" key={index}
                    onClick={() => handleGotoProductDetail(product.id)}
                  >
                    <div className="border-portfolio">
                      <div>
                        <Media
                          src={`${SERVER_URL}/images/products/${product.image}`}
                          className="img-fluid blur-up lazyload"
                        />
                        <div style={{paddingTop:'10px', textAlign: 'center'}}>{product.name}</div>
                      </div>
                    </div>
                  </div>
                ))
              : "!! No Blogs Found"}
          </Masonry>
        </Container>
      </section>
    </>
  );
};

export default MasonryTwoPage;
