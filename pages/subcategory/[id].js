import * as React from 'react';
import { useRouter } from 'next/router'
import { getProductListBySubCategoryId } from '../../action/products';
import MainLayout from '../../components/Layout/mainLayout';
// import SingleProduct from './SingleProduct';
import Loading from 'react-loading-components'

import CommonLayout from '../../components/shop/common-layout';
import MasonryTwoPage from './masonry-2';

// import { withApollo } from '../../helpers/apollo/apollo'

const ProductList = () => {
    const router = useRouter();
    const id = router.query.id;
    const [productList, setProductList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [category_name, setCategoryName] = React.useState();

    React.useEffect(() => {
        setLoading(true);
        if(id) {
            getProductListBySubCategoryId({
                id
            }).then(res => {
                setCategoryName(res.category_name);
                setProductList(res.products);
                setLoading(false);
            }).catch(err => {
                console.log(err)
            })
        }
    }, [id]);

    return (
        <CommonLayout parent="home" title="Products">
            {
                loading &&
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                    <Loading type='oval' width={100} height={100} fill='#f44242' />
                </div>
            }
            <MasonryTwoPage grid={4} colClass="col-lg-3 col-sm-6" 
                productList={productList} category_name={category_name}
            />
        </CommonLayout>
    )
}

export default ProductList;