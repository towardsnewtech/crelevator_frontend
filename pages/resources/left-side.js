import * as React from 'react';
import { ItemDiv, SubTitle } from '../common';
import useWindowSize from '../common';

const LeftSide = () => {
    return (
        <>
            <ItemDiv>
                <SubTitle>CR Elevator Supply</SubTitle>
                <p>820 Shallowford Rd<br/>Kennesaw, GA 30144</p>
            </ItemDiv>
            <ItemDiv>
                <SubTitle>SALES</SubTitle>
                <p>8:00am - 5:00pm<br/>Monday-Friday(EST)</p>
                <p><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;(770) 852-5050</p>
                <p><i className="fa fa-print" aria-hidden="true"></i>&nbsp;(678) 719-7475</p>
                <p><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;Sales@crelevator.com</p>
            </ItemDiv>
            <ItemDiv>
                <SubTitle>TECHNICAL SUPPORT</SubTitle>
                <p><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;(770) 852-5050</p>
                <p><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;support@crelevator.com</p>
            </ItemDiv>
        </>
    )
}

export default LeftSide;