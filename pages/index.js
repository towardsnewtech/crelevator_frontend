import React from "react";

import MainLayout from "../components/Layout/mainLayout";
import Banner from "./home/component/Banner";
import AboutSection from "./home/component/About-section";
import Category from "./home/component/Category";
import ParallaxSlider from "./home/component/ParallaxSlider";
import TopCollection from "../components/common/Collections/Collection2"; 
import Service from "../components/common/Service/service3";
import LogoBlock from "../components/common/logo-block";
import NewProduct from "../components/common/Collections/TabCollection3";
import { Product4 } from "../services/script";
import MasterFooter from "../components/footers/common/MasterFooter";

const Home = () => {
  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default Home;
