import React from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Container, Row, Col, Media, Modal } from "reactstrap";
import Datatable from 'react-data-table-component';
import { getPdfs } from "../../../action/extras";
import { SERVER_URL } from "../../../config";
import { SubTitle, Item, PdfItem } from "../../common";
import useWindowSize from "../../common";
import Loading from "react-loading";
import PdfPreview from "../../../components/common/PdfPreview";
const PdfsMaterial = () => {
    const [pdfs, setPdfs] = React.useState(null);
    const [pdfPreviewUrl, setPdfPreviewUrl] = React.useState("") ;
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
            <CommonLayout parent="home" title="PDFs material">
                <section className="about-page section-b-space">
                    <Container>
                        <Row>
                            <Col sm="12">
                                <SubTitle style={{ borderBottom: '1px solid #ddd', marginBottom: '30px' }}>
                                    PDFs Materials
                                </SubTitle>
                            </Col>
                            <Col sm="8" style={size.width < 580 ? { marginBottom: 20 } : {} }>
                                {
                                    pdfs?.map((pdf, index) => (
                                        <PdfItem key={index} onClick={() => setPdfPreviewUrl(`${SERVER_URL + '\\pdfs\\' + pdf.title}`)} >
                                            <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                            &nbsp;&nbsp;{pdf.name}<br />
                                        </PdfItem>
                                    ))
                                }
                            </Col>
                            <Col sm="4">
                                <div style={{height: 500}}>
                                    <PdfPreview previewUrl={pdfPreviewUrl} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </CommonLayout>
        </>
    );
};

export default PdfsMaterial;
