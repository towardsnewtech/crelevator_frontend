import React from "react";
import CommonLayout from '../components/shop/common-layout';
import { getCart, removeCart } from "../action/products";
import tagStyled from 'styled-components';
import { Container } from "reactstrap";
import { SERVER_URL } from "../config";
import { toast } from "react-toastify";
import { useMediaQuery } from "@mui/material";
import Loading from 'react-loading-components'
import { fetchCartList } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const Wishliat = () => {
    const [cartList, setCartList] = React.useState(null);
    const dispatch = useDispatch() ;

    const handleGetCart = async () => {
        let res = await getCart();
        if (res.success) {
            setCartList(res.carts);
        }
    }

    const handleRemoveCart = async (id) => {
        let res = await removeCart(id);
        if (res.success) {
            dispatch(fetchCartList());
            notify("Remove Product from Cart Successfully", true) ;
            handleGetCart() ;
        }
    }

    const notify = (text, success) => {
        const options = {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        };
        if (success) {
            toast.success(text, options);
        } else {
            toast.warn(text, options);
        }
    };

    React.useEffect(() => {
        handleGetCart();
    }, [])

    const match550 = useMediaQuery('(min-width: 550px)') ;

    return (
        <CommonLayout parent="home" title="cart">
            <Container style={{ flexDirection: 'column' }}>
                {
                    cartList ? cartList.length ? cartList.map((cart, index) => (
                        <CartItem key={index}>
                            <Product style={match550 ? {} : {flexDirection: 'column'} }>
                                <img src={`${SERVER_URL}/images/products/${cart.Product.image}`} width={200} />
                                <div>
                                    <h4 style={{ color: "rgb(199, 32, 24)", fontSize: 22, fontWeight: 600 }}>{cart.Product.name} </h4>
                                    <h4 style={{ color: "rgb(199, 32, 24)", fontSize: 25 }}>${cart.Product.price} </h4>
                                </div>
                            </Product>
                            <div style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' }} onClick={() => handleRemoveCart(cart.id)}>
                                <h3>X</h3>
                            </div>
                        </CartItem>
                    ))
                    : <div style={{ gap: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '300px' }}>
                        <h2 style={{ color: "rgba(199, 32, 24)" }}>Your Cart is currently empty</h2>
                        </div>
                    : <div style={{ gap: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '300px' }}>
                        <Loading type='oval' width={50} height={50} fill='#f44242' />
                    </div>
                }
            </Container>
        </CommonLayout>
    )
}

const CartItem = tagStyled.div`
    border: 2px solid gray ;
    border-radius: 10px;
    margin: 2rem 0;
    position: relative;
`
const Product = tagStyled.div`
    display: flex;
    align-items: center;
    padding-left: 5%;
    gap: 20px;
`

export default Wishliat;