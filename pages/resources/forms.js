import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";
import { SubTitle, Item } from '../common';
import useWindowSize from "../common";
import { getPdfs } from "../../action/extras";
import { SERVER_URL } from "../../config";
import tagStyled from 'styled-components';
import LeftSide from "./left-side";

const Forms = () => {

  const [pdfs, setPdfs] = React.useState();
  const size = useWindowSize();

  React.useEffect(() => {
    getPdfs().then(res => {
      setPdfs(res.pdfs);
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <CommonLayout parent="home" title="Training Videos">
        <section className="about-page section-b-space">
          <Container>
            <Row>
              <Col sm="3">
                <LeftSide />
              </Col>
              <Col sm="1">
              </Col>
              <Col sm="4">
                <SubTitle style={{ borderBottom: '1px solid #ddd', marginBottom: '30px' }}>
                    Engineering Data Forms(EDF)
                </SubTitle>
                {
                    pdfs?.map((pdf, index) => (
                        pdf.type == 1 && <Item key={index} href={`${SERVER_URL + '\\pdfs\\' + pdf.title}`} target="_blank">
                            <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                            &nbsp;&nbsp;{pdf.name}<br/>
                        </Item>
                    ))
                }
              </Col>
              <Col sm="4">
                <SubTitle style={size.width > 580 ? { borderBottom: '1px solid #ddd', marginBottom: '30px' } : { borderBottom: '1px solid #ddd', marginBottom: '10px', marginTop: '20px' } }>
                    Other Forms
                </SubTitle>
                {
                    pdfs?.map((pdf, index) => (
                        pdf.type == 2 && <Item key={index} href={`${SERVER_URL + '\\pdfs\\' + pdf.title}`}>
                            <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                            &nbsp;&nbsp;{pdf.name}<br/>
                        </Item>
                    ))
                }
              </Col>
              <Col sm="12">
                <div style={{ height: '20px' }}></div>
              </Col>
              <Col sm="4">
                <FooterItem>
                    <i className="fa fa-list-alt" aria-hidden="true"></i>
                    <SubTitle style={{ color: "black" }}>Online Quote Form</SubTitle>
                </FooterItem>
              </Col>
              <Col sm="4">
                <FooterItem>
                    <i className="fa fa-book" aria-hidden="true"></i>
                    <SubTitle style={{ color: "black" }}>Technical Manuals</SubTitle>
                </FooterItem>
              </Col>
              <Col sm="4">
                <FooterItem>
                    <i className="fa fa-file-text" aria-hidden="true"></i>
                    <SubTitle style={{ color: "black" }}>Product Brochures</SubTitle>
                </FooterItem>
              </Col>
            </Row>
          </Container>
        </section>
      </CommonLayout>
    </>
  );
};

const FooterItem = tagStyled.div`
    background-color: #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    i {
        color: #b32923;
        font-size: 90px;
    }
    @media screen and (max-width : 580px) {
      i {
        font-size: 60px;
      }
    }
`

export default Forms;
