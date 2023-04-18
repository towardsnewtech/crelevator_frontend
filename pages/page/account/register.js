import React from 'react';
import { useDispatch } from 'react-redux';
import CommonLayout from '../../../components/shop/common-layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input, Container, Row, Form, Label ,Col} from 'reactstrap';
import { signup } from '../../../action';
import { setAuthState } from '../../../store/slices/authSlice';
import {useRouter} from 'next/router';

const Register = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const changeFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const changeLastName = (e) => {
        setLastName(e.target.value);
    };

    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

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
        if(success) {
            toast.success(text, options);
        } else {
            toast.warn(text, options);
        }
    };

    const createAccount = () => {
        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        };
        signup(data).then(res => {
            if(res.success) {
                notify("Signup Successed!", true);
                localStorage.setItem('user', JSON.stringify({
                    user_id: res.user.id,
                    email: res.user.email,
                    first_name: res.user.first_name,
                    last_name: res.user.last_name,
                }));
                localStorage.setItem('token', res.data.token);
                dispatch(setAuthState(true));
                router.push("/page/account/dashboard");
            } else {
                notify(res.msg, false);
            }
        });
    };

    return (
        <>
            <CommonLayout parent="home" title="register">
                <section className="register-page section-b-space">
                    <Container>
                        <Row>
                            <Col lg="12">
                                <h3>create account</h3>
                                <div className="theme-card">
                                    <Form className="theme-form">
                                        <Row>
                                            <Col md="6">
                                                <Label className="form-label" for="email">First Name</Label>
                                                <Input type="text" className="form-control" id="fname" placeholder="First Name"
                                                    required="" onChange={changeFirstName} />
                                            </Col>
                                            <Col md="6">
                                                <Label className="form-label" for="review">Last Name</Label>
                                                <Input type="text" className="form-control" id="lname" placeholder="Last Name"
                                                    required="" onChange={changeLastName} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <Label className="form-label" for="email">email</Label>
                                                <Input type="email" className="form-control" id="email" placeholder="Email"
                                                    required="" onChange={changeEmail} />
                                            </Col>
                                            <Col md="6">
                                                <Label className="form-label" for="review">Password</Label>
                                                <Input type="password" className="form-control" id="review"
                                                    placeholder="Enter your password" required="" onChange={changePassword} />
                                            </Col>
                                            <Col md="12">
                                                <a href="#" className="btn btn-solid w-auto" onClick={createAccount}>create Account</a>
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>
                            </Col>
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
                theme="light"
            />
            <ToastContainer />
        </>
    )
}

export default Register