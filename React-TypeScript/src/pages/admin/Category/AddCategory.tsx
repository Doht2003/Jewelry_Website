import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Option } from 'antd/es/mentions';
import { ICategory } from '../../../interface/category';

interface IProps {
    onAdd: (category: ICategory) => void;
}
const AddCategoryPage = (props: IProps) => {

    const navigate = useNavigate()

    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/categories')
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

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" style={{ backgroundColor: '#4096ff' }}>
                        Add New Category
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddCategoryPage