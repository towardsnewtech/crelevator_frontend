import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row ,Col} from 'reactstrap';
import Link from 'next/link';
import Home from '../../home';
import { useRouter } from "next/router";
import { setAuthState } from '../../../store/slices/authSlice';
import {
    getAddress
} from '../../../action';

const Dashboard = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [accountInfo,setAccountInfo] = useState(false);
    const [authItem, setAuthItem] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const user_id = JSON.parse(localStorage.getItem('user')).user_id;
    const [address1, setAddress1] = React.useState("");
    const [country, setCountry] = React.useState("US");
    const [city, setCity] = React.useState("");

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.setItem('user', null);
        dispatch(setAuthState(false));
        router.push("/");
    };

    React.useEffect(() => {
        if(localStorage.getItem('token') === null) {
            setAuthItem(false);
        } else {
            setAuthItem(true);
        }
        if(localStorage.getItem('user') !== 'null') {
            const user = JSON.parse(localStorage.getItem('user'));
            setEmail(user.email);
            setFirstName(user.first_name);
            setLastName(user.last_name);
        }
        const data = {
            user_id: user_id,
        };
        getAddress(data).then(res => {
            if(res.success) {
                const address = res.address;
                setAddress1(address.address_first);
                setCountry(address.country);
                setCity(address.city);
            }
        })
    }, []);
    
    return (
        authItem ? 
            <CommonLayout parent="home" title="dashboard">
                <section className="section-b-space">
                    <Container>
                        <Row>
                            <Col lg="3">
                                {window.innerWidth <= 991 ?
                                <div className="account-sidebar" onClick={() => setAccountInfo(!accountInfo)}><a className="popup-btn">my account</a></div>
                                :""}
                                <div className="dashboard-left" style={accountInfo ? {left:"0px"} : {}}> 
                                    <div className="collection-mobile-back" onClick={() => setAccountInfo(!accountInfo)}>
                                        <span className="filter-back">
                                            <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                        </span>
                                    </div>
                                    <div className="block-content">
                                        <ul>
                                            <li className="active"><a href="#">Account Info</a></li>
                                            <li><a href="#">My Orders</a></li>
                                            <li className="last"><a href="#" onClick={logout}>Log Out</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="9">
                                <div className="dashboard-right">
                                    <div className="dashboard">
                                        <div className="page-title">
                                            <h2>My Dashboard</h2>
                                        </div>
                                        <div className="welcome-msg">
                                            <p>Hello, {firstName} {lastName} !</p>
                                            <p>From your My Account Dashboard you have the ability to view a snapshot of your recent
                                            account activity and update your account information. Select a link below to view or
                                        edit information.</p>
                                        </div>
                                        <div className="box-account box-info">
                                            <div className="box-head">
                                                <h2>Account Information</h2>
                                            </div>
                                            <Row>
                                                <Col sm="12">
                                                    <div className="box">
                                                        <div className="box-title">
                                                            <h3>Contact Information</h3>
                                                            <Link href={'/page/account/profile'}>
                                                                Edit
                                                            </Link>
                                                        </div>
                                                        <div className="box-content">
                                                            <h6>{firstName} {lastName}</h6>
                                                            <h6>{email}</h6>
                                                            <h6>
                                                                <Link href={'/page/account/change-pwd'}>
                                                                    Change Password
                                                                </Link>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div>
                                                <div className="box">
                                                    <div className="box-title">
                                                        <h3>Address Book</h3>
                                                    </div>
                                                    <Row>
                                                        <Col sm="12">
                                                            <h6>Shipping Address</h6>
                                                            <address>
                                                                {
                                                                    address1 === "" ?
                                                                        "You have not set a default shipping address."
                                                                    :
                                                                        `${address1}, ${city}, ${country}`
                                                                }
                                                                <br />
                                                                <Link href={'/page/account/address'}>
                                                                    Edit Address
                                                                </Link>
                                                            </address>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </CommonLayout>
        :
            <Home />
    )
}

export default Dashboard