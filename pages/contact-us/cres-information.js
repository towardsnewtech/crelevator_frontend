import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col } from "reactstrap";
import { ButtonDiv, FormDiv, SubTitle, ItemDiv } from "../common";
import useWindowSize from "../common";
import LeftSide from "../resources/left-side";
import { useRouter } from 'next/router';
import { submitCRES } from "../../action/extras";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import CreateMarkUp from "../../components/common/CreateMarkUp";

const CRES_Information = () => {
	const size = useWindowSize();
	const router = useRouter();
	const [cresInfo, setCresInfo] = React.useState({});
	const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [captcha, setCaptcha] = React.useState(false) ;

	const handleChange = (e) => {
		setCresInfo({
			...cresInfo,
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

	const handleSubmit = (e) => {
		if (captcha == false) {
            notify("ReCAPTCHA First!")
           return;
       }
	   
		let warningmessage = [];
		if (cresInfo.firstname == "" || cresInfo.firstname == undefined) { warningmessage.push("First Name must be needed!") }
		if (cresInfo.lastname == "" || cresInfo.lastname == undefined) { warningmessage.push("Last Name must be needed!") }
		if (cresInfo.email == "" || cresInfo.email == undefined) { warningmessage.push("Email must be needed!") }
		if (cresInfo.phonenumber == "" || cresInfo.phonenumber == undefined) { warningmessage.push("PhoneNumber must be needed!") }
		if (cresInfo.jobtitle == "" || cresInfo.jobtitle == undefined) { warningmessage.push("Job Title must be needed!") }
		if (cresInfo.country == "" || cresInfo.country == undefined) { warningmessage.push("State must be needed!") }

		if (cresInfo.company == "" || cresInfo.company == undefined) { warningmessage.push("Company must be needed!") }
		if (cresInfo.numofelevator == "" || cresInfo.numofelevator == undefined) { warningmessage.push("You have to choose Number of Elevator Per Month!") }
		if (cresInfo.howhear == "" || cresInfo.howhear == undefined) { warningmessage.push("How Did You Hear About US?") }
		if (cresInfo.fav_language == "" || cresInfo.fav_language == undefined) { warningmessage.push("Select one of <Interested in purchasing?>") }

		if (warningmessage.length > 0) {
			warningmessage.map(msg => {
				notify(msg, false);
			})
			return;
		}

		submitCRES(cresInfo).then(async (res) => {
			if (res.success) {
				if (res.type == 0) {
					let message = `
									<div style='max-width: 768px; padding-left: 15px;'>
										<h5 style='color: rgb(199, 32, 24); font-size: 20px;'>Your Information</h5>
										<div style='padding-left: 10px;'>
											<div style='display: flex;'>
												<p style='width: 50%; font-size: 16px;'>First Name: ${cresInfo.firstname}</p> <p style='width: 50%; font-size: 16px;'>Last Name: ${cresInfo.lastname}</p>
											</div>
											<div style='display: flex'>
												<p style='width: 50%; font-size: 16px;'>Job Title: ${cresInfo.jobtitle}</p> <p style='width: 50%; font-size: 16px;'>State: ${cresInfo.country}</p>
											</div>
											<div style='display: flex'>
												<p style='width: 50%; font-size: 16px;'>PhoneNumber: ${cresInfo.phonenumber}</p> <p style='width: 50%; font-size: 16px;'>Email: ${cresInfo.email}</p>
											</div>
										</div>
										<h5 style='color: rgb(199, 32, 24); padding-top: 20px; font-size: 20px;'>Company Information</h5>
										<div style='padding-left: 10px'>
											<p style='font-size: 16px'>Company: ${cresInfo.company}</p>
											<p style='font-size: 16px'>Number of Elevator Per Month<br/>&nbsp;&nbsp;&nbsp; ${cresInfo.numofelevator}</p>
											<p style='font-size: 16px'>How Did You Hear About Us?<br/>&nbsp;&nbsp;&nbsp; ${cresInfo.howhear}</p>
											<p style='font-size: 16px'>Comment<br/>&nbsp;&nbsp;&nbsp; ${cresInfo.comment == undefined ? "" : cresInfo.comment}</p>
											<p style='font-size: 16px'>Interested in purchasing?<br/>&nbsp;&nbsp;&nbsp; ${cresInfo.fav_language}</p><br/>
										</div>
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
						<FormDiv>
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
								{
									isSubmitted ?
										<Col sm="9">
											<h3 style={{ color: 'rgb(199, 32, 24)', marginBottom: '3rem' }}>Form Submitted Successfully!</h3>
											<button style={{ backgroundColor: 'rgb(199, 32, 24)', border: '1px solid white', color: 'white', padding: '10px 20px', fontSize: 14, fontWeight: 600, textAlign: 'center' }}
												onClick={() => {
													setIsSubmitted(false)
												}}
											>Return</button>
										</Col>
										:
										<Col sm="9">
											<Row>
												<Col md="12">
													<SubTitle style={{ fontSize: 24 }}>Contact Us Today</SubTitle>
													<SubTitle style={{ marginBottom: '1rem' }}>Your Information</SubTitle>
												</Col>
												<Col md="6">
													<input type="text" placeholder="First Name*" name="firstname" value={cresInfo.firstname || ''} onChange={handleChange} />
												</Col>
												<Col md="6">
													<input type="text" placeholder="Last Name*" name="lastname" value={cresInfo.lastname || ''} onChange={handleChange} />
												</Col>
												<Col md="6">
													<input type="text" placeholder="Job Title*" name="jobtitle" value={cresInfo.jobtitle || ''} onChange={handleChange} />
												</Col>
												<Col md="6">
													<input type="text" placeholder="Phone Number*" name="phonenumber" value={cresInfo.phonenumber || ''} onChange={handleChange} />
												</Col>
												<Col md="6">
													<input type="text" placeholder="Email*" name="email" value={cresInfo.email || ''} onChange={handleChange} />
												</Col>
												<Col md="6">
													<select name="country" value={cresInfo.country} onChange={handleChange}>
														<option>- Choose State -</option>
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
												</Col>
												<Col md="12">
													<SubTitle style={{ marginBottom: '1rem', marginTop: '2rem' }}>Company Information</SubTitle>
												</Col>
												<Col md="12">
													<input type="text" placeholder="Company*" name="company" value={cresInfo.company || ""} onChange={handleChange} />
												</Col>
												<Col md="12">
													<h6 style={{ display: 'flex', justifyContent: 'flex-start' }}>Number of Elevator Per Month</h6>
													<select defaultValue={0} name="numofelevator" value={cresInfo.numofelevator} onChange={handleChange} >
														<option value="">- Please Select -</option>
														<option>5-10</option>
														<option>15-20</option>
														<option>25-30</option>
														<option>35-40</option>
														<option>45+</option>
													</select>
												</Col>
												<Col md="12">
													<h6 style={{ display: 'flex', justifyContent: 'flex-start' }}>How Did You Hear About US?</h6>
													<select defaultValue={0} name="howhear" value={cresInfo.howhear} onChange={handleChange}>
														<option value="">- Please Select -</option>
														<option>Referral</option>
														<option>Internet Search</option>
													</select>
												</Col>
												<Col md="12">
													<textarea style={{ height: '150px' }} placeholder="Please include any comments here" name="comment" value={cresInfo.comment} onChange={handleChange} />
												</Col>
												<Col md="12" style={{ display: 'flex', justifyContent: 'flex-start' }}>
													<h6>Interested in purchasing?</h6>
												</Col>
												<Col md="12" style={{ display: 'flex', justifyContent: 'flex-start' }}>
													<form style={{ textAlign: 'left' }} name="purchase" value={cresInfo.purchase} onChange={handleChange}>
														<input type="radio" id="month" name="fav_language" value="Monthly" />
														<label htmlFor="month">Monthly</label><br />
														<input type="radio" id="quarter" name="fav_language" value="Quarterly" />
														<label htmlFor="quarter">Quarterly</label><br />
														<input type="radio" id="semiannual" name="fav_language" value="Semiannually" />
														<label htmlFor="semiannual">Semiannually</label><br />
														<input type="radio" id="annual" name="fav_language" value="Annually" />
														<label htmlFor="annual">Annually</label>
													</form>
												</Col>
												<Col md="12">
													<br />
													<ReCAPTCHA
														sitekey='6LceBvclAAAAAHw9l_OO-1LwE0QfHkgSWEfexdoh'
														onChange={handleReCaptcha}
													/>
												</Col>
												<Col md="12">
													<ButtonDiv onClick={handleSubmit}>Talk to A Human</ButtonDiv>
												</Col>
											</Row>
										</Col>
								}
							</Row>
						</FormDiv>
					</Container>
				</section>
			</CommonLayout>
		</>
	)
}

export default CRES_Information;