import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../interface/product'

interface IProps {
    products: IProduct[]
}
const ProductDetailPage = (props: IProps) => {
    const { id } = useParams()
    const [product, setProduct] = useState<IProduct>()
    useEffect(() => {
        const currentProduct = props.products.find(item => item._id === Number(id))
        setProduct(currentProduct)
    })
    return (
        <div>
            <h3>{product?.name}</h3>
            <p>{product?.price}</p>
        </div>
    )
}

export default ProductDetailPage