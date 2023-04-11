import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { ICategory } from '../../../interface/category';
import Search from 'antd/es/transfer/search';

interface DataType {
    key: string | number;
    id: number;
    name: string;
    price: number;
}
interface IProps {
    categories: ICategory[],
    onRemove: (id: number | string) => void
}

const onSearch = (value: string) => console.log(value);

const CategoryManagementPage = (props: IProps) => {
    const removeCategory = (id: number | string) => {
        props.onRemove(id)
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (

                <Space size="middle">
                    <Button type="primary" style={{ backgroundColor: 'red' }} onClick={() => removeCategory(record._id)}>Remove</Button>
                    <Button type="primary" style={{ backgroundColor: '#4096ff' }} ><Link to={`/admin/categories/${record._id}/update`}>Update</Link></Button>
                </Space>
            ),
        },
    ];

    const data: DataType[] = props.categories?.map((item: ICategory) => {
        return {
            key: item._id,
            ...item
        }
    })

    return (
        <div>
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
            <Button type='primary' style={{ backgroundColor: '#4096ff' }}><Link to={'/admin/categories/add'}>Add New Product</Link></Button>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </div>
    )
}

export default CategoryManagementPage