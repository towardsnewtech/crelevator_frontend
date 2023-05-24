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
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    if(localStorage.getItem('token') === null) {
      setAuthItem(false);
    } else {
      setAuthItem(true);
    }

    if(localStorage.getItem('user') !== 'null') {
      const user = JSON.parse(localStorage.getItem('user'));
      setUser(user);
    }
  }, []);

  return (
    <div className={topClass}>
      <Container fluid={fluid}>
        <Row>
          <Col lg="6">
            <div className="header-contact">
              <ul>
                <li>Welcome to CR Elevator Supply</li>
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
                  <a><i className="fa fa-user" aria-hidden="true"></i>{user?.first_name != undefined ? user.first_name + ' ' + user.last_name : 'Log In'}</a>
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
