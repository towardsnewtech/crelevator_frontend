import React from "react";
import { useRouter } from 'next/router'
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col } from "reactstrap";
import { SubTitle, ItemDiv, FormDiv } from '../common';
import LeftSide from "../resources/left-side";
import tagStyled from 'styled-components';
import { submitQuote } from "../../action/extras";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const QuoteRequest = () => {
  const router = useRouter();
  const [quoteInfo, setQuoteInfo] = React.useState({ product: 'Residential' });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [captcha, setCaptcha] = React.useState(false);

  const handleChange = (e) => {
    setQuoteInfo({
      ...quoteInfo,
      [e.target.name]: e.target.value
    })
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

  const handleSubmit = () => {
    if (captcha == false) {
      notify("ReCAPTCHA First!")
      return;
    }

    let warningmessage = [];

    if (quoteInfo.name == "" || quoteInfo.name == undefined) { warningmessage.push("Name must be needed!") }
    if (quoteInfo.company == "" || quoteInfo.company == undefined) { warningmessage.push("Company must be needed!") }
    if (quoteInfo.city == "" || quoteInfo.city == undefined) { warningmessage.push("City must be needed!") }
    if (quoteInfo.country == "" || quoteInfo.country == undefined) { warningmessage.push("State must be needed!") }
    if (quoteInfo.email == "" || quoteInfo.email == undefined) { warningmessage.push("Email must be needed!") }
    if (quoteInfo.phonenumber == "" || quoteInfo.phonenumber == undefined) { warningmessage.push("PhoneNumber must be needed!") }

    if (warningmessage.length > 0) {
      warningmessage.map(msg => {
        notify(msg, false);
      })
      return;
    }

    submitQuote(quoteInfo).then(async (res) => {
      if (res.success) {
        if (res.type == 0) {
          let message = `<h4 style='color: rgb(199, 32, 24); font-size: 24px;'>Quote Form</h4>
                        <div style='max-width: 768px; padding-left: 15px'>
                          <p style='font-size: 16px'>Name: ${quoteInfo.name}</p>
                          <p style='font-size: 16px'>Company: ${quoteInfo.company}</p>
                          <p style='font-size: 16px'>City: ${quoteInfo.city}</p>
                          <p style='font-size: 16px'>Country: ${quoteInfo.country}</p>
                          <p style='font-size: 16px'>Email: ${quoteInfo.email}</p>
                          <p style='font-size: 16px'>PhoneNumber: ${quoteInfo.phonenumber}</p>
                          <p style='font-size: 16px'>Product: ${quoteInfo.product}</p>
                        </div>` ;

          let templateParams = {
            message: message,
            to_email: res.email
          }

          await emailjs.send('service_ze02uce', 'template_xu7gdf6', templateParams, 'lAchpFSmB113t-ZFN')
        }

        setIsSubmitted(true);
        notify("Submit Successed!", true);
      }
    })
  }

  return (
    <>
      <CommonLayout parent="home" title="Training Videos">
        <section className="about-page section-b-space">
          <Container>
            <Row>
              <Col sm="3">
                <LeftSide />
                <ItemDiv>
                  <SubTitle>Related Document</SubTitle>
                  <button style={{ backgroundColor: 'rgb(199, 32, 24)', border: '1px solid white', color: 'white', padding: '10px 20px', fontSize: 14, fontWeight: 600, width: '200px', textAlign: 'center' }}
                    onClick={() => {
                      router.push('/contact-us/quote-request')
                    }}
                  >QUOTE REQUEST</button>
                </ItemDiv>
              </Col>
              <Col sm="1">
              </Col>
              {
                isSubmitted ?
                  <Col sm="8">
                    <h3 style={{ color: 'rgb(199, 32, 24)', marginBottom: '3rem' }}>Form Submitted Successfully!</h3>
                    <button style={{ backgroundColor: 'rgb(199, 32, 24)', border: '1px solid white', color: 'white', padding: '10px 20px', fontSize: 14, fontWeight: 600, textAlign: 'center' }}
                      onClick={() => {
                        setIsSubmitted(false)
                      }}
                    >Return</button>
                  </Col>
                  :
                  <Col sm="8">
                    <SubTitle>Quote Form</SubTitle>
                    <p style={{ fontSize: 16, color: 'black' }}>Please fill out a general overview of your project and one of our Sales Associates will be in contact.</p>
                    <FormDiv>
                      <input type='text' placeholder="Name*(required)" name="name" value={quoteInfo.name || ''} onChange={handleChange} />
                      <input type='text' placeholder="Company Name*(required)" name="company" value={quoteInfo.company || ''} onChange={handleChange} />
                      <input type='text' placeholder="City*(required)" name="city" value={quoteInfo.city || ''} onChange={handleChange} />
                      <select name="country" value={quoteInfo.country} onChange={handleChange}>
                        <option value="">- Choose State -</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                      <input type='text' placeholder="Email Address*(required)" name="email" value={quoteInfo.email || ''} onChange={handleChange} />
                      <input type='text' placeholder="Phone Number" name="phonenumber" value={quoteInfo.phonenumber || ''} onChange={handleChange} />
                      <select name="product" value={quoteInfo.product || ''} onChange={handleChange}>
                        <option value='Residential'>Residential</option>
                        <option value='Commercial'>Commercial</option>
                      </select>
                      <br />
                      <ReCAPTCHA
                        sitekey='6LceBvclAAAAAHw9l_OO-1LwE0QfHkgSWEfexdoh'
                        onChange={handleReCaptcha}
                      />
                      <br />
                      <Button onClick={handleSubmit}>Submit <i className="fa fa-chevron-right" aria-hidden="true"></i></Button>
                    </FormDiv>
                  </Col>
              }
            </Row>
          </Container>
        </section>
      </CommonLayout>
    </>
  );
};

const Button = tagStyled.button`
  background-color: rgb(199, 32, 24);
  border: 1px solid white;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 600;
  width: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default QuoteRequest;
