import React from 'react';
import { useForm } from '../../components/Form/hook/useForm';
import Input from '../../components/Form/Input';
import { ButtonPrimary } from '../../components/styles/Button';

const FormExampleScreen = () => {
	const { Form } = useForm();

	return (
		<main>
			<Form>
				<h2>SIGN UP</h2>
				<Input
					required
					name='username'
					type='text'
					placeholder='username:Jane..'
					validator={{ regex: /[a-z]/, message: 'required type name' }}
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
		</main>
	);
};

export default FormExampleScreen;
