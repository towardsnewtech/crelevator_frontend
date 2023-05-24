import React,{Fragment} from 'react';
import {Container, Button, Form} from "reactstrap";
import tagStyled from 'styled-components';
import {useRouter} from 'next/router';
import useWindowSize from '../../pages/common'

const FooterBanner = () => {
  const router=  useRouter();
  const size = useWindowSize() ;
  
  return (
    <Fragment>
        <div style={{ width:'100%', backgroundColor: '#c72018', padding:'1rem'}}>
          <Container style={size.width > 450 ? { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } : { display: 'flex', flexDirection: 'column' }}>
            <Form style={size.width > 450 ? {} : { display: 'flex', flexDirection: 'column', alignItems : 'center' }}>
                <h5 style={{ color: 'white' }}>Contact us for a consultation</h5>
                {
                  size.width > 450 ?
                  <h2 style={{ color: 'white', fontWeight: 800 }}>(770) 852-5050</h2>
                  : <>&nbsp;<h5 style={{ color: 'white', fontWeight: 800, marginTop: '-1.5rem' }}>(770) 852-5050</h5></>
                }
            </Form>
            <FooterButton
              onClick={() => {
                router.push('/contact-us/quote-request')
              }}
            >QUOTE REQUEST</FooterButton>
          </Container>
        </div>
    </Fragment>
  )
}

const FooterButton = tagStyled.button`
  background-color: rgb(199, 32, 24);
  border: 1px solid white;
  color: white;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 600;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
  @media screen and (max-width : 450px) {
    justify-content : space-between;
    width: 50%;
    margin: auto;
  }
`
export default FooterBanner;