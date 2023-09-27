import { useAppDispatch } from '@/app/hooks';
import { authActions } from '@/features/auth/AuthSlice';
import AuthLayout from '@/layouts/AuthLayout/AuthLayout';
import { Button, Form, Input } from 'antd';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { useSnackbar } from 'notistack';

const validationSchema = yup.object().shape({
    phone: yup
        .string()
        .matches(/^[0-9]*$/, 'Số điện thoại chỉ được chứa chữ số')
        .required('Vui lòng nhập số điện thoại'),
    password: yup.string().required('Vui lòng nhập mật khẩu').min(8, 'Mật khẩu phải có ít nhất 8 ký tự'),
});

const LoginModule = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const formik = useFormik({
        initialValues: {
            phone: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                dispatch(authActions.login(values));
                enqueueSnackbar('Đăng nhập thành công !', {
                    variant: 'success',
                });
                router.push('/');
            } catch (err) {
                console.log(err);
            }
        },
    });

    return (
        <AuthLayout>
            <div className="flex items-center justify-center my-7">
                <div className="bg-white w-[600px] p-16 border rounded-lg flex flex-col gap-5">
                    <h1 className="text-3xl font-bold">Đăng nhập</h1>
                    <Form onFinish={formik.handleSubmit} layout="vertical">
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
                        <Button className="w-full mt-2 bg-main text-white text-lg h-10" htmlType="submit">
                            Đăng nhập
                        </Button>
                    </Form>
                    <div className="flex justify-between">
                        <span
                            onClick={() => router.push('/quen-mat-khau')}
                            className="text-main hover:text-orange-300 cursor-pointer"
                        >
                            bạn đã quên mật khẩu
                        </span>
                        <span
                            onClick={() => router.push('/auth/register')}
                            className="text-main hover:text-orange-300 cursor-pointer"
                        >
                            tạo tài khoản mới
                        </span>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default LoginModule;
