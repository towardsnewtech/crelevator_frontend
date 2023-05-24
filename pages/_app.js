import React, { useEffect, useState } from "react";
import ThemeSettings from "../components/customizer/theme-settings";
import "../public/assets/scss/app.scss";
import { ToastContainer } from "react-toastify";
import TapTop from "../components/common/widgets/Tap-Top";
// import MessengerCustomerChat from "react-messenger-customer-chat";
import CartContextProvider from "../helpers/cart/CartContext";
import { WishlistContextProvider } from "../helpers/wishlist/WishlistContext";
import FilterProvider from "../helpers/filter/FilterProvider";
import SettingProvider from "../helpers/theme-setting/SettingProvider";
import { CompareContextProvider } from "../helpers/Compare/CompareContext";
import { CurrencyContextProvider } from "../helpers/Currency/CurrencyContext";
import Helmet from "react-helmet";
// import { ApolloProvider } from "@apollo/client";
// import { useApollo } from '../helpers/apollo';
import { Provider } from 'react-redux';
import { wrapper } from '../store/store';

export default function MyApp({ Component, ...rest }) {
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState();
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  // const apolloClient = useApollo(pageProps);

  useEffect(() => {
    const path = window.location.pathname.split("/");
    const url = path[path.length - 1];
    document.body.classList.add("dark");

    let timer = setTimeout(function () {
      setIsLoading(false)
    }, 1000);
    return () => { clearTimeout(timer) }
  }, []);
  return (
    // <>
    //   <div style={{ backgroundColor: 'white', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //     <h1 style={{ color: 'red', textTransform: 'none' }}>Under Construction</h1>
    //   </div>
    // </>
    <>
      <style jsx global>{`
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }

      ::-webkit-scrollbar-track {
        background: white;
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgb(199, 32, 24);
      }

      ::-webkit-scrollbar-thumb:hover {
        background: 'rgb(199, 32, 24)';
      }
    `}</style>
      <Provider store={store}>
        {/* <ApolloProvider client={apolloClient}> */}
        {isLoading ? (
          <div className="loader-wrapper">
            {url === "Christmas" ? (
              <div id="preloader"></div>
            ) : (
              <div className="loader"></div>
            )}
          </div>
        ) : (
          <>
            {/* <MessengerCustomerChat
              pageId="2123438804574660"
              appId="406252930752412"
              htmlRef="https://connect.facebook.net/en_US/sdk.js"
            /> */}
            <Helmet>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              {/* <Head>
                <link rel="icon" type="image/x-icon" href={favicon} />
              </Head> */}

              <title>CRElevator</title>
              <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png" />
              <link rel="manifest" href="/assets/images/favicon/site.webmanifest" />
              <link rel="mask-icon" href="/assets/images/favicon/safari-pinned-tab.svg" color="#5bbad5" />
              <meta name="msapplication-TileColor" content="#da532c" />
              <meta name="theme-color" content="#ffffff" />

            </Helmet>

            <div>
                <SettingProvider>
                  <CompareContextProvider>
                    <CurrencyContextProvider>
                      <CartContextProvider>
                        <WishlistContextProvider>
                          <FilterProvider>
                            <Component {...pageProps} />
                          </FilterProvider>
                        </WishlistContextProvider>
                      </CartContextProvider>
                    </CurrencyContextProvider>
                    <ThemeSettings />
                  </CompareContextProvider>
                </SettingProvider>
                <ToastContainer />
                <TapTop />
            </div>
          </>
        )}
        {/* </ApolloProvider> */}
      </Provider>
    </>
  );
}
