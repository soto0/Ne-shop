'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { signInAPI } from '@src/services/signin';
import { ISignIn } from '@src/models/ISignIn';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

const SignIn = () => {
    const router = useRouter();
    const [trigger, { data: user }] = signInAPI.useSignInMutation();
    const methods = useForm<ISignIn>();

    const onSubmit: SubmitHandler<ISignIn> = (values) => {
        trigger(values);
    };

    if (user && !user?.error) {
        Cookies.set('user', JSON.stringify(user));
        router.push('/');
    }

    return (
        <div className='pt-24'>
            <div className='mx-auto mb-[220px] mt-[220px] max-w-[400px] rounded-lg p-[20px] shadow-xl'>
                <h2 className='text-center text-2xl font-bold'>Вход</h2>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <div className='mt-[20px] flex flex-col gap-[10px]'>
                            <input
                                {...methods.register('email', { required: true })}
                                placeholder='Почта'
                                type='email'
                                className='border-[1px] border-black p-[10px] outline-none'
                            />
                            {methods.formState?.errors.email && <p className='text-red-500'>Заполните поле</p>}
                            <input
                                {...methods.register('password', { required: true })}
                                placeholder='Пароль'
                                type='password'
                                className='border-[1px] border-black p-[10px] outline-none'
                            />
                            {methods.formState?.errors.password && <p className='text-red-500'>Заполните поле</p>}
                            {user?.error && <p className='text-center text-red-500'>Неверная почта или пароль</p>}
                        </div>
                        <button type='submit' className='rounden-lg mx-auto mt-[10px] block w-full bg-black p-[10px] text-white'>
                            Войти
                        </button>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
};

export default SignIn;
