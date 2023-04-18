import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux'; 
import { selectAuthState } from '../../../store/slices/authSlice'; 

const TopBarDark = ({ topClass, fluid }) => {
  const router = useRouter();
  const authState = useSelector(selectAuthState);
  const [authItem, setAuthItem] = React.useState(false);

  React.useEffect(() => {
    if(localStorage.getItem('token') === null) {
      setAuthItem(false);
    } else {
      setAuthItem(true);
    }
  }, []);

  return (
    <div className={topClass}>
      <Container fluid={fluid}>
        <Row>
          <Col lg="6">
            <div className="header-contact">
              <ul>
                <li>Welcome to Our store CR Elevator</li>
                <li>
                  <i className="fa fa-phone text-white" aria-hidden="true"></i>Call Us: +1 (888) 209-4030
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" className="text-end">
            <ul className="header-dropdown">
              <li className="onhover-dropdown mobile-account">
                <Link href={authState || authItem ? `/page/account/dashboard` : `/page/account/login`}>
                  <a><i className="fa fa-user" aria-hidden="true"></i> My Account</a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBarDark;
