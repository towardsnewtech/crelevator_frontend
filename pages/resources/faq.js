import React, { useState } from "react";
import CommonLayout from "../../components/shop/common-layout";
import { ItemDiv, SubTitle } from '../common';
import {
  Collapse,
  Card,
  CardHeader,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import { getFaqs } from "../../action/extras";
import LeftSide from "./left-side";
import Loading from 'react-loading';

const FaqList = ( {faq , isOpen, index, setOpenIndex} ) => {

  return (
    <Card style={{ marginBottom: '0.3rem' }}>
      <CardHeader id="headingOne">
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            type="button"
            onClick={() => { setOpenIndex(isOpen == true ? -1 : index) }}
            aria-expanded="true"
            aria-controls="collapseOne"
            style={{ color: 'red', textDecoration: 'none', fontSize: 16, display: 'flex', alignItems: 'center' }}
          >
            <i className={isOpen ? "fa fa-minus-circle": "fa fa-plus-circle"} aria-hidden="true" style={{ fontSize: 20 }} ></i>&nbsp;&nbsp;&nbsp;
            {faq.title}
          </button>
        </h5>
      </CardHeader>
      <Collapse
        isOpen={isOpen}
        id="collapseOne"
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body" style={{ animation: '1s infinite alternate slidein' }}>
          <p style={{ fontSize: 18 }}>{faq.content}</p>
        </div>
      </Collapse>
    </Card>
  );
};

const FaqPage = () => {
  const [faqData, setFaqData] = React.useState(null);
  const [openIndex, setOpenIndex] = React.useState(-1) ;

  React.useEffect(() => {
    getFaqs().then(res => {
      setFaqData(res.faqs);
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <CommonLayout parent="home" title="faq">
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
              <Col sm="8">
                <div
                >
                  {faqData ? faqData?.map((faq, i) => (
                    <FaqList key={i} faq={faq} isOpen={openIndex == i} setOpenIndex={setOpenIndex} index={i} />
                  )) :
                    <div style={{display:'flex', justifyContent:'center'}}>
                      <Loading type='spin' width={50} height={50} color="rgb(199, 32, 24)" />
                    </div>
                  }
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </CommonLayout>
    </>
  );
};

export default FaqPage;
