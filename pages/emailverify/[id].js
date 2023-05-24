import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import 'react-toastify/dist/ReactToastify.css';
import { Input, Container, Row, Form, Label, Col, FormGroup } from 'reactstrap';
import { useRouter } from 'next/router' ;
import Loading from 'react-loading-components'
import { verifyEmail } from '../../action';
import { ToastContainer, toast } from 'react-toastify';
import { setAuthState } from '../../store/slices/authSlice';
import { useDispatch } from 'react-redux';

const Register = () => {
    const dispatch = useDispatch();
    const router = useRouter() ;
    var id = router.query.id ;

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
        verifyEmail({id}).then(res => {
            if (res.success) {
                notify("Email Verified!", true);
                localStorage.setItem('user', JSON.stringify({
                    user_id: res.data.id,
                    email: res.data.email,
                    first_name: res.data.first_name,
                    last_name: res.data.last_name,
                }));
                localStorage.setItem('token', res.token);
                dispatch(setAuthState(true));
                router.push(`/page/account/dashboard`);
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
                            <div style={{ gap: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '300px' }}>
                                <Loading type='oval' width={50} height={50} fill='#f44242' />
                            </div>
                        </Row>
                    </Container>
                </section>
            </CommonLayout>
        </>
    )
}

export default Register