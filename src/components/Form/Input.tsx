import React, { useEffect, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';

import useInput from './hook/useInput';
import { EThemes } from '../../Theme/theme';
import { useFormContext } from './hook/useForm';

export interface Props {
	name: string;
	placeholder?: string;
	initValue?: string;
	type?: string;
	required?: boolean;
	validator?: {
		regex: RegExp;
		message: string;
	};
}

const Input: React.FC<Props> = (props) => {
	const { name, validator, placeholder, type, required, initValue } = props;

	const input = useInput(initValue);

	const { setValues } = useFormContext();

	const [touched, setTouched] = useState(false);

	const [error, setError] = useState('');

	const inputMethods = useMemo(
		() => ({
			onBlur: () => setValues({ [name]: input.value }),

			onFocus: () => {
				if (!touched) setTouched(true);
			},
		}),
		[input.value, name, setValues, touched]
	);

	useEffect(() => {
		if (validator && touched) {
			const isValid = validator.regex.test(input.value);

			if (!isValid) setError(validator.message);
			else setError('');
		}
	}, [input.value, touched, validator]);

	return (
		<Wrapper>
			<InputStyled
				{...input}
				{...inputMethods}
				autoComplete='off'
				name={name}
				type={type}
				required={required}
				placeholder={placeholder}
			/>
			<Error error={error}> {error}</Error>
		</Wrapper>
	);
};

export default Input;

export const InputStyled = styled.input`
	padding: 0.5rem 0.2rem;
	width: 100%;
	border-radius: 6px;
	border-color: transparent;
	outline: none;
	transition: 0.3s ease;
	background-color: ${({ theme }) => theme[EThemes.BG_PRIMARY]};
	color: ${({ theme }) => theme[EThemes.TEXT_PRIMARY]};
	&:focus {
		border-color: limegreen;
	}
`;

export const Error = styled.div<{ error: string }>`
	color: orangered;
	min-width: 10px;
	padding: 0.1rem;
	text-align: start;
	font-size: small;
	letter-spacing: 0.1rem;
	opacity: 0;
	width: 0;
	transition: 0.2s ease;

	${({ error }) =>
		!!error &&
		css`
			opacity: 1;
			width: auto;
		`}
`;

export const Wrapper = styled.div``;
