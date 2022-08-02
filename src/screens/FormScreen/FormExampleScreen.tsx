import * as React from 'react';

import Input from '../../components/Form/Input';
import ScreenLayout from '../../components/Layout/ScreenLayout';
import {useForm} from '../../components/Form/hook/useForm';
import {ButtonPrimary} from '../../components/styles/Button';

const FormExampleScreen: React.FC = () => {
    const {Form} = useForm();

    const handleSubmit = (values: any) => {
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <ScreenLayout title='Form Hook'>
            <Form onSubmit={handleSubmit}>
                <h2>SIGN UP</h2>
                <Input
                    required
                    name='username'
                    type='text'
                    placeholder='username:Jane..'
                    validator={{regex: /[a-z]/, message: 'required type name'}}
                />
                <Input
                    required
                    name='email'
                    type='email'
                    placeholder='email:ex@gmail.com..'
                    validator={{
                        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'badly formated email',
                    }}
                />
                <ButtonPrimary type='submit'>SUBMIT</ButtonPrimary>
            </Form>
        </ScreenLayout>
    );
};

export default FormExampleScreen;
