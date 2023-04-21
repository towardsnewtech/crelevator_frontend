import * as React from 'react';
import tagStyled from 'styled-components';

const CreateMarkUp = (props) => {

    const {
        description
    } = props ;

    const ctrl = React.useRef(null) ;

    const decodeHtml = (html) => {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    
    React.useEffect(() => {
        if(ctrl) ctrl.current.innerHTML = decodeHtml(description) ;
    }, []);

    return (
        <MainContainer>
            <div ref={ctrl} >
            </div>
        </MainContainer>
    )
}

export default CreateMarkUp;

const MainContainer = tagStyled.div`
    p {
        padding-top : 5px !important;
    }
`