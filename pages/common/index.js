import * as React from 'react';
import tagStyled from 'styled-components'

export const ItemDiv = tagStyled.div`
    margin-bottom: 30px;
    i {
        color: #b32923;
    }
    @media screen and (max-width : 580px) {
      p {
        margin: 0.1rem;
      }
    }
`
export const SubTitle = tagStyled.p`
    color: #b32923;
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 10px;
`

export const FormDiv = tagStyled.div`
    margin-top: 40px;
    input[type="text"], select, textarea {
        padding: 15px 30px;
        border: 1px solid #ddd;
        width: 100%;
        margin-bottom: 15px;
    }
    input[type="radio"] {
        margin-top: 10px;
        margin-right: 10px;
    }
`

export const ButtonDiv = tagStyled.button`
    background-color: rgb(199, 32, 24);
    border: 1px solid white;
    color: white;
    padding: 10px 50px;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
`

export const Item = tagStyled.a`
    font-size: 16px;
    color: #b32923;
    :hover {
        cursor: pointer;
    }
    @media screen and (max-width : 580px) {
      display: flex;
      align-items: center;
      font-size: 16px;
    }
`

export const PdfItem = tagStyled.div`
    font-size: 20px;
    color: #b32923;
    :hover {
        cursor: pointer;
    }
    @media screen and (max-width : 580px) {
      display: flex;
      align-items: center;
      font-size: 16px;
    }
`


export default function useWindowSize(){
    const [windowSize, setWindowSize] = React.useState({
      width: undefined,
      height: undefined,
    });
  
    React.useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      window.addEventListener("resize", handleResize);
       
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}