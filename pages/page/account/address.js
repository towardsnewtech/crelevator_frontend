import React from 'react';
import { useRouter } from "next/router";
import CommonLayout from '../../../components/shop/common-layout';
import Login from './login';
import { Container, Row, Form, Input, Label, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import countries from "countries-list";
import { getAddress, updateAddress } from '../../../action';

const Address = () => {
    const router = useRouter();
    const user_id = JSON.parse(localStorage.getItem('user')).user_id;
    const [authItem, setAuthItem] = React.useState(false);
    const [company, setCompany] = React.useState("");
    const [address1, setAddress1] = React.useState("");
    const [address2, setAddress2] = React.useState("");
    const [postcode, setPostcode] = React.useState("");
    const [country, setCountry] = React.useState("US");
    const [countryCodes, setCountryCodes] = React.useState("");
    const [countryNames, setCountryNames] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [phone, setPhone] = React.useState("");

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

    const changeCompany = (e) => {
        setCompany(e.target.value);
    };

    const changeAddress1 = (e) => {
        setAddress1(e.target.value);
    };

    const changeAddress2 = (e) => {
        setAddress2(e.target.value);
    };

    const changePostcode = (e) => {
        setPostcode(e.target.value);
    };

    const changeCountry = (e) => {
        setCountry(e.target.value);
    };

    const changeCity = (e) => {
        setCity(e.target.value);
    };

    const changeState = (e) => {
        setState(e.target.value);
    };

    const changePhone = (e) => {
        setPhone(e.target.value);
    };

    const saveSetting = () => {
        const data = {
            user_id: user_id,
            company: company,
            address_first: address1,
            address_second: address2,
            country: country,
            city: city,
            state: state,
            phone: phone,
            postcode: postcode,
        };
        updateAddress(data).then(res => {
            if(res.success) {
                notify("Your address has been successfully updated.", true);
                router.push("/page/account/dashboard");
            } else {
                notify(res.msg, false);
            }
        });
    };

    React.useEffect(() => {
        if(localStorage.getItem('token') === null) {
            setAuthItem(false);
        } else {
            setAuthItem(true);
        }
        const countryCodes = Object.keys(countries.countries);
        const countryNames = countryCodes.map(code => countries.countries[code].name);
        setCountryCodes(countryCodes);
        setCountryNames(countryNames);
        const data = {
            user_id: user_id,
        };
        getAddress(data).then(res => {
            if(res.success) {
                const address = res.address;
                setCompany(address.company);
                setAddress1(address.address_first);
                setAddress2(address.address_second);
                setCountry(address.country);
                setState(address.state);
                setCity(address.city);
                setPhone(address.phone);
                setPostcode(address.postcode);
            } else {
                notify(res.msg, false);
            }
        });
    }, []);

    return (
        authItem ?
            <CommonLayout parent="home" title="address">
                <section className="contact-page register-page section-b-space">
                    <Container>
                        <Row>
                            <Col sm="12" className="theme-form">
                                <h3>SHIPPING ADDRESS</h3>
                                <Row>
                                    <Col md="6">
                                        <Label className="form-label" htmlFor="name">flat / plot</Label>
                                        <Input type="text" className="form-control" id="home-ploat" placeholder="company name"
                                            required="" value={company} onChange={changeCompany} />
                                    </Col>
                                    <Col md="6">
                                        <Label className="form-label" htmlFor="name">Address1</Label>
                                        <Input type="text" className="form-control" id="address-one" placeholder="Address"
                                            required="" value={address1} onChange={changeAddress1} />
                                    </Col>
                                    <Col md="6">
                                        <Label className="form-label" htmlFor="name">Address2</Label>
                                        <Input type="text" className="form-control" id="address-two" placeholder="Address"
                                            required="" value={address2} onChange={changeAddress2} />
                                    </Col>
                                    <Col md="6">
                                        <Label className="form-label" htmlFor="email">Zip Code</Label>
                                        <Input type="number" className="form-control" id="zip-code" placeholder="zip-code"
                                            required="" value={postcode} onChange={changePostcode} />
                                    </Col>
                                    <Col md="6" className="select_input">
                                        <Label className="form-label" htmlFor="review">Country</Label>
                                        <select className="form-select py-2" size="1" value={country} onChange={changeCountry}>
                                            {
                                                countryCodes.map((item, index) => {
                                                    return <option value={item} key={index}>{countryNames[index]}</option>
                                                })
                                            }
                                        </select>
                                    </Col>
                                    <Col md="6">
                                        <Label className="form-label" htmlFor="review">City</Label>
                                        <Input type="text" className="form-control" id="city" placeholder="City"
                                            required="" value={city} onChange={changeCity} />
                                    </Col>
                                    <Col md="6">
                                        <Label className="form-label" htmlFor="review">Region/State</Label>
                                        <Input type="text" className="form-control" id="region-state"
                                            placeholder="Region/state" required="" value={state} onChange={changeState} />
                                    </Col>
                                    <Col md="6">
                                        <Label className="form-label" htmlFor="review">Phone number</Label>
                                        <Input type="number" className="form-control" id="review" placeholder="Enter your number"
                                            required="" value={phone} onChange={changePhone} />
                                    </Col>
                                    <div className="col-md-12">
                                        <button className="btn btn-sm btn-solid" type="submit" onClick={saveSetting}>Save setting</button>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
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
            </CommonLayout>
        :
            <Login />
    )
}

export default Address;