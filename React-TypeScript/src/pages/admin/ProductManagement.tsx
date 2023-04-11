import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { IProduct } from '../../interface/product';
import Search from 'antd/es/transfer/search';
import { ICategory } from '../../interface/category';

interface DataType {
    key: string | number;
    id: number;
    name: string;
    price: number;
}
interface IProps {
    products: IProduct[],
    onRemove: (id: number | string) => void
}
const onSearch = (value: string) => console.log(value);

const ProductManagementPage = (props: IProps) => {
    const removeProduct = (id: number | string) => {
        props.onRemove(id)
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Product Image',
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Product Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Product Category',
            dataIndex: 'categoryId',
            key: 'categoryId',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeProduct(record._id)}>Remove</Button>
                    <Button type="primary" style={{ backgroundColor: '#4096ff' }} ><Link to={`/admin/products/${record._id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.products.data?.map((item: IProduct) => {
        return {
            key: item._id,
            ...item
        }
    })

    return (
        <div>
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
            <Button type='primary' style={{ backgroundColor: '#4096ff' }}><Link to={'/admin/products/add'}>Add New Product</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
    )
}

export default ProductManagementPage