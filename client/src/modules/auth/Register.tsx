import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { authActions } from '@/features/auth/AuthSlice';
import AuthLayout from '@/layouts/AuthLayout/AuthLayout';
import { Button, Form, Input } from 'antd';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import * as yup from 'yup';
import { Loading } from '@/components/Common';
const validationSchema = yup.object().shape({
    phone: yup.string().required('Vui lòng nhập số điện thoại'),
    name: yup.string().required('Vui lòng nhập tên'),
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
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const { enqueueSnackbar } = useSnackbar();
    const { actionAuth } = useAppSelector((state) => state.auth);
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const { confirmPassword, ...data } = values;
            setIsLoading(true);
            dispatch(authActions.register(data));
            setTimeout(function () {
                setIsLoading(false);
            }, 1000);
        },
    });

    useEffect(() => {
        if (actionAuth == 'Failed') {
            enqueueSnackbar('Đăng ký không thành công !', {
                variant: 'error',
            });
        }
    }, [actionAuth]);

    return (
        <AuthLayout>
            <div className="flex items-center justify-center my-7">
                <div className="bg-white w-[600px] p-16 border rounded-lg flex flex-col gap-5">
                    {isLoading && <Loading />}
                    <h1 className="text-3xl font-bold">Đăng ký</h1>
                    <Form onFinish={formik.handleSubmit} layout="vertical">
                        <div className="mb-2">
                            <label className="text-xl uppercase font-medium">Họ và tên</label>
                            <Input
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-red-500">{formik.errors.name}</div>
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
                        <span>
                            Bạn đã có tài khoản?
                            <Link className="text-main hover:text-orange-300" href="/auth/login">
                                Đăng nhập ngay
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default RegisterModule;

/* 


*/
