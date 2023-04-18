import React, { Fragment, useEffect } from "react";
import { useSelector } from 'react-redux';
import Banner from "./component/Banner";
import AboutSection from "./component/About-section";
import Category from "./component/Category";
import ParallaxSlider from "./component/ParallaxSlider";
import TopCollection from "../../components/common/Collections/Collection2";
import Service from "../../components/common/Service/service3";
// import { withApollo } from "../../helpers/apollo/apollo";
import LogoBlock from "../../components/common/logo-block";
import NewProduct from "../../components/common/Collections/TabCollection3";
import { Product4 } from "../../services/script";
import Helmet from "react-helmet";
import MasterFooter from "../../components/footers/common/MasterFooter";
import Header from "../../components/headers/Header"; 
import { selectMode } from "../../store/slices/settingSlice";

const Home = () => {
  const modeState = useSelector(selectMode);

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#ff4c3b");
  });

  return (
    <Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/assets/images/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/assets/images/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <div className="tools-bg">
        {/* <HeaderOne topClass="top-header" logoName={modeState ? "logo1.png" : "logo.png"} /> */}
        <Header logoName={modeState ? "logo1.png" : "logo.png"} />
        <Banner />
        <Service layoutClass="banner-padding absolute-banner pb-0 tools-service" />
        <AboutSection />
        <Category />
        <TopCollection
          spanClass={true}
          type="tools"
          title="Popular products"
          productSlider={Product4}
          designClass="section-b-space tools-grey ratio_square"
          noSlider="true"
        />
        <ParallaxSlider />
        <NewProduct
          spanClass={true}
          type="tools"
          title="Top Collections"
          subtitle="trend"
          designClass="tools-grey ratio_square"
          cartClass="cart-info cart-wrap"
          noSlider="true"
        />
        <div className="tools-brand section-b-space">
          <LogoBlock />
        </div>
        <MasterFooter
          footerClass={" blur-up lazyloaded"}
          footerLayOut={"white-layout"}
          footerSection={"small-section"}
          belowSection={"section-b-space darken-layout"}
          logoName="logo1.png"
          layoutClass={"dark-subfooter"}
          newLatter={false}
        />
      </div>
    </Fragment>
  );
};

export default Home;
