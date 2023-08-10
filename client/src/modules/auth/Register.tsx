import React from 'react';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import { Form, Input, Button } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import Link from 'next/link';

const validationSchema = yup.object().shape({
    email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
    phone: yup.string().required('Vui lòng nhập số điện thoại'),
    password: yup
        .string()
        .required('Vui lòng nhập mật khẩu')
        .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
        .matches(/^(?=.*[A-Z]).+$/, 'Mật khẩu phải có ít nhất 1 chữ in hoa'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), ''], 'Mật khẩu không khớp')
        .required('Vui lòng xác nhận mật khẩu'),
});

const RegisterModule = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Xử lý logic đăng ký ở đây
            console.log(values);
        },
    });

    return (
        <MainLayout>
            <div className="flex items-center justify-center my-7">
                <div className="bg-white w-[600px] p-16 border rounded-lg flex flex-col gap-5">
                    <h1 className="text-3xl font-bold">Đăng ký</h1>
                    <Form onFinish={formik.handleSubmit} layout="vertical">
                        <div className="mb-2">
                            <label className="text-xl uppercase font-medium">số điện thoại</label>
                            <Input
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="mb-2">
                            <label className="text-xl uppercase font-medium">số điện thoại</label>
                            <Input
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className="text-red-500">{formik.errors.phone}</div>
                            ) : null}
                        </div>
                        <div className="mb-2">
                            <label className="text-xl uppercase font-medium">Mật khẩu</label>
                            <Input.Password
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-500">{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <div className="mb-2">
                            <label className="text-xl uppercase font-medium">Mật khẩu</label>
                            <Input.Password
                                name="confirmPassword"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <div className="text-red-500">{formik.errors.confirmPassword}</div>
                            ) : null}
                        </div>
                        <Button className="w-full mt-2 bg-main text-white text-lg h-10" htmlType="submit">
                            Đăng ký
                        </Button>
                    </Form>
                    <div className="">
                        <span>Bấm vào nút đăng ký tức là bạn đã đồng ý với quy định sử dụng của chúng tôi</span>
                        <span>
                            Bạn đã có tài khoản?
                            <Link className="text-main hover:text-orange-300" href="/auth/login">
                                Đăng nhập ngay
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default RegisterModule;

/* 


*/
