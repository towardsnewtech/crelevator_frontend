import React, { useContext, Fragment } from "react";
import Link from "next/link";
import CartHeader from "../headers/common/cart-header";
import CartContext from "../../helpers/cart";
import { Media } from "reactstrap";
import { CurrencyContext } from "../../helpers/Currency/CurrencyContext";
import { fetchCartList, selectCarts } from "../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartContainer = ({ icon }) => {
  const context = useContext(CartContext);
  const currContext = useContext(CurrencyContext);
  const symbol = currContext.state.symbol;
  const total = context.cartTotal;
  const cartList = useSelector(selectCarts);

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchCartList())
  }, [])

  React.useEffect(() => {
    console.log(cartList)
  }, [cartList])

  return (
    <Fragment>
      <li className="onhover-div mobile-cart">
        <div className="cart-qty-cls">{cartList?.length}</div>
        <Link href={`/cart`}>
          <div href={null}>
            <Media src={icon} className="img-fluid" alt="" />
            <i className="fa fa-shopping-cart"></i>
          </div>
        </Link>
        <ul className="show-div shopping-cart">
          
          {cartList?.length > 0 ? (
            <div>
              <li>
                <div className="total">
                  <h5>
                    subtotal :{" "}
                    <span>
                      {symbol}
                      {total}
                    </span>
                  </h5>
                </div>
              </li>
              <li>
                <div className="buttons view-cart">
                  <Link href={`/page/account/cart`}>
                    <a>view cart</a>
                  </Link>
                  <Link href={`/page/account/checkout`}>
                    <a className="checkout">checkout</a>
                  </Link>
                </div>
              </li>
            </div>
          ) : (
            <li>
              <h5>Your cart is currently empty.</h5>
            </li>
          )}
        </ul>
      </li>
    </Fragment>
  );
};

export default CartContainer;
