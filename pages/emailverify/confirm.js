import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row } from 'reactstrap';
import Loading from 'react-loading-components'
import { Typography } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

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
        notify("If you don't receive message within 5 minutes, Please Check your SPAM folder.", false)
    }, [])

    return (
        <>
            <CommonLayout parent="home" title="register">
                <section className="register-page section-b-space">
                    <Container>
                        <Row>
                            <div style={{ gap: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '300px' }}>
                                <Loading type='oval' width={50} height={50} fill='#f44242' />
                                <Typography>Please Check your email</Typography>
                            </div>
                        </Row>
                    </Container>
                </section>
            </CommonLayout>
        </>
    )
}

export default Register