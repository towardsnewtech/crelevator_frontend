import * as React from 'react' ;
import { SERVER_URL } from '../../config';

const SingleProduct = (props) => {
    const {
        product
    } = props ;

    React.useEffect(() => {
    }, [product]);

    return (
        <>
            <img src={`${SERVER_URL}/images/products/${product.image}`} alt="" className="img-fluid blur-up lazyloaded" width={200}/>
        </>
    )
}

export default SingleProduct ;