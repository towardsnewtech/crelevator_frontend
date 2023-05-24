import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { ToastContainer } from "react-toastify";
import lightImg from "../../public/assets/images/icon/brightness.png";
import darkImg from "../../public/assets/images/icon/moon.png";
import { Media } from "reactstrap";
import config from "./config.json";
import { updateMode } from '../../store/slices/settingSlice';

const ThemeSettings = () => {
  const [themeLayout, setThemeLayout] = useState(false);
  const dispatch = useDispatch();

  /*=====================
     Tap on Top
     ==========================*/
  useEffect(() => {
    if (config.config.layout_version && config.config.layout_type) {
      const bodyClass = document.body.classList
      document.body.className = `${bodyClass} ${config.config.layout_version}  ${config.config.layout_type}`;
    }

    if (localStorage.getItem("color")) {
      document.documentElement.style.setProperty(
        "--theme-deafult",
        localStorage.getItem("color")
      );
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (process.browser) {
      if (document.documentElement.scrollTop > 600) {
        document.querySelector(".tap-top").style = "display: block";
      } else {
        document.querySelector(".tap-top").style = "display: none";
      }
    }
  };

  const changeThemeLayout = () => {
    dispatch(updateMode(!themeLayout));
    setThemeLayout(!themeLayout);
  };

  if (themeLayout) {
    if (process.browser) {
      document.body.classList.add("dark");
      config.config.layout_version = "dark";
    }
  } else {
    if (process.browser) {
      document.body.classList.remove("dark");
      config.config.layout_version = "light";
    }
  }

  return (
    <div>
      <div className="sidebar-btn dark-light-btn">
        <div className="dark-light">
          {/* <div
            className="theme-layout-version"
            onClick={() => changeThemeLayout()}
          >
            {themeLayout ? <Media src={lightImg.src} className="img-fluid" alt="" /> : <Media src={darkImg.src} className="img-fluid" alt="" /> }
          </div> */}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ThemeSettings;
