import React from 'react'
import { IProduct } from '../interface/product'

type ProductListProps = {
    products: IProduct[];
    onRemove: ( id: number | string) => void;
}

const ProductList = ({products, onRemove}: ProductListProps) => {
    // console.log(products.data);
    // return
    
    if (!products) return <div>Loading...</div>;
  return (
    <div>
        {products.data?.map((item: IProduct, index) => 
            (
                <div key={index}>
                    {item.name} 
                    <button onClick={() => onRemove(item._id)}>Remove</button>
                </div>
            )
        )}
    </div>
  )
}

export default ProductList