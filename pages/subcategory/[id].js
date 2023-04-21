import * as React from 'react';
import { useRouter } from 'next/router'
import { getProductListBySubCategoryId } from '../../action/products';
import MainLayout from '../../components/Layout/mainLayout';
import SingleProduct from './SingleProduct';

import CommonLayout from '../../components/shop/common-layout';
import MasonryTwoPage from './masonry-2';

// import { withApollo } from '../../helpers/apollo/apollo'

const ProductList = () => {
    const router = useRouter();
    const id = router.query.id;
    const [productList, setProductList] = React.useState([]);

    React.useEffect(() => {
        if(id) {
            getProductListBySubCategoryId({
                id
            }).then(res => {
                setProductList(res.products);
            }).catch(err => {
    
            })
        }
    }, [id]);

    return (
        <CommonLayout parent="home" title="Products">
            <MasonryTwoPage grid={4} colClass="col-lg-3 col-sm-6" 
                productList={productList}
            />
        </CommonLayout>
    )
}

export default ProductList;