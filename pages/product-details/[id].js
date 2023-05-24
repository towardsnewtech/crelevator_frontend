import React from 'react';
import { useRouter } from 'next/router'
import CommonLayout from '../../components/shop/common-layout';
import LeftSidebarPage from './product/leftSidebarPage';
import { useState } from 'react';
import { getProductInformation } from '../../action/products';

const LeftSidebar = () => {
  
  const router = useRouter();
  const id = router.query.id;
  
  const [data, setData] = useState();

  React.useEffect(() => {
    if(id) {
      getProductInformation({id}).then(res => {
        setData(res.product);
      }).catch(err => {
        console.log(err);
        return;
      })
    }
  }, [id]);

  return (
    <CommonLayout parent="Home" title="Product">
      <LeftSidebarPage pathId={id}
        productData={data}
      />
    </CommonLayout>
  );
}


export default LeftSidebar;