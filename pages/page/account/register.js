import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input, Container, Row, Form, Label, Col, FormGroup } from 'reactstrap';
import { signup } from '../../../action';
import { useRouter } from 'next/router';
import Link from 'next/link';
import emailjs from 'emailjs-com'
const Register = () => {
    const router = useRouter();
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [image, setImage] = React.useState(null);
    const [imagedata, setImagedata] = React.useState("");

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
        if (success) {
            toast.success(text, options);
        } else {
            toast.warn(text, options);
        }
    };

    const createAccount = async () => {
        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            imagedata: imagedata ? imagedata : 'no image'
        };
        signup(data).then(async (res) => {
            if (res.success) {
                // notify("Signup Successed!", true);
                // localStorage.setItem('token', res.data.token);

                if (res.data.type == 0) {
                    let message = `
                        <html>
                            <body>
                                <h1>Click below link to verify your email for crelevator.com</h1><br/>
                    ` ;

                    message += `https://crelevator.com/emailverify/${res.data.emailverifytoken}<br/>`
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

                try {
                    router.push(`/emailverify/confirm`);
                } catch (err) {
                    console.log(err)
                }
            } else {
                notify(res.msg, false);
            }
        });
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    const handleImageChange = async (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
        const base64 = await convertBase64(event.target.files[0]);
        setImagedata(base64)
    }

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
                                        <FormGroup className="row" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                                            <input
                                                type="file"
                                                id="imageUpload"
                                                onChange={handleImageChange}
                                                hidden
                                            />
                                            <label
                                                htmlFor="imageUpload"
                                                style={{
                                                    border: '1px solid black',
                                                    width: 150,
                                                    height: 150,
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                {
                                                    image ? <img src={URL.createObjectURL(image)} alt="Uploaded Image" style={{ width: '150px', borderRadius: '50%' }} /> :
                                                        <span>
                                                            Upload Image
                                                        </span>
                                                }
                                            </label>
                                        </FormGroup>
                                        <Row>
                                            <Col md="6">
                                                <Label className="form-label" htmlFor="email">First Name</Label>
                                                <Input type="text" className="form-control" id="fname" placeholder="First Name"
                                                    required="" onChange={changeFirstName} />
                                            </Col>
                                            <Col md="6">
                                                <Label className="form-label" htmlFor="review">Last Name</Label>
                                                <Input type="text" className="form-control" id="lname" placeholder="Last Name"
                                                    required="" onChange={changeLastName} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <Label className="form-label" htmlFor="email">email</Label>
                                                <Input type="email" className="form-control" id="email" placeholder="Email"
                                                    required="" onChange={changeEmail} />
                                            </Col>
                                            <Col md="6">
                                                <Label className="form-label" htmlFor="review">Password</Label>
                                                <Input type="password" className="form-control" id="review"
                                                    placeholder="Enter your password" required="" onChange={changePassword} />
                                            </Col>
                                            <Col md="12">
                                                <a href="#" className="btn btn-solid w-auto" onClick={createAccount}>create Account</a>
                                                <span>&nbsp;&nbsp;&nbsp;Do you have an account? <Link href={'/page/account/login'}>Log In</Link>.</span>
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