import React, { useEffect, useState } from 'react'
import { IProduct } from '../interface/product'
import { Link } from 'react-router-dom';

type ProductListProps = {
    products: IProduct[];
}

const HomePage = ({products}: ProductListProps) => {
    if (!products) return <div>Loading...</div>;
  return (
    <div>
        <div className="banner">
                <img className="w-full my-16" src="./assets/img/banner.png" alt=""/>
        </div>
        <main>
                    <div className="flex justify-between ">
                        <p className="text-3xl font-medium">Shop The Latest</p>
                        <p className="text-xl font-medium col_a18A68">View All</p>
                    </div>
                    <div className="grid grid-cols-3 my-9 gap-16">
        {products.data?.map((item: IProduct) => {
                return (
                        <div key={item._id}>
                            <img src={item?.image} alt=""/>
                            <p className="text-xl mt-6 mb-4"><Link to={`/products/${item._id}/`}>{item?.name}</Link></p>
                            <p className="col_a18A68 text-xl font-medium">$ {item?.price}</p>
                        </div>
                        )
            })}
            </div>
            </main>
    </div>
  )
}

export default HomePage