import { StepMachine, Step, useStepActions, StepContainer } from 'react-step-machine';

import Input from '../../components/Form/Input';
import ScreenLayout from '../../components/Layout/ScreenLayout';
import { useForm } from '../../components/Form/hook/useForm';
import { MainWrapper } from '../../components/styles/Main';
import { ButtonPrimary } from '../../components/styles/Button';

const StepExample = () => {
	const { Form } = useForm();

	const handleSubmit = (values: any) => {
		alert(JSON.stringify(values, null, 2));
	};

	return (
		<ScreenLayout>
			<MainWrapper style={{ width: 500 }}>
				<StepMachine>
					<StepContainer style={{ overflowX: 'hidden', minHeight: '30vh' }}>
						<Step order={1} name='FORM'>
							<Form onSubmit={handleSubmit}>
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
							</Form>
						</Step>
						<Step order={2} name='##'>
							<Form>
								<h2>Password</h2>
								<Input
									required
									name='password'
									type='password'
									placeholder='******'
									validator={{ regex: /[a-z]/, message: 'strong pass' }}
								/>

								<Input
									required
									name='confirm-password'
									type='password'
									placeholder='******'
									validator={{ regex: /[a-z]/, message: 'confirm please' }}
								/>
							</Form>
						</Step>
						<Step order={3} name='##buuuu'>
							<h1 style={{ color: 'orangered', textAlign: 'center' }}>You are awsome</h1>
						</Step>
					</StepContainer>
					<ToggleBtn />
				</StepMachine>
			</MainWrapper>
		</ScreenLayout>
	);
};

export default StepExample;

export const ToggleBtn = () => {
	const { nextStep, previousStep } = useStepActions();

	return (
		<div style={{ display: 'flex', gap: 10, marginTop: 'auto' }}>
			<ButtonPrimary onClick={() => previousStep()}>Prev</ButtonPrimary>
			<ButtonPrimary onClick={() => nextStep()}>Next</ButtonPrimary>
		</div>
	);
};
