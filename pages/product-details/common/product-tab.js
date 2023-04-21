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
} from "reactstrap";

import { SERVER_URL } from "../../../config";
import CreateMarkUp from "../../../components/common/CreateMarkUp";

const ProductTab = ({data}) => {
  const [activeTab, setActiveTab] = useState("2");

  return (
    <section className="tab-product m-0">
      <Container>
        <Row>
          <Col sm="12" lg="12">
            <Row className="product-page-main m-0">
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
                    data && <img src={`${SERVER_URL}/images/products/${data.image}`} style={{marginTop:'20px'}}/>
                  }
                </TabPane>
                <TabPane tabId="3">
                  <div style={{display:'flex', flexDirection:'column', gap:'10px', marginTop:'20px'}}>
                    <FormGroup>
                      <Label>Name : {data?.name} </Label>
                    </FormGroup>
                    <FormGroup>
                      <Label>Price : {data?.price} </Label>
                    </FormGroup>
                    <FormGroup>
                      <Label>Contact Number : {data?.contact_no} </Label>
                    </FormGroup>
                    <FormGroup>
                      <Label>Availability : </Label>
                      {
                        data?.availability && <CreateMarkUp 
                          description={data?.availability}
                        />
                      }
                    </FormGroup>
                    <FormGroup>
                      <Label>Features : </Label>
                      {
                        data?.features &&  <CreateMarkUp 
                          description={data?.features}
                        />
                      }
                    </FormGroup>
                    <FormGroup>
                      <Label>Specifications : </Label>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductTab;
