import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row, Form, Input, Label, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../../home';
import { changePassword } from '../../../action';
import { useRouter } from "next/router";

const ChangePassword = () => {
    const router = useRouter();
    const [authItem, setAuthItem] = React.useState(false);
    const [newPWD, setNewPWD] = React.useState("");
    const [confirmPWD, setConfirmPWD] = React.useState("");

    const changeNewPWD = (e) => {
        setNewPWD(e.target.value);
    };

    const changeConfirmPWD = (e) => {
        setConfirmPWD(e.target.value);
    };

    const changePWD = () => {
        if(newPWD !== confirmPWD) {
            notify("Confirm your password.", false);
            return;
        }
        const id = JSON.parse(localStorage.getItem('user')).user_id;
        const data = {
            id: id,
            new_password: newPWD,
        };
        changePassword(data).then(res => {
            if(res.success) {
                notify("Your password has been successfully changed.", true);
                router.push("/page/account/dashboard");
            } else {
                notify(res.msg, false);
            }
        });
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

    React.useEffect(() => {
        if(localStorage.getItem('token') === null) {
            setAuthItem(false);
        } else {
            setAuthItem(true);
        }
    }, []);

    return (
        authItem ?
            <CommonLayout parent="home" title="profile" newLatter={false}>
                <section className="contact-page register-page m-3">
                    <Container>
                        <Row>
                            <Col sm="12" className="theme-form">
                                <h3>Change Password</h3>
                                <Row>
                                    <Col md="6">
                                        <Label className="form-label" htmlFor="newPWD">New Password</Label>
                                        <Input type="password" className="form-control" id="newPWD" placeholder="Enter New Password"
                                            required="" value={newPWD} onChange={changeNewPWD} />
                                    </Col>
                                    <Col md="6">
                                    </Col>
                                    <Col md="6">
                                        <Label className="form-label" htmlFor="confirmPWD">Confirm Password</Label>
                                        <Input type="password" className="form-control" id="confirmPWD" placeholder="Confirm Password"
                                            required="" value={confirmPWD} onChange={changeConfirmPWD} />
                                    </Col>                                        
                                    <div className="col-md-12">
                                        <button className="btn btn-sm btn-solid" onClick={changePWD}>
                                            Change Password
                                        </button>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
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
                </section>
            </CommonLayout>      
        :
            <Home />  
    )
}

export default ChangePassword;