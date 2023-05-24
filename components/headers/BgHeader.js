import React, { useState, useEffect } from "react";
import NavBar from "./common/navbar";
import Cart from "../containers/Cart";
import CartContainer from "../containers/CartContainer";
import TopBar from "./common/topbar";
import { Media, Container, Row, Col } from "reactstrap";
import LogoImage from "./common/logo";
import cart from "../../public/assets/images/jewellery/icon/cart.png";
import search from "../../public/assets/images/jewellery/icon/search.png";
import settings from "../../public/assets/images/icon/setting.png";
import SearchOverlay from "./common/search-overlay";
import { useRouter } from "next/router";
import tagStyled from 'styled-components'

const BgHeader = ({ logoName, direction }) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);
    if (router.asPath !== "/layouts/Christmas")
      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number >= 300) {
      if (window.innerWidth < 581)
        document.getElementById("sticky").classList.remove("fixed");
      else document.getElementById("sticky").classList.add("fixed");
    }
    else document.getElementById("sticky").classList.remove("fixed");
  };

  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  return (
    <BgHeaderMain>
      <header className="header-tools" id="sticky">
        <div className="mobile-fix-option"></div>
        <TopBar />
        <div className="logo-menu-part">
          <Container>
            <Row>
              <Col sm="12">
                <div className="main-menu">
                  <div className="menu-left">
                    <div className="brand-logo">
                      <LogoImage logo={logoName} />
                    </div>
                  </div>
                  <div className="menu-right pull-right">
                    <NavBar />
                    <div>
                      <div className="icon-nav">
                        <ul>
                          <li className="onhover-div mobile-search">
                            <div>
                              <Media
                                src={search.src}
                                onClick={openSearch}
                                className="img-fluid"
                                alt=""
                              />
                              <i
                              className="fa fa-search"
                              onClick={openSearch}
                            ></i>
                            </div>
                          </li>

                          {direction === undefined ? (
                            <CartContainer icon={cart.src} />
                          ) : (
                            <Cart icon={cart.src} layout={direction} />
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <SearchOverlay />
    </BgHeaderMain>
  );
};

export default BgHeader;

const BgHeaderMain = tagStyled.div`
    background-image : url('/assets/images/home-banner/50.jpg');
    background-size : contain;
    background-position : center center;

    height : 220px;
    width : 100vw;
`
