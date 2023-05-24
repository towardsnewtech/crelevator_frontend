import React, { Fragment } from 'react';
import { Row, Col, Container } from "reactstrap";
import CommonLayout from "../../components/shop/common-layout";
import { GetAllProduct } from "../../action/products"

const Products = () => {
    const [productList, setProductList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        GetAllProduct().then(res => {
            console.log(res)
            setProductList(res.products);
            setLoading(false);
        }).catch(err => {
            console.log(err)
        })
    }, []);

    return (
        <CommonLayout parent="home" title="Products">
            {
                loading ?
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                    <Loading type='oval' width={100} height={100} fill='#f44242' />
                </div> : <MasonryTwoPage grid={4} colClass="col-lg-3 col-sm-6" 
                    productList={productList} category_name={category_name}
                />
            }
            
        </CommonLayout>
    )

    // const [data, setData] = React.useState()
    // React.useEffect(() => {
    //     getSubCategoryList().then(res => {
    //         setData(res.categories);
    //     }).catch(err => {
    //         return;
    //     })
    // }, [])

    // return (
    //     <Fragment>
    //         <CommonLayout parent="home" title="PRODUCTS">
    //             <section className="about-page section-b-space">
    //                 <Container>
    //                     <Row>
    //                         <Col lg="2"></Col>
    //                         <Col lg="8" className="m-auto mb-5">
    //                             <div className="title3">
    //                                 <h2>PRODUCTS</h2>
    //                                 <div className="line"></div>
    //                             </div>
    //                         </Col>
    //                         <Col lg="2"></Col>
    //                         {
    //                             data?.slice(0, data.length / 2).map((item, index) => (
    //                                 <Col md="6" key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '50px' }}>
    //                                     <h3 style={{ color: 'red' }}>{item.name}</h3>
    //                                     <img src={`${SERVER_URL}/images/subcategory/${item.image}`} width={'50%'} height={'70%'} />
    //                                 </Col>
    //                             ))
    //                         }
    //                     </Row>
    //                 </Container>
    //             </section>
    //         </CommonLayout>
    //     </Fragment>
    // );
}

export default Products;