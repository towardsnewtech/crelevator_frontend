import React from "react";
import { useSelector } from 'react-redux';
import HeaderOne from "../headers/header-one";
import Breadcrubs from "../common/widgets/breadcrubs";
import Helmet from "react-helmet";
import favicon from "../../public/assets/images/favicon/favicon.ico";
import MasterFooter from "../footers/common/MasterFooter";
import { selectMode } from "../../store/slices/settingSlice";
import FooterBanner from "../footers/footer-banner";
import Banner from "../../pages/home/component/Banner";
import Header from "../headers/Header";
import BgHeader from "../headers/BgHeader";

const CommonLayout = ({ children, title, parent, subTitle, newLatter=true }) => {
  const modeState = useSelector(selectMode);

  return (
    <>
      {/* <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon ? favicon : ""} />
      </Helmet> */}
      <div className="tools-bg">
        {/* <HeaderOne topClass="top-header" logoName={modeState ? "logo1.png" : "logo.png"} /> */}
        <BgHeader logoName={modeState ? "logo1.png" : "logo.png"} />
      </div>
      {/* <HeaderOne topClass="top-header" logoName={modeState ? "logo1.png" : "logo.png"} /> */}
      {/* <Breadcrubs title={title} parent={parent} subTitle={subTitle} /> */}
      <>{children}</>
      <FooterBanner />
      <MasterFooter
        footerClass={"footer-light"}
        footerLayOut={"white-layout"}
        footerSection={"small-section"}
        belowSection={"section-b-space light-layout"}
        logoName="logo1.png"
        layoutClass={"dark-subfooter"}
        newLatter={newLatter}
      />
    </>
  );
};

export default CommonLayout;
