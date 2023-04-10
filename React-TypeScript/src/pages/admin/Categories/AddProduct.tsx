import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../interface/product';
import { Option } from 'antd/es/mentions';

interface IProps {
    onAdd: (product: IProduct) => void;
}
const AddProductPage = (props: IProps) => {

    const navigate = useNavigate()

    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/products')
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your image!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Ctegory"
                    name="categoryId"
                    rules={[{ required: true, message: 'Please input your category!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Add New Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProductPage