import React, { useEffect } from 'react';
import { ProductDataSelecter, productLoadingSelecter } from './selecters/Product';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductAction, productLoadedAction } from './actions/Product';
import axios from 'axios';

interface ProductListProps {
}

const ProductList: React.FC<ProductListProps> = () => {

    const loading = useSelector( productLoadingSelecter)
   const products = useSelector(ProductDataSelecter)
  const dispatch = useDispatch()
   useEffect( () => {
    
   dispatch(loadProductAction())
   axios.get("https://dummyjson.com/products").then((data) => {
      dispatch(productLoadedAction(data.data.products))
      console.log('data.data' , data.data.products)
   })
   } , [])

 
   

  return (
    <div>
      {loading && <h1 className="text-3xl font-bold m-32 ">Loading...</h1>}
      {products && products.map(product => <p className='text-2xl ' key={product.id}>{product.title}  </p>)}
    </div>
  );
};

export default ProductList;