import React from 'react';
import { useDispatch } from 'react-redux';
import CommonLayout from '../../../components/shop/common-layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Form, Label, Input, Col } from 'reactstrap';
import Link from 'next/link';
import { setAuthState } from '../../../store/slices/authSlice';
import { useRouter } from 'next/router';
import {
    signin
} from '../../../action/index';
import ReCAPTCHA from 'react-google-recaptcha';

const Login = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [captcha, setCaptcha] = React.useState(false) ;

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleReCaptcha = (value) => {
        setCaptcha(value);
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

    const login = () => {

       if (captcha == false) {
            notify("ReCAPTCHA First!")
           return;
       }

        const data = {
            email: email,
            password: password,
        };

        signin(data).then(res => {
            if (res) {
                if (res.success) {
                    notify("Login Successed!", true);
                    localStorage.setItem('user', JSON.stringify({
                        user_id: res.user.id,
                        email: res.user.email,
                        first_name: res.user.first_name,
                        last_name: res.user.last_name,
                        photo: res.user.User_Address.photo
                    }));
                    localStorage.setItem('token', res.token);
                    dispatch(setAuthState(true));
                    router.push("/page/account/dashboard");
                } else {
                    notify(res.msg, false);
                }
            }
        })
    };

    return (
        <>
            <CommonLayout parent="home" title="login" newLatter={false}>
                <section className="login-page" style={{ paddingTop: "10px", }}>
                    <Container>
                        <Row style={{ display: "flex", width: "100%", margin: "10px auto", justifyContent: "center" }}>
                            <Col lg="6">
                                <div className="theme-card">
                                    <Form className="theme-form">
                                        <div className="form-group">
                                            <Label className="form-label" htmlFor="email">Email</Label>
                                            <Input type="text" className="form-control" id="email"
                                                placeholder="Email" required="" value={email} onChange={changeEmail} />
                                        </div>
                                        <div className="form-group">
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <Label className="form-label" htmlFor="review">Password</Label>
                                                <a href={'/password_reset'}>Forgot password?</a>
                                            </div>
                                            <Input type="password" className="form-control" id="review"
                                                placeholder="Enter your password" required=""
                                                value={password} onChange={changePassword} />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                                            <ReCAPTCHA
                                                sitekey='6LceBvclAAAAAHw9l_OO-1LwE0QfHkgSWEfexdoh'
                                                onChange={handleReCaptcha}
                                            />
                                        </div>
                                        <a href="#" className="btn btn-solid" onClick={login}>Login</a><span>&nbsp;&nbsp;&nbsp;Don't have an account? <Link href={'/page/account/register'}>Sign up</Link>.</span>
                                    </Form>
                                </div>
                            </Col>
                            {/* <Col lg="6" className="right-login">
                                <h3>New Customer</h3>
                                <div className="theme-card authentication-right">
                                    <h6 className="title-font">Create A Account</h6>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be
                                        able to order from our shop. To start shopping click register.</p>
                                        <a className="btn btn-solid">
                                            <Link href={'/page/account/register'}>
                                                Create an Account
                                            </Link>
                                        </a>
                                </div>
                            </Col> */}
                        </Row>
                    </Container>
                </section>
            </CommonLayout>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer />
        </>
    )
}

export default Login;