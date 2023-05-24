import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Form, Label, Input, Col } from 'reactstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    forgotPassword
} from '../../action/index';
import emailjs from 'emailjs-com'

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = React.useState("");

    const changeEmail = (e) => {
        setEmail(e.target.value);
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

    const handleResetPassword = () => {
        const data = { email: email };

        forgotPassword(data).then( async (res) => {
            if (res) {
                if (res.success) {
                    console.log(res);
                    if (res.type == 0) {
                        let message = `
                        <html>
                            <body>
                                <h1>Click below link to reset your password for crelevator.com</h1><br/>
                        ` ;

                        message += `https://crelevator.com/password_reset/${res.resetpasswordtoken}<br/>`
                        message += `
                        </body>
                            </html>
                        ` ;

                        let templateParams = {
                            message: message,
                            to_email: email
                        }

                        await emailjs.send('service_ze02uce', 'template_xu7gdf6', templateParams, 'lAchpFSmB113t-ZFN')
                    }
                    router.push("/emailverify/confirm");
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
                                            <Label className="form-label" htmlFor="email">Enter your user account's verified email address and we will send you a password reset link.</Label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                id="email"
                                                placeholder="Email"
                                                required=""
                                                value={email}
                                                onChange={changeEmail}
                                            />
                                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <a href="#" className="btn btn-solid" onClick={handleResetPassword} >Send Reset Link</a>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </CommonLayout>
        </>
    )
}

export default Login;