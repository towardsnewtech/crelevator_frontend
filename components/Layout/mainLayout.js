import React, { Fragment, useEffect } from "react";
import { useSelector } from 'react-redux';
import Helmet from "react-helmet";
import Header from "../../components/headers/Header"; 
import { selectMode } from "../../store/slices/settingSlice";
const MainLayout = ({children}) => {
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
            { children }
          </div>
        </Fragment>
    )
}

export default MainLayout;