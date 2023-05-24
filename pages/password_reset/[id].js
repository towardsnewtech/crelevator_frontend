import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import 'react-toastify/dist/ReactToastify.css';
import { Input, Container, Row, Form, Label, Col, FormGroup } from 'reactstrap';
import { useRouter } from 'next/router';
import Loading from 'react-loading-components'
import { resetPassword, verifyEmailForPassword } from '../../action';
import { ToastContainer, toast } from 'react-toastify';
import { setAuthState } from '../../store/slices/authSlice';
import { useDispatch } from 'react-redux';

const PasswordResetCompo = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [password, setPassword] = React.useState("") ;
    const [cpassword, setCPassword] = React.useState("") ;
    var id = router.query.id;

    const changePassword = (e) => {
        setPassword(e.target.value) ;
    }

    const changeConfirmPassword = (e) => {
        setCPassword(e.target.value) ;
    }

    const handleChangePassword = () => {
        if (password !== cpassword) {
            notify("Please enter password correctly!", false) ;
            return ;
        }
        var data = {
            id, password
        }
        resetPassword(data).then(res => {
            notify(res.msg, res.success)
            router.push('/page/account/login')
        })
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
        verifyEmailForPassword({ id }).then(res => {
            if (res.success) {
                notify("Please set your new password!", true);
                // router.push(`/page/account/login`);
            } else {
                notify(res.msg, false);
            }
        });
    }, [id])

    return (
        <>
            <CommonLayout parent="home" title="register">
                <section className="register-page section-b-space">
                    <Container>
                        <Row>
                            <Col lg="3"></Col>
                            <Col lg="6">
                                <div className="theme-card">
                                    <Form className="theme-form">
                                        <div className="form-group">
                                            <Label className="form-label" htmlFor="review">Password</Label>
                                            <Input type="password" className="form-control" id="review"
                                                placeholder="Enter your password" required=""
                                                value={password} onChange={changePassword} />
                                        </div>
                                    </Form>
                                    <Form className="theme-form">
                                        <div className="form-group">
                                            <Label className="form-label" htmlFor="review">Confirm Password</Label>
                                            <Input type="password" className="form-control" id="review"
                                                placeholder="Enter your password" required=""
                                                value={cpassword} onChange={changeConfirmPassword} />
                                        </div>
                                    </Form>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <a href="#" className="btn btn-solid" onClick={handleChangePassword} >Change Password</a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3"></Col>
                        </Row>
                    </Container>
                </section>
            </CommonLayout>
        </>
    )
}

export default PasswordResetCompo