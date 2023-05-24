import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  Label,
  Button,
} from "reactstrap";

import { useRouter } from 'next/router'
import { SERVER_URL } from "../../../config";
import CreateMarkUp from "../../../components/common/CreateMarkUp";
import useWindowSize from "../../common";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { makeStyles } from "@mui/styles";
import { addCart } from "../../../action/products";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchCartList } from "../../../store/slices/cartSlice";

const useStyles = makeStyles({
  title: {
    fontWeight: '800',
    color: 'rgb(199, 32, 24)'
  }
})

const ProductTab = ({ data }) => {
  const dispatch = useDispatch();
  const controller_datas = [
    {
      name: 'HYDRAULIC CONTROLLER',
      price: '$1000',
      contact_no: '+1 770 852 5050',
      description: 'Introducing Hydro Controller, the next generation in hydraulic elevator technology. With Adaptive Slowdown, passengers can enjoy smooth and consistent rides, while saving you time and money. Our advanced controller comes equipped with a range of built-in features that can be easily adjusted to suit your needs. No custom software is required. Plus, our traveler cables are smaller than previous generations, making installation a breeze. Setting up our system has never been easier. Choose Hydro Controller for an elevated elevator experience.'
    },
    {
      name: 'TRACTION CONTROLLER',
      price: '$1500',
      contact_no: '+1 770 852 5050',
      description: 'Experience the future of elevator technology with our state-of-the-art traction controller. Designed with advanced engineering and a simple user interface, it pushes past conventional non-proprietary controllers to deliver supercharged performance with speeds beyond your expectations. Our innovative capabilities allow mechanics to easily share parameters within groups, stream inspection testing, and grant easy access to construction mode. This not only saves you time and effort, but also ensures a smooth and hassle-free experience for both technicians and passengers. Choose our traction controller for unparalleled performance and reliability.'
    }
  ]
  const [index, setIndex] = useState(0);
  const [curData, setCurData] = useState(controller_datas[0]);
  const [imgUrl, setImgUrl] = useState("/assets/images/new/Hydra Product Image Medium 400-400 72dpi.png");

  const [activeTab, setActiveTab] = useState("2");
  const size = useWindowSize();
  const router = useRouter();

  const handleGotoBack = () => {
    router.push(`/products/residential/${data.SubCategory.name.toLowerCase()}?id=${data.SubCategory.id}`)
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

  const handleAddCart = async () => {
    let res = await addCart(router.query.id)
    if (res.success) {
      dispatch(fetchCartList());
      notify("Add Product to Cart Successfully", true);
    } else {
      notify("This Product already added to Cart", false);
    }
  }

  const classes = useStyles();

  return (
    <section className="tab-product m-0">
      <Container>
        <Row>
          {
            window.location.pathname.indexOf('19') > 0 &&
            <Col sm="12" lg="12">
              <img src={'/assets/images/new/Hydra Product Image Medium 400-400 72dpi.png'} width={'10%'} style={{ marginRight: '3rem' }} onClick={() => { setIndex(0), setCurData(controller_datas[0]), setImgUrl('/assets/images/new/Hydra Product Image Medium 400-400 72dpi.png') }} />
              <img src={'/assets/images/new/Controlle Product Image Medium 400-400 72dpi.png'} width={'10%'} onClick={() => { setIndex(1), setCurData(controller_datas[1]), setImgUrl('/assets/images/new/Controlle Product Image Medium 400-400 72dpi.png') }} />
            </Col>
          }
          <Col sm="12" lg="12">
            {
              window.location.pathname.indexOf('19') > 0 ?
                <Row className="product-page-main m-3">
                  <Nav tabs className="nav-material">
                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => setActiveTab("2")}
                      >
                        Image
                      </NavLink>
                    </NavItem>
                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                      <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => setActiveTab("3")}
                      >
                        Details
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={activeTab} className="nav-material">
                    <TabPane tabId="2">
                      {
                        data && <img src={imgUrl} width={size.width < 580 ? '100%' : ''} style={{ marginTop: '20px' }} />
                      }
                    </TabPane>
                    <TabPane tabId="3">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px 0px' }}>
                        <FormGroup>
                          <Label><span className={classes.title}>Name :</span> {curData?.name} </Label>
                        </FormGroup>
                        <FormGroup>
                          <Label><span className={classes.title}>Price :</span> {window.localStorage.getItem("token") ? curData?.price : 'Call for more information'} </Label>
                        </FormGroup>
                        <FormGroup>
                          <Label><span className={classes.title}>Contact Number :</span> {curData?.contact_no} </Label>
                        </FormGroup>
                        <FormGroup>
                          <Label><span className={classes.title}>Description</span> </Label>
                          {
                            <p>
                              {curData?.description}
                            </p>
                          }
                        </FormGroup>
                      </div>
                    </TabPane>
                  </TabContent>
                </Row> :
                <Row className="product-page-main m-3">
                  <Nav tabs className="nav-material">
                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => setActiveTab("2")}
                      >
                        Image
                      </NavLink>
                    </NavItem>
                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                      <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => setActiveTab("3")}
                      >
                        Details
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={activeTab} className="nav-material">
                    <TabPane tabId="2">
                      {
                        data && <img src={`${SERVER_URL}/images/products/${data.image}`} width={size.width < 580 ? '100%' : ''} style={{ marginTop: '20px' }} />
                      }
                    </TabPane>
                    <TabPane tabId="3">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px 0px' }}>
                        <FormGroup>
                          <Label><span className={classes.title}>Name :</span> {data?.name} </Label>
                        </FormGroup>
                        <FormGroup>
                          <Label><span className={classes.title}>Price :</span> {window.localStorage.getItem("token") ? data?.price : 'Call for more information'} </Label>
                        </FormGroup>
                        <FormGroup>
                          <Label><span className={classes.title}>Contact Number :</span> {data?.contact_no} </Label>
                        </FormGroup>
                        <FormGroup>
                          <Label><span className={classes.title}>Availability</span> </Label>
                          {
                            data?.availability && <CreateMarkUp
                              description={data?.availability}
                            />
                          }
                        </FormGroup>
                        <FormGroup>
                          <Label><span className={classes.title}>Features</span> </Label>
                          {
                            data?.features && <CreateMarkUp
                              description={data?.features}
                            />
                          }
                        </FormGroup>
                        <FormGroup>
                          <Label><span className={classes.title}>Specifications</span> </Label>
                          {
                            data?.specifications && <CreateMarkUp
                              description={data?.specifications}
                            />
                          }
                        </FormGroup>
                      </div>
                    </TabPane>
                  </TabContent>
                </Row>
            }
          </Col>
          <Col sm="12" lg="12" style={{ display: 'flex', justifyContent: 'flex-end', gap: 5 }} className="mb-3">
            <Button
              onClick={handleAddCart}
              style={{
                backgroundColor: 'rgb(199, 32, 24)',
                width: '100px',
                border: 'none'
              }}
            >
              Add Cart
            </Button>
            <Button
              onClick={handleGotoBack}
              style={{
                backgroundColor: 'rgb(199, 32, 24)',
                width: '100px',
                border: 'none'
              }}
            >
              <ArrowBackIcon style={{ fontSize: 16 }} /> &nbsp;&nbsp;Back
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductTab;
