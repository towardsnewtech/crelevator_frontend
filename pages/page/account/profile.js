import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Container, Row, Form, Input, Label, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../../home';
import { updateInfo } from '../../../action';
import { useRouter } from "next/router";

const Profile = () => {
    const router = useRouter();
    const [authItem, setAuthItem] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

    const changeFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const changeLastName = (e) => {
        setLastName(e.target.value);
    };

    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const saveSetting = () => {
        const id = JSON.parse(localStorage.getItem('user')).user_id;
        const data = {
            id: id,
            first_name: firstName,
            last_name: lastName,
            email: email,
        };
        updateInfo(data).then(res => {
            if(res.success) {
                notify("Successfully Updated", true);
                localStorage.setItem('user', JSON.stringify({
                    user_id: id,
                    email: email,
                    first_name: firstName,
                    last_name: lastName,
                }));
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
        if(localStorage.getItem('user') !== 'null') {
            const user = JSON.parse(localStorage.getItem('user'));
            setEmail(user.email);
            setFirstName(user.first_name);
            setLastName(user.last_name);
        }
    }, []);

    return (
        authItem ?
            <CommonLayout parent="home" title="profile" newLatter={false}>
                <section className="contact-page register-page m-3">
                    <Container>
                        <Row>
                            <Col sm="12" className="theme-form">
                                <h3>PERSONAL DETAIL</h3>
                                <Row>
                                    <Col md="6">
                                        <Label className="form-label" htmlFor="name">First Name</Label>
                                        <Input type="text" className="form-control" id="name" placeholder="Enter Your name"
                                            required="" value={firstName} onChange={changeFirstName} />
                                    </Col>
                                    <Col md="6">
                                        <Label className="form-label" htmlFor="email">Last Name</Label>
                                        <Input type="text" className="form-control" id="last-name"
                                            placeholder="Email" required="" value={lastName} onChange={changeLastName} />
                                    </Col>
                                    <Col md="6">
                                        <Label className="form-label" htmlFor="email">Email</Label>
                                        <Input type="email" className="form-control" id="email" placeholder="Email"
                                            required="" value={email} onChange={changeEmail} />
                                    </Col>                                        
                                    <div className="col-md-12">
                                        <button className="btn btn-sm btn-solid" onClick={saveSetting}>
                                            Save setting
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

export default Profile;