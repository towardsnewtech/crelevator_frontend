import React from "react";
import { useSelector } from 'react-redux';
import HeaderOne from "../headers/header-one";
import Breadcrubs from "../common/widgets/breadcrubs";
import Helmet from "react-helmet";
import favicon from "../../public/assets/images/favicon/favicon.ico";
import MasterFooter from "../footers/common/MasterFooter";
import { selectMode } from "../../store/slices/settingSlice";

const CommonLayout = ({ children, title, parent, subTitle, newLatter=true }) => {
  const modeState = useSelector(selectMode);

  return (
    <>
      {/* <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon ? favicon : ""} />
      </Helmet> */}
      <HeaderOne topClass="top-header" logoName={modeState ? "logo1.png" : "logo.png"} />
      <Breadcrubs title={title} parent={parent} subTitle={subTitle} />
      <>{children}</>
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
